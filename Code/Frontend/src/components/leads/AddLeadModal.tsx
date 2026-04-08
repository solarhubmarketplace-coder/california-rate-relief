'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Loader2, UserPlus } from 'lucide-react';
import { Lead } from '@/types';
import { createLead } from '@/lib/leads';

interface AddLeadModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onLeadAdded?: (lead: Lead) => void;
}

interface AddLeadFormData {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    source: Lead['source'];
    type: 'hot' | 'cold';
    bill_amount: string;
}

const initialFormData: AddLeadFormData = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    source: 'website',
    type: 'hot', // Default to hot leads (immediate call)
    bill_amount: '',
};

export function AddLeadModal({ open, onOpenChange, onLeadAdded }: AddLeadModalProps) {
    const [formData, setFormData] = useState<AddLeadFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<AddLeadFormData>>({});
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validateForm = (): boolean => {
        const newErrors: Partial<AddLeadFormData> = {};

        if (!formData.first_name.trim()) {
            newErrors.first_name = 'First name is required';
        }

        if (!formData.last_name.trim()) {
            newErrors.last_name = 'Last name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number format';
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (formData.bill_amount && isNaN(Number(formData.bill_amount))) {
            newErrors.bill_amount = 'Bill amount must be a number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Create the lead using the API
            const newLead = await createLead({
                first_name: formData.first_name.trim(),
                last_name: formData.last_name.trim(),
                phone: formData.phone.trim(),
                email: formData.email.trim() || undefined,
                source: formData.source,
                type: formData.type,
                bill_amount: formData.bill_amount ? Number(formData.bill_amount) : undefined,
            });

            // Call the callback with the new lead
            onLeadAdded?.(newLead);

            // Reset form and close modal
            setFormData(initialFormData);
            setErrors({});
            onOpenChange(false);
        } catch (error) {
            console.error('Failed to add lead:', error);
            setSubmitError(error instanceof Error ? error.message : 'Failed to add lead. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof AddLeadFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            setFormData(initialFormData);
            setErrors({});
            onOpenChange(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className='sm:max-w-[500px]'>
                <DialogHeader>
                    <DialogTitle className='flex items-center gap-2'>
                        <UserPlus className='h-5 w-5 text-primary' />
                        Add New Lead
                    </DialogTitle>
                    <DialogDescription>
                        Enter the lead information below. Fields marked with * are required.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Submit Error Message */}
                    {submitError && (
                        <div className='rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive'>
                            {submitError}
                        </div>
                    )}

                    {/* Name Fields */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='first_name'>
                                First Name <span className='text-destructive'>*</span>
                            </Label>
                            <Input
                                id='first_name'
                                placeholder='John'
                                value={formData.first_name}
                                onChange={(e) => handleInputChange('first_name', e.target.value)}
                                disabled={isSubmitting}
                            />
                            {errors.first_name && (
                                <p className='text-xs text-destructive'>{errors.first_name}</p>
                            )}
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='last_name'>
                                Last Name <span className='text-destructive'>*</span>
                            </Label>
                            <Input
                                id='last_name'
                                placeholder='Doe'
                                value={formData.last_name}
                                onChange={(e) => handleInputChange('last_name', e.target.value)}
                                disabled={isSubmitting}
                            />
                            {errors.last_name && (
                                <p className='text-xs text-destructive'>{errors.last_name}</p>
                            )}
                        </div>
                    </div>

                    {/* Phone Field */}
                    <div className='space-y-2'>
                        <Label htmlFor='phone'>
                            Phone Number <span className='text-destructive'>*</span>
                        </Label>
                        <Input
                            id='phone'
                            type='tel'
                            placeholder='(555) 555-0123'
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            disabled={isSubmitting}
                        />
                        {errors.phone && (
                            <p className='text-xs text-destructive'>{errors.phone}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className='space-y-2'>
                        <Label htmlFor='email'>Email Address</Label>
                        <Input
                            id='email'
                            type='email'
                            placeholder='john.doe@email.com'
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <p className='text-xs text-destructive'>{errors.email}</p>
                        )}
                    </div>

                    {/* Source and Bill Amount */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='source'>Lead Source</Label>
                            <Select
                                value={formData.source}
                                onValueChange={(value) =>
                                    handleInputChange('source', value as Lead['source'])
                                }
                                disabled={isSubmitting}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder='Select source' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='facebook'>Facebook</SelectItem>
                                    <SelectItem value='google'>Google</SelectItem>
                                    <SelectItem value='google_ads'>Google Ads</SelectItem>
                                    <SelectItem value='instantly'>Instantly</SelectItem>
                                    <SelectItem value='referral'>Referral</SelectItem>
                                    <SelectItem value='website'>Website</SelectItem>
                                    <SelectItem value='csv_import'>CSV Import</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='bill_amount'>Monthly Bill ($)</Label>
                            <Input
                                id='bill_amount'
                                type='number'
                                placeholder='200'
                                value={formData.bill_amount}
                                onChange={(e) => handleInputChange('bill_amount', e.target.value)}
                                disabled={isSubmitting}
                            />
                            {errors.bill_amount && (
                                <p className='text-xs text-destructive'>{errors.bill_amount}</p>
                            )}
                        </div>
                    </div>

                    {/* Lead Type */}
                    <div className='space-y-2'>
                        <Label htmlFor='type'>Lead Type</Label>
                        <Select
                            value={formData.type}
                            onValueChange={(value) =>
                                handleInputChange('type', value as 'hot' | 'cold')
                            }
                            disabled={isSubmitting}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder='Select type' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='hot'>
                                    🔥 Hot Lead - Call immediately
                                </SelectItem>
                                <SelectItem value='cold'>
                                    ❄️ Cold Lead - Nurture first
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <p className='text-xs text-muted-foreground'>
                            Hot leads are called by AI immediately. Cold leads receive nurture emails first.
                        </p>
                    </div>

                    <DialogFooter className='pt-4'>
                        <Button
                            type='button'
                            variant='outline'
                            onClick={handleClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type='submit' disabled={isSubmitting} className='gap-2'>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className='h-4 w-4 animate-spin' />
                                    Adding...
                                </>
                            ) : (
                                <>
                                    <UserPlus className='h-4 w-4' />
                                    Add Lead
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
