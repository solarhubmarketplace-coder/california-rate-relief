import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        // Status variants for the dashboard
        success:
          "border-transparent bg-status-success/20 text-status-success",
        warning:
          "border-transparent bg-status-warning/20 text-status-warning",
        error:
          "border-transparent bg-status-error/20 text-status-error",
        info:
          "border-transparent bg-status-info/20 text-status-info",
        new:
          "border-transparent bg-status-new/20 text-status-new",
        // Lead status badges
        qualified:
          "border-transparent bg-status-success/20 text-status-success",
        contacted:
          "border-transparent bg-status-info/20 text-status-info",
        disqualified:
          "border-transparent bg-status-error/20 text-status-error",
        // Source badges
        facebook:
          "border-transparent bg-blue-500/20 text-blue-400",
        google:
          "border-transparent bg-red-500/20 text-red-400",
        instantly:
          "border-transparent bg-purple-500/20 text-purple-400",
        referral:
          "border-transparent bg-green-500/20 text-green-400",
        website:
          "border-transparent bg-cyan-500/20 text-cyan-400",
        // Call outcome badges
        booked:
          "border-transparent bg-status-success/20 text-status-success",
        voicemail:
          "border-transparent bg-status-warning/20 text-status-warning",
        hangup:
          "border-transparent bg-muted text-muted-foreground",
        failed:
          "border-transparent bg-status-error/20 text-status-error",
        dnc:
          "border-transparent bg-status-error/20 text-status-error",
        not_qualified:
          "border-transparent bg-status-error/20 text-status-error",
        // Appointment status
        scheduled:
          "border-transparent bg-status-info/20 text-status-info",
        confirmed:
          "border-transparent bg-status-success/20 text-status-success",
        completed:
          "border-transparent bg-muted text-muted-foreground",
        cancelled:
          "border-transparent bg-status-error/20 text-status-error",
        no_show:
          "border-transparent bg-status-warning/20 text-status-warning",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
