'use client';

import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { EmailTemplate, createEmailTemplate, updateEmailTemplate } from '@/lib/email-templates';
import { Loader2 } from 'lucide-react';

interface EmailTemplateEditorProps {
    template: EmailTemplate | null;
    open: boolean;
    existingTypes?: string[];
    onClose: () => void;
    onSave: () => void;
}

export function EmailTemplateEditor({
    template,
    open,
    existingTypes = [],
    onClose,
    onSave,
}: EmailTemplateEditorProps) {
    const { toast } = useToast();
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        lead_type: 'cold' as 'cold' | 'hot',
        html_content: '',
    });

    useEffect(() => {
        if (template) {
            setFormData({
                name: template.name,
                subject: template.subject,
                lead_type: template.lead_type as 'cold' | 'hot',
                html_content: template.html_content,
            });
        } else {
            // Smart default: If cold exists, default to hot.
            const defaultType = existingTypes.includes('cold') ? 'hot' : 'cold';

            setFormData({
                name: '',
                subject: '',
                lead_type: defaultType as any,
                html_content: 'Hello {{name}},\n\n...',
            });
        }
    }, [template, open, existingTypes]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        // ... (rest of submit)
        try {
            if (template) {
                await updateEmailTemplate(template.id, formData);
                toast({
                    title: 'Template Updated',
                    description: 'Email template saved successfully.',
                });
            } else {
                await createEmailTemplate(formData);
                toast({
                    title: 'Template Created',
                    description: 'New email template created successfully.',
                });
            }
            onSave();
            onClose();
        } catch (error: any) {
            // ...
            toast({
                title: 'Error',
                description: error.message || 'Failed to save template',
                variant: 'destructive',
            });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
            <DialogContent className="sm:max-w-[1200px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{template ? 'Edit Template' : 'Create Template'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Template Name</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g. Initial Outreach"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Template Type</Label>
                            <Select
                                value={formData.lead_type}
                                onValueChange={(val: any) => setFormData({ ...formData, lead_type: val })}
                                disabled={!!template} // Disable type change on edit
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cold" disabled={!template && existingTypes.includes('cold')}>
                                        Cold Lead Outreach
                                    </SelectItem>
                                    <SelectItem value="hot" disabled={!template && existingTypes.includes('hot')}>
                                        Appointment Follow Up
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Email Subject</Label>
                        <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g. Question about your solar needs"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Left: HTML Editor */}
                        <div className="space-y-2">
                            <Label htmlFor="content">Email Content (HTML)</Label>
                            <Textarea
                                id="content"
                                value={formData.html_content}
                                onChange={(e) => setFormData({ ...formData, html_content: e.target.value })}
                                className="min-h-[350px] font-mono text-sm"
                                placeholder="<html><body>...</body></html>"
                                required
                            />
                            <p className="text-xs text-muted-foreground">
                                Supported variables: <code>{'{{name}}'}</code>, <code>{'{{phone}}'}</code>, <code>{'{{webhook}}'} Only for Cold leads templates</code>
                            </p>
                        </div>
                        {/* Right: Live Preview */}
                        <div className="space-y-2">
                            <Label>Preview</Label>
                            <div className="h-[400px] rounded-md border overflow-hidden relative">
                                <iframe
                                    title="Email Preview"
                                    srcDoc={formData.html_content || '<p style="color: #888; padding: 16px;">Enter HTML content to see preview...</p>'}
                                    className="absolute top-0 left-0 w-[111%] h-[111%] border-0"
                                    style={{
                                        transform: 'scale(0.9)',
                                        transformOrigin: '0 0',
                                    }}
                                    sandbox="allow-same-origin"
                                />
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Live preview of your email template
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose} disabled={isSaving}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSaving}>
                            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Save Template
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
