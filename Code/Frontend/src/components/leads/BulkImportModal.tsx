'use client';

import { useState, useRef, useCallback } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileSpreadsheet, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import axiosClient from '@/lib/axios';

interface BulkImportModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onImportComplete: () => void;
}

interface ParsedLead {
    name: string;
    phone: string;
    email?: string;
    source?: string;
}

interface ImportResult {
    success: boolean;
    created: number;
    duplicates: number;
    errors: string[];
}

// Parse CSV content into an array of lead objects
function parseCSV(content: string): ParsedLead[] {
    const lines = content.trim().split('\n');
    if (lines.length < 2) {
        throw new Error('CSV must have a header row and at least one data row');
    }

    // Parse header row (case-insensitive)
    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());

    // Find column indices
    const nameIndex = headers.findIndex((h) => h === 'name' || h === 'full_name' || h === 'fullname');
    const firstNameIndex = headers.findIndex((h) => h === 'first_name' || h === 'firstname');
    const lastNameIndex = headers.findIndex((h) => h === 'last_name' || h === 'lastname');
    const phoneIndex = headers.findIndex((h) => h === 'phone' || h === 'phone_number' || h === 'phonenumber');
    const emailIndex = headers.findIndex((h) => h === 'email' || h === 'email_address' || h === 'emailaddress');
    const sourceIndex = headers.findIndex((h) => h === 'source');

    if (phoneIndex === -1) {
        throw new Error('CSV must have a "phone" column');
    }

    if (nameIndex === -1 && firstNameIndex === -1) {
        throw new Error('CSV must have a "name" or "first_name" column');
    }

    const leads: ParsedLead[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Handle quoted values with commas inside
        const values: string[] = [];
        let current = '';
        let inQuotes = false;

        for (const char of line) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());

        // Build lead object
        let name = '';
        if (nameIndex !== -1) {
            name = values[nameIndex] || '';
        } else if (firstNameIndex !== -1) {
            const firstName = values[firstNameIndex] || '';
            const lastName = lastNameIndex !== -1 ? values[lastNameIndex] || '' : '';
            name = `${firstName} ${lastName}`.trim();
        }

        const phone = values[phoneIndex] || '';
        const email = emailIndex !== -1 ? values[emailIndex] : undefined;
        const source = sourceIndex !== -1 ? values[sourceIndex] : 'csv_import';

        if (name && phone) {
            leads.push({ name, phone, email, source });
        }
    }

    return leads;
}

