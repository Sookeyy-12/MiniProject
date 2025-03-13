"use client"

import { useState } from "react"
import Link from "next/link"
import { Bike, Calendar, Clock, CreditCard, History, LogOut, MapPin, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const [activeBookings, setActiveBookings] = useState([
    {
      id: "b1",
      vehicleName: "City Cruiser Bike",
      vehicleType: "Bike",
      startTime: "2023-06-15T10:00:00",
      endTime: "2023-06-15T12:00:00",
      location: "Downtown Hub",
      price: 11.98,
      status: "active",
    },
  ])

  const [pastBookings, setPastBookings] = useState([
    {
      id: "b2",
      vehicleName: "Electric Scooter Pro",
      vehicleType: "Scooter",
      startTime: "2023-06-10T14:00:00",
      endTime: "2023-06-10T16:00:00",
      location: "Riverside Station",
      price: 15.98,
      status: "completed",
    },
    {
      id: "b3",
      vehicleName: "Mountain Explorer",
      vehicleType: "Bike",
      startTime: "2023-06-05T09:00:00",
      endTime: "2023-06-05T13:00:00",
      location: "Central Park",
      price: 35.96,
      status: "completed",
    },
  ])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/vehicles" className="text-sm font-medium hover:underline underline-offset-4">
              Rent a Vehicle
            </Link>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <Avatar>
              <AvatarImage src="" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 py-8">
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex flex-col gap-2 p-2">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/bookings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Bookings
              </Button>
            </Link>
            <Link href="/dashboard/history">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <History className="h-4 w-4" />
                History
              </Button>
            </Link>
            <Link href="/dashboard/payments">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CreditCard className="h-4 w-4" />
                Payments
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/logout">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-red-500 hover:text-red-500 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </Link>
          </nav>
        </aside>
        <main className="flex w-full flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <Link href="/vehicles">
              <Button>Rent a Vehicle</Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Rides</CardTitle>
                <Bike className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$63.92</div>
                <p className="text-xs text-muted-foreground">+$11.98 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">Ending today at 12:00 PM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Favorite Location</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Downtown</div>
                <p className="text-xs text-muted-foreground">2 rides from this location</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="active" className="w-full">
            <TabsList>
              <TabsTrigger value="active">Active Bookings</TabsTrigger>
              <TabsTrigger value="past">Past Bookings</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              {activeBookings.length > 0 ? (
                activeBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardHeader>
                      <CardTitle>{booking.vehicleName}</CardTitle>
                      <CardDescription>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(booking.startTime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span>${booking.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button variant="destructive">End Rental</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Active Bookings</CardTitle>
                    <CardDescription>You don't have any active bookings at the moment.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Ready to explore the city? Browse our selection of bikes and scooters.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/vehicles">
                      <Button>Rent a Vehicle</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="past" className="space-y-4">
              {pastBookings.length > 0 ? (
                pastBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardHeader>
                      <CardTitle>{booking.vehicleName}</CardTitle>
                      <CardDescription>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Completed
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(booking.startTime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span>${booking.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Receipt</Button>
                      <Button variant="secondary">Book Again</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Past Bookings</CardTitle>
                    <CardDescription>You haven't completed any bookings yet.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Once you complete a rental, your booking history will appear here.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/vehicles">
                      <Button>Rent a Vehicle</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

