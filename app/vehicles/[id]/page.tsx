"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bike, ChevronLeft, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [startDate, setStartDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [hours, setHours] = useState(1)
  const [loading, setLoading] = useState(false)

  // Mock vehicle data - in a real app, this would be fetched from an API
  const vehicle = {
    id: params.id,
    name: "City Cruiser Bike",
    type: "Bike",
    hourlyRate: 5.99,
    rating: 4.8,
    location: "Downtown Hub",
    address: "123 Main Street, Downtown",
    description:
      "A comfortable city bike perfect for exploring the downtown area. Features a basket, bell, and lights for safe riding at any time of day.",
    features: ["Comfortable seat", "Front basket", "Bell", "Front and rear lights", "Adjustable height", "3 gears"],
    owner: {
      name: "John Doe",
      rating: 4.9,
      rentals: 124,
      joined: "2022-03-15",
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    reviews: [
      {
        id: "r1",
        user: "Sarah M.",
        rating: 5,
        date: "2023-05-20",
        comment: "Great bike! Very comfortable and easy to ride. The basket was perfect for my bag.",
      },
      {
        id: "r2",
        user: "Michael T.",
        rating: 4,
        date: "2023-05-15",
        comment: "Good bike for city exploration. The gears worked well on small hills.",
      },
      {
        id: "r3",
        user: "Emma L.",
        rating: 5,
        date: "2023-05-10",
        comment: "Excellent condition and very smooth ride. Would rent again!",
      },
    ],
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate booking process
    setTimeout(() => {
      setLoading(false)
      router.push(`/book/confirmation?id=${params.id}`)
    }, 1500)
  }

  const totalPrice = hours * vehicle.hourlyRate
  const serviceFee = totalPrice * 0.1
  const totalWithFees = totalPrice + serviceFee

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Link href="/register" passHref>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <Link href="/vehicles" className="inline-flex items-center gap-1 text-sm font-medium hover:underline mb-6">
            <ChevronLeft className="h-4 w-4" />
            Back to all vehicles
          </Link>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{vehicle.type}</Badge>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span>
                        {vehicle.rating} ({vehicle.reviews.length} reviews)
                      </span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold">{vehicle.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{vehicle.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={vehicle.images[0] || "/placeholder.svg"}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {vehicle.images.slice(1, 3).map((image, index) => (
                      <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${vehicle.name} ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-4 pt-4">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">About this {vehicle.type.toLowerCase()}</h2>
                      <p className="text-muted-foreground">{vehicle.description}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Location</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.address}</p>
                      <div className="mt-4 rounded-lg overflow-hidden border h-[200px] bg-muted">
                        <div className="w-full h-full flex items-center justify-center">
                          <MapPin className="h-8 w-8 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">About the owner</h3>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="" alt={vehicle.owner.name} />
                          <AvatarFallback>
                            {vehicle.owner.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{vehicle.owner.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            {vehicle.owner.rating} · {vehicle.owner.rentals} rentals
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Joined{" "}
                            {new Date(vehicle.owner.joined).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="space-y-4 pt-4">
                    <h2 className="text-xl font-semibold mb-2">Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="reviews" className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Reviews</h2>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <span className="font-medium">{vehicle.rating}</span>
                        <span className="text-muted-foreground">({vehicle.reviews.length} reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {vehicle.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>{review.user[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{review.user}</div>
                                <div className="text-xs text-muted-foreground">
                                  {new Date(review.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                              <span>{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>${vehicle.hourlyRate.toFixed(2)}</span>
                    <span className="text-sm font-normal text-muted-foreground">per hour</span>
                  </CardTitle>
                  <CardDescription>Book this {vehicle.type.toLowerCase()} now</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Start Time</Label>
                      <Input
                        id="time"
                        type="time"
                        required
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hours">Rental Duration (hours)</Label>
                      <div className="flex items-center">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => setHours(Math.max(1, hours - 1))}
                        >
                          -
                        </Button>
                        <Input
                          id="hours"
                          type="number"
                          min="1"
                          max="24"
                          className="text-center mx-2"
                          value={hours}
                          onChange={(e) => setHours(Number.parseInt(e.target.value) || 1)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => setHours(Math.min(24, hours + 1))}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between">
                        <span>
                          ${vehicle.hourlyRate.toFixed(2)} × {hours} hours
                        </span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>${serviceFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Total</span>
                        <span>${totalWithFees.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Processing..." : "Book Now"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
                  <p>You won't be charged yet</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t mt-12">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Bike className="h-6 w-6" />
              <span>RideRental</span>
            </Link>
            <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 md:ml-auto">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Help</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:underline">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:underline">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:underline">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RideRental. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

