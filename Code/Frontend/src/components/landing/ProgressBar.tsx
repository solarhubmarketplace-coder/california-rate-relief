'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-slate-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-teal-600">
          {Math.round(progress)}% Complete
        </span>
      </div>

      {/* Progress Track */}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Dots */}
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${step <= currentStep
                ? 'bg-teal-600 scale-110'
                : 'bg-slate-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
