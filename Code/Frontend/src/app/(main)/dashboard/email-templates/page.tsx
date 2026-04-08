'use client';

import { useEffect, useState, useCallback } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { EmailTemplateEditor } from '@/components/email-templates/EmailTemplateEditor';
import {
    fetchEmailTemplates,
    setCurrentTemplate,
    deleteEmailTemplate,
    EmailTemplate,
} from '@/lib/email-templates';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, CheckCircle2, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function EmailTemplatesPage() {
    const { toast } = useToast();
    const [templates, setTemplates] = useState<EmailTemplate[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editorOpen, setEditorOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [templateToDelete, setTemplateToDelete] = useState<EmailTemplate | null>(null);
    const [isSettingCurrent, setIsSettingCurrent] = useState<string | null>(null);

    const loadTemplates = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await fetchEmailTemplates();
            setTemplates(data);
        } catch (error: any) {
            console.error('Failed to load templates:', error);
            toast({
                title: 'Error Loading Templates',
                description: error.message || 'Failed to load email templates',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        loadTemplates();
    }, [loadTemplates]);

    const handleCreate = () => {
        setSelectedTemplate(null);
        setEditorOpen(true);
    };

    const handleEdit = (template: EmailTemplate) => {
        setSelectedTemplate(template);
        setEditorOpen(true);
    };

    const handleSetCurrent = async (template: EmailTemplate) => {
        setIsSettingCurrent(template.id);
        try {
            await setCurrentTemplate(template.id);
            toast({
                title: 'Success',
                description: 'Template set as active for this type',
            });
            await loadTemplates();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to set active template',
                variant: 'destructive',
            });
        } finally {
            setIsSettingCurrent(null);
        }
    };

    const handleDeleteClick = (template: EmailTemplate) => {
        setTemplateToDelete(template);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (!templateToDelete) return;

        try {
            await deleteEmailTemplate(templateToDelete.id);
            toast({
                title: 'Success',
                description: 'Template deleted successfully',
            });
            await loadTemplates();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete template',
                variant: 'destructive',
            });
        } finally {
            setDeleteDialogOpen(false);
            setTemplateToDelete(null);
        }
    };

    const getLeadTypeBadge = (leadType: string) => {
        const typeMap: Record<string, string> = {
            cold: 'Cold Outreach',
            hot: 'Appointment Follow Up',
        };
        const variants: Record<string, 'default' | 'secondary'> = {
            cold: 'secondary',
            hot: 'default',
        };

        const label = typeMap[leadType] || leadType;
        const variant = variants[leadType] || 'outline';

        return (
            <Badge variant={variant}>
                {label}
            </Badge>
        );
    };

    return (
        <ProtectedRoute>
            <DashboardLayout>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">Email Templates</h1>
                            <p className="text-muted-foreground mt-1">
                                Manage automated email templates
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline"
                                className="bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                onClick={loadTemplates} disabled={isLoading}>
                                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                                Refresh
                            </Button>
                            {/* <Button onClick={handleCreate}>
                                <Plus className="h-4 w-4 mr-2" />
                                Create Template
                            </Button> */}
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="text-center py-8 text-muted-foreground">Loading templates...</div>
                    ) : templates.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground mb-4">No templates found</p>
                            <Button onClick={handleCreate}>
                                <Plus className="h-4 w-4 mr-2" />
                                Create Your First Template
                            </Button>
                        </div>
                    ) : (
                        <div className="border rounded-lg bg-white overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {templates.map((template) => (
                                        <TableRow key={template.id}>
                                            <TableCell className="font-medium">{template.name}</TableCell>
                                            <TableCell className="max-w-md truncate">{template.subject}</TableCell>
                                            <TableCell>{getLeadTypeBadge(template.lead_type)}</TableCell>
                                            <TableCell>
                                                {template.is_current ? (
                                                    <Badge variant="success" className="gap-1 bg-green-600 hover:bg-green-700 text-white" >
                                                        <CheckCircle2 className="h-3 w-3" />
                                                        ACTIVE
                                                    </Badge>
                                                ) : (
                                                    <span className="text-muted-foreground text-sm">Inactive</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-sm text-muted-foreground">
                                                {new Date(template.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {!template.is_current && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleSetCurrent(template)}
                                                            disabled={isSettingCurrent === template.id}
                                                            title="Set as Active"
                                                        >
                                                            {isSettingCurrent === template.id ? (
                                                                <RefreshCw className="h-3 w-3 animate-spin" />
                                                            ) : (
                                                                <CheckCircle2 className="h-4 w-4 text-muted-foreground hover:text-green-600" />
                                                            )}
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleEdit(template)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDeleteClick(template)}
                                                    >
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </div>

                <EmailTemplateEditor
                    template={selectedTemplate}
                    existingTypes={templates.map(t => t.lead_type)}
                    open={editorOpen}
                    onClose={() => {
                        setEditorOpen(false);
                        setSelectedTemplate(null);
                    }}
                    onSave={loadTemplates}
                />

                <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Delete Template</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to delete &quot;{templateToDelete?.name}&quot;? This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground">
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </DashboardLayout>
        </ProtectedRoute>
    );
}
