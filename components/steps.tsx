import React from "react"
import { cn } from "@/lib/utils"

interface StepsProps {
  currentStep: number
  className?: string
  children: React.ReactNode
}

interface StepProps {
  title: string
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const steps = React.Children.toArray(children) as React.ReactElement<StepProps>[]

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep > index
          const isCurrentStep = currentStep === index + 1

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCurrentStep
                        ? "border-primary text-primary"
                        : "border-muted-foreground text-muted-foreground",
                  )}
                >
                  {isActive ? index + 1 : index + 1}
                </div>
                <div className="mt-2 text-xs font-medium">{step.props.title}</div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-[2px] w-full max-w-[100px] flex-1",
                    index < currentStep - 1 ? "bg-primary" : "bg-muted-foreground/30",
                  )}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export function Step({ title }: StepProps) {
  return null
}

