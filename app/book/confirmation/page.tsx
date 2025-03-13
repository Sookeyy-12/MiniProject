"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Bike, Calendar, Check, ChevronRight, Clock, CreditCard, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps, Step } from "@/components/steps"

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams()
  const vehicleId = searchParams.get("id") || "1"
  const [currentStep, setCurrentStep] = useState(1)

  // Mock booking data - in a real app, this would be fetched from an API
  const booking = {
    id: "b" + Math.floor(Math.random() * 10000),
    vehicleName: "City Cruiser Bike",
    vehicleType: "Bike",
    hourlyRate: 5.99,
    hours: 2,
    startDate: new Date().toISOString().split("T")[0],
    startTime: "14:00",
    endTime: "16:00",
    location: "Downtown Hub",
    address: "123 Main Street, Downtown",
    totalPrice: 11.98,
    serviceFee: 1.2,
    totalWithFees: 13.18,
  }

  useEffect(() => {
    // Simulate booking confirmation process
    const timer1 = setTimeout(() => setCurrentStep(2), 1500)
    const timer2 = setTimeout(() => setCurrentStep(3), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link href="/logout" className="text-sm font-medium hover:underline underline-offset-4">
              Logout
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Booking Confirmation</h1>
            <p className="text-muted-foreground">Your booking is being processed</p>
          </div>

          <Steps currentStep={currentStep} className="mb-10">
            <Step title="Processing Payment" />
            <Step title="Confirming Booking" />
            <Step title="Booking Confirmed" />
          </Steps>

          {currentStep === 3 ? (
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-6 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Your booking has been confirmed. You can view the details below.
              </p>
            </div>
          ) : (
            <div className="flex justify-center mb-8">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-muted rounded-full mb-4"></div>
                <div className="h-6 w-48 bg-muted rounded mb-2"></div>
                <div className="h-4 w-64 bg-muted rounded"></div>
              </div>
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <CardDescription>Booking ID: {booking.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 pb-6 border-b">
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-2">Vehicle Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Bike className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {booking.vehicleName} ({booking.vehicleType})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span>${booking.hourlyRate.toFixed(2)} per hour</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-2">Pickup Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{booking.address}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 pb-6 border-b">
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-2">Rental Date</h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(booking.startDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-2">Rental Time</h3>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {booking.startTime} - {booking.endTime} ({booking.hours} hours)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Payment Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>
                      ${booking.hourlyRate.toFixed(2)} × {booking.hours} hours
                    </span>
                    <span>${booking.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>${booking.serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>${booking.totalWithFees.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="bg-muted p-4 rounded-lg w-full">
                <h3 className="font-medium mb-2">Important Information</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Please arrive 10 minutes before your booking time to complete the pickup process.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Bring a valid ID and the credit card used for booking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Helmets are provided free of charge with all rentals.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link href="/dashboard" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href={`/vehicles/${vehicleId}`} className="flex-1">
                  <Button className="w-full">View Vehicle Details</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="border-t mt-12">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Bike className="h-6 w-6" />
              <span>RideRental</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-4 md:mt-0">
              © {new Date().getFullYear()} RideRental. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

