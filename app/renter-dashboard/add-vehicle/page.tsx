"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Bike, ChevronLeft, Clock, CreditCard, MapPin, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddVehiclePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [vehicleType, setVehicleType] = useState("Bike")
  const [images, setImages] = useState<string[]>([])
  const [hourlyRate, setHourlyRate] = useState("5.99")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      router.push("/renter-dashboard?success=true")
    }, 1500)
  }

  const handleImageUpload = () => {
    // Simulate image upload with placeholder
    setImages([...images, "/placeholder.svg?height=200&width=300"])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/renter-dashboard" className="text-sm font-medium hover:underline underline-offset-4">
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
          <Link
            href="/renter-dashboard"
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to dashboard
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Add a New Vehicle</h1>
            <p className="text-muted-foreground">List your bike or scooter for rent and start earning</p>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>Provide details about your vehicle to help renters find it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="vehicle-type">Vehicle Type</Label>
                  <RadioGroup
                    defaultValue="Bike"
                    className="flex gap-4"
                    value={vehicleType}
                    onValueChange={setVehicleType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Bike" id="bike" />
                      <Label htmlFor="bike">Bike</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Scooter" id="scooter" />
                      <Label htmlFor="scooter">Scooter</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Vehicle Name</Label>
                  <Input id="name" placeholder={`e.g. City Cruiser ${vehicleType}`} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your vehicle, including its features, condition, and any special notes"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hourly-rate">Hourly Rate ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input
                        id="hourly-rate"
                        type="number"
                        step="0.01"
                        min="1"
                        className="pl-7"
                        placeholder="5.99"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Pickup Location</Label>
                    <Select required defaultValue="downtown">
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="downtown">Downtown Hub</SelectItem>
                        <SelectItem value="riverside">Riverside Station</SelectItem>
                        <SelectItem value="central">Central Park</SelectItem>
                        <SelectItem value="business">Business District</SelectItem>
                        <SelectItem value="tech">Tech Hub</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Vehicle Images</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-[4/3] rounded-md overflow-hidden border">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Vehicle ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      className="aspect-[4/3] flex flex-col items-center justify-center border-dashed"
                      onClick={handleImageUpload}
                    >
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <span className="text-sm">Upload Image</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Upload at least one image of your vehicle. Clear, well-lit photos from multiple angles help renters
                    make decisions.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Features</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vehicleType === "Bike" ? (
                      <>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-1" className="rounded border-gray-300" />
                          <Label htmlFor="feature-1">Basket</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-2" className="rounded border-gray-300" />
                          <Label htmlFor="feature-2">Lights</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-3" className="rounded border-gray-300" />
                          <Label htmlFor="feature-3">Bell</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-4" className="rounded border-gray-300" />
                          <Label htmlFor="feature-4">Multiple Gears</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-5" className="rounded border-gray-300" />
                          <Label htmlFor="feature-5">Water Bottle Holder</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-6" className="rounded border-gray-300" />
                          <Label htmlFor="feature-6">Adjustable Seat</Label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-1" className="rounded border-gray-300" />
                          <Label htmlFor="feature-1">Electric</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-2" className="rounded border-gray-300" />
                          <Label htmlFor="feature-2">Lights</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-3" className="rounded border-gray-300" />
                          <Label htmlFor="feature-3">Bell/Horn</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-4" className="rounded border-gray-300" />
                          <Label htmlFor="feature-4">Phone Holder</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-5" className="rounded border-gray-300" />
                          <Label htmlFor="feature-5">Suspension</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="feature-6" className="rounded border-gray-300" />
                          <Label htmlFor="feature-6">Foldable</Label>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Availability</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Available From</Label>
                      <Input id="start-time" type="time" defaultValue="08:00" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-time">Available Until</Label>
                      <Input id="end-time" type="time" defaultValue="20:00" required />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Set the hours when your vehicle is available for pickup and return.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="bg-muted p-4 rounded-lg w-full">
                  <h3 className="font-medium mb-2">Listing Preview</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-16 bg-muted-foreground/10 rounded-md flex items-center justify-center">
                      {images.length > 0 ? (
                        <img
                          src={images[0] || "/placeholder.svg"}
                          alt="Vehicle preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <Bike className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">
                        {vehicleType === "Bike" ? "City Cruiser Bike" : "Electric Scooter Pro"}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CreditCard className="h-3 w-3" />
                          <span>${hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>Downtown Hub</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>8AM-8PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Estimated earnings: ${(Number.parseFloat(hourlyRate) * 5 * 4).toFixed(2)}/month (based on average
                    rentals)
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button
                    variant="outline"
                    type="button"
                    className="flex-1"
                    onClick={() => router.push("/renter-dashboard")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1" disabled={loading}>
                    {loading ? "Adding Vehicle..." : "Add Vehicle"}
                  </Button>
                </div>
              </CardFooter>
            </form>
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