export function BulkImportModal({ open, onOpenChange, onImportComplete }: BulkImportModalProps) {
    const { toast } = useToast();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [parsedLeads, setParsedLeads] = useState<ParsedLead[]>([]);
    const [parseError, setParseError] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [importResult, setImportResult] = useState<ImportResult | null>(null);
    const [showAllLeads, setShowAllLeads] = useState(false);

    const resetState = () => {
        setSelectedFile(null);
        setParsedLeads([]);
        setParseError(null);
        setIsUploading(false);
        setUploadProgress(0);
        setImportResult(null);
        setShowAllLeads(false);
    };

    const handleFileSelect = useCallback(async (file: File) => {
        if (!file.name.endsWith('.csv')) {
            setParseError('Please select a CSV file');
            return;
        }

        setSelectedFile(file);
        setParseError(null);
        setImportResult(null);

        try {
            const content = await file.text();
            const leads = parseCSV(content);

            if (leads.length === 0) {
                setParseError('No valid leads found in the CSV file');
                return;
            }

            setParsedLeads(leads);
        } catch (error) {
            setParseError(error instanceof Error ? error.message : 'Failed to parse CSV file');
            setParsedLeads([]);
        }
    }, []);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleImport = async () => {
        if (parsedLeads.length === 0) return;

        setIsUploading(true);
        setUploadProgress(10);

        try {
            // Call the bulk import API
            const response = await axiosClient.post('/leads/bulk', {
                leads: parsedLeads,
            });

            setUploadProgress(100);

            const result = response.data || response;

            // Handle different response formats:
            // - result.created could be a number or an array of leads
            // - result.data could contain the created leads
            let createdCount = 0;
            if (typeof result.created === 'number') {
                createdCount = result.created;
            } else if (Array.isArray(result.created)) {
                createdCount = result.created.length;
            } else if (Array.isArray(result.data)) {
                createdCount = result.data.length;
            } else if (Array.isArray(result)) {
                createdCount = result.length;
            } else {
                createdCount = parsedLeads.length;
            }

            const duplicateCount = typeof result.duplicates === 'number'
                ? result.duplicates
                : (Array.isArray(result.duplicates) ? result.duplicates.length : 0);

            setImportResult({
                success: true,
                created: createdCount,
                duplicates: duplicateCount,
                errors: result.errors || [],
            });

            toast({
                title: 'Import Complete',
                description: `Successfully imported ${createdCount} leads`,
            });

            onImportComplete();
        } catch (error: any) {
            console.error('Bulk import error:', error);
            setImportResult({
                success: false,
                created: 0,
                duplicates: 0,
                errors: [error.response?.data?.message || error.message || 'Import failed'],
            });

            toast({
                title: 'Import Failed',
                description: error.response?.data?.message || 'Failed to import leads',
                variant: 'destructive',
            });
        } finally {
            setIsUploading(false);
        }
    };

    const handleClose = () => {
        resetState();
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className='sm:max-w-lg'>
                <DialogHeader>
                    <DialogTitle className='flex items-center gap-2'>
                        <FileSpreadsheet className='h-5 w-5 text-primary' />
                        Bulk Import Leads
                    </DialogTitle>
                    <DialogDescription>
                        Upload a CSV file to import multiple leads at once
                    </DialogDescription>
                </DialogHeader>

                <div className='space-y-4'>
                    {/* Drop Zone */}
                    {!selectedFile && (
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={cn(
                                'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
                                isDragging
                                    ? 'border-primary bg-primary/5'
                                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                            )}
                        >
                            <input
                                ref={fileInputRef}
                                type='file'
                                accept='.csv'
                                onChange={handleFileInputChange}
                                className='hidden'
                            />
                            <Upload className='h-10 w-10 mx-auto mb-3 text-muted-foreground' />
                            <p className='text-sm font-medium'>
                                Drop your CSV file here, or click to browse
                            </p>
                            <p className='text-xs text-muted-foreground mt-1'>
                                Required columns: name (or first_name), phone
                            </p>
                        </div>
                    )}

                    {/* Selected File Info */}
                    {selectedFile && !importResult && (
                        <div className='rounded-lg border border-border p-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <FileSpreadsheet className='h-8 w-8 text-primary' />
                                    <div>
                                        <p className='font-medium text-sm'>{selectedFile.name}</p>
                                        <p className='text-xs text-muted-foreground'>
                                            {parsedLeads.length} leads found
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant='ghost'
                                    size='icon'
                                    onClick={resetState}
                                    disabled={isUploading}
                                >
                                    <X className='h-4 w-4' />
                                </Button>
                            </div>

                            {/* Preview */}
                            {parsedLeads.length > 0 && (
                                <div className={`mt-4 overflow-y-auto ${showAllLeads ? 'max-h-60' : 'max-h-40'}`}>
                                    <table className='w-full text-xs'>
                                        <thead className='bg-muted sticky top-0'>
                                            <tr>
                                                <th className='text-left p-2'>Name</th>
                                                <th className='text-left p-2'>Phone</th>
                                                <th className='text-left p-2'>Email</th>
                                                <th className='text-left p-2'>Source</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(showAllLeads ? parsedLeads : parsedLeads.slice(0, 5)).map((lead, i) => (
                                                <tr key={i} className='border-t border-border'>
                                                    <td className='p-2'>{lead.name}</td>
                                                    <td className='p-2 font-mono'>{lead.phone}</td>
                                                    <td className='p-2 text-muted-foreground'>{lead.email || '—'}</td>
                                                    <td className='p-2'>{lead.source}</td>
                                                </tr>
                                            ))}
                                            {parsedLeads.length > 5 && (
                                                <tr
                                                    className='border-t border-border cursor-pointer hover:bg-muted/50 transition-colors'
                                                    onClick={() => setShowAllLeads(!showAllLeads)}
                                                >
                                                    <td colSpan={4} className='p-2 text-primary text-center font-medium'>
                                                        {showAllLeads
                                                            ? '▲ Show less'
                                                            : `▼ Show all ${parsedLeads.length} leads (${parsedLeads.length - 5} more)`
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Parse Error */}
                    {parseError && (
                        <div className='flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg'>
                            <AlertCircle className='h-4 w-4 shrink-0' />
                            {parseError}
                        </div>
                    )}

                    {/* Upload Progress */}
                    {isUploading && (
                        <div className='space-y-2'>
                            <Progress value={uploadProgress} />
                            <p className='text-xs text-muted-foreground text-center'>
                                Importing leads...
                            </p>
                        </div>
                    )}

                    {/* Import Result */}
                    {importResult && (
                        <div
                            className={cn(
                                'p-4 rounded-lg',
                                importResult.success
                                    ? 'bg-green-500/10 border border-green-500/20'
                                    : 'bg-destructive/10 border border-destructive/20'
                            )}
                        >
                            <div className='flex items-center gap-2 mb-2'>
                                {importResult.success ? (
                                    <CheckCircle className='h-5 w-5 text-green-500' />
                                ) : (
                                    <AlertCircle className='h-5 w-5 text-destructive' />
                                )}
                                <span className='font-medium'>
                                    {importResult.success ? 'Import Successful' : 'Import Failed'}
                                </span>
                            </div>
                            {importResult.success && (
                                <div className='text-sm text-muted-foreground'>
                                    <p>✓ {importResult.created} leads created</p>
                                    {importResult.duplicates > 0 && (
                                        <p>⚠ {importResult.duplicates} duplicates skipped</p>
                                    )}
                                </div>
                            )}
                            {importResult.errors.length > 0 && (
                                <div className='text-sm text-destructive mt-2'>
                                    {importResult.errors.map((err, i) => (
                                        <p key={i}>• {err}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Actions */}
                    <div className='flex justify-end gap-2'>
                        <Button variant='outline' onClick={handleClose}>
                            {importResult ? 'Close' : 'Cancel'}
                        </Button>
                        {!importResult && (
                            <Button
                                onClick={handleImport}
                                disabled={parsedLeads.length === 0 || isUploading}
                            >
                                {isUploading ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Importing...
                                    </>
                                ) : (
                                    <>
                                        <Upload className='mr-2 h-4 w-4' />
                                        Import {parsedLeads.length} Leads
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
