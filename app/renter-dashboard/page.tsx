"use client"

import { useState } from "react"
import Link from "next/link"
import { Bike, Calendar, Clock, CreditCard, History, LogOut, MapPin, Plus, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function RenterDashboardPage() {
  const [myVehicles, setMyVehicles] = useState([
    {
      id: "v1",
      name: "City Cruiser Bike",
      type: "Bike",
      hourlyRate: 5.99,
      status: "available",
      location: "Downtown Hub",
      totalBookings: 12,
      totalEarnings: 215.64,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "v2",
      name: "Electric Scooter Pro",
      type: "Scooter",
      hourlyRate: 7.99,
      status: "rented",
      location: "Riverside Station",
      totalBookings: 8,
      totalEarnings: 191.76,
      image: "/placeholder.svg?height=100&width=150",
    },
  ])

  const [activeRentals, setActiveRentals] = useState([
    {
      id: "r1",
      vehicleId: "v2",
      vehicleName: "Electric Scooter Pro",
      renterName: "Jane Smith",
      startTime: "2023-06-15T10:00:00",
      endTime: "2023-06-15T14:00:00",
      totalAmount: 31.96,
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

  const totalEarnings = myVehicles.reduce((sum, vehicle) => sum + vehicle.totalEarnings, 0)
  const totalBookings = myVehicles.reduce((sum, vehicle) => sum + vehicle.totalBookings, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <Avatar>
              <AvatarImage src="" alt="Renter" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 py-8">
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex flex-col gap-2 p-2">
            <Link href="/renter-dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/renter-dashboard/vehicles">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Bike className="h-4 w-4" />
                My Vehicles
              </Button>
            </Link>
            <Link href="/renter-dashboard/rentals">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Active Rentals
              </Button>
            </Link>
            <Link href="/renter-dashboard/history">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <History className="h-4 w-4" />
                Rental History
              </Button>
            </Link>
            <Link href="/renter-dashboard/earnings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CreditCard className="h-4 w-4" />
                Earnings
              </Button>
            </Link>
            <Link href="/renter-dashboard/settings">
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
            <h1 className="text-3xl font-bold tracking-tight">Renter Dashboard</h1>
            <Link href="/renter-dashboard/add-vehicle">
              <Button className="gap-1">
                <Plus className="h-4 w-4" /> Add Vehicle
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
                <Bike className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{myVehicles.length}</div>
                <p className="text-xs text-muted-foreground">
                  {myVehicles.filter((v) => v.status === "available").length} available,{" "}
                  {myVehicles.filter((v) => v.status === "rented").length} rented
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalEarnings.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">From {totalBookings} total bookings</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Rentals</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeRentals.length}</div>
                <p className="text-xs text-muted-foreground">
                  {activeRentals.length > 0
                    ? `$${activeRentals.reduce((sum, rental) => sum + rental.totalAmount, 0).toFixed(2)} in progress`
                    : "No active rentals"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$120.50</div>
                <p className="text-xs text-muted-foreground">+22% from last month</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="vehicles" className="w-full">
            <TabsList>
              <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
              <TabsTrigger value="active">Active Rentals</TabsTrigger>
            </TabsList>
            <TabsContent value="vehicles" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {myVehicles.map((vehicle) => (
                  <Card key={vehicle.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{vehicle.name}</CardTitle>
                          <CardDescription>{vehicle.type}</CardDescription>
                        </div>
                        <Badge variant={vehicle.status === "available" ? "outline" : "secondary"}>
                          {vehicle.status === "available" ? "Available" : "Rented"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <div className="w-[100px] h-[75px] rounded-md overflow-hidden">
                          <img
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="grid gap-1">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <span>${vehicle.hourlyRate.toFixed(2)}/hour</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{vehicle.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{vehicle.totalBookings} bookings</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Edit</Button>
                      <Button variant={vehicle.status === "available" ? "destructive" : "secondary"}>
                        {vehicle.status === "available" ? "Remove" : "View Rental"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                <Card className="flex flex-col items-center justify-center p-6 h-full border-dashed">
                  <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                  <h3 className="font-medium mb-1">Add a New Vehicle</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    List your bike or scooter and start earning
                  </p>
                  <Link href="/renter-dashboard/add-vehicle">
                    <Button>Add Vehicle</Button>
                  </Link>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="active" className="space-y-4">
              {activeRentals.length > 0 ? (
                activeRentals.map((rental) => (
                  <Card key={rental.id}>
                    <CardHeader>
                      <CardTitle>{rental.vehicleName}</CardTitle>
                      <CardDescription>Rented by {rental.renterName}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(rental.startTime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {formatTime(rental.startTime)} - {formatTime(rental.endTime)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span>${rental.totalAmount.toFixed(2)}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Contact Renter</Button>
                      <Button>View Details</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Active Rentals</CardTitle>
                    <CardDescription>None of your vehicles are currently being rented.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>When someone rents one of your vehicles, the details will appear here.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

