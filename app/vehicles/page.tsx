"use client"

import { useState } from "react"
import Link from "next/link"
import { Bike, Filter, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import VehicleCard from "@/components/vehicle-card"

export default function VehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 20])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("price-low")

  const vehicles = [
    {
      id: "1",
      name: "City Cruiser Bike",
      type: "Bike",
      hourlyRate: 5.99,
      rating: 4.8,
      location: "Downtown",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      name: "Electric Scooter Pro",
      type: "Scooter",
      hourlyRate: 7.99,
      rating: 4.6,
      location: "Riverside",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      name: "Mountain Explorer",
      type: "Bike",
      hourlyRate: 8.99,
      rating: 4.9,
      location: "Uptown",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      name: "Urban Commuter",
      type: "Scooter",
      hourlyRate: 6.99,
      rating: 4.7,
      location: "Central Park",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "5",
      name: "Foldable City Bike",
      type: "Bike",
      hourlyRate: 4.99,
      rating: 4.5,
      location: "Business District",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "6",
      name: "Performance Scooter",
      type: "Scooter",
      hourlyRate: 9.99,
      rating: 4.9,
      location: "Tech Hub",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "7",
      name: "Vintage Cruiser",
      type: "Bike",
      hourlyRate: 6.49,
      rating: 4.7,
      location: "Downtown",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "8",
      name: "Off-Road Scooter",
      type: "Scooter",
      hourlyRate: 11.99,
      rating: 4.8,
      location: "Riverside",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "9",
      name: "Hybrid City Bike",
      type: "Bike",
      hourlyRate: 7.49,
      rating: 4.6,
      location: "Central Park",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "10",
      name: "Compact Folding Bike",
      type: "Bike",
      hourlyRate: 5.49,
      rating: 4.4,
      location: "Business District",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "11",
      name: "Premium Road Bike",
      type: "Bike",
      hourlyRate: 12.99,
      rating: 4.9,
      location: "Uptown",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "12",
      name: "Commuter Scooter",
      type: "Scooter",
      hourlyRate: 8.49,
      rating: 4.7,
      location: "Tech Hub",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Filter vehicles based on search, price range, and selected types
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = vehicle.hourlyRate >= priceRange[0] && vehicle.hourlyRate <= priceRange[1]
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(vehicle.type)
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(vehicle.location)

    return matchesSearch && matchesPrice && matchesType && matchesLocation
  })

  // Sort vehicles
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.hourlyRate - b.hourlyRate
      case "price-high":
        return b.hourlyRate - a.hourlyRate
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const locations = Array.from(new Set(vehicles.map((v) => v.location)))
  const types = Array.from(new Set(vehicles.map((v) => v.type)))

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) => (prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#vehicles" className="text-sm font-medium hover:underline underline-offset-4">
              Vehicles
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/#locations" className="text-sm font-medium hover:underline underline-offset-4">
              Locations
            </Link>
          </nav>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Available Vehicles</h1>
              <p className="text-muted-foreground mt-1">{filteredVehicles.length} vehicles available for rent</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search vehicles or locations..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <Filter className="h-4 w-4" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filter Vehicles</SheetTitle>
                    <SheetDescription>Adjust filters to find the perfect ride</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Price Range (per hour)</h3>
                      <div className="px-2">
                        <Slider
                          defaultValue={[0, 20]}
                          max={20}
                          step={0.5}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between mt-2 text-sm">
                          <span>${priceRange[0].toFixed(2)}</span>
                          <span>${priceRange[1].toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Vehicle Type</h3>
                      <div className="space-y-2">
                        {types.map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={`type-${type}`}
                              checked={selectedTypes.includes(type)}
                              onCheckedChange={() => handleTypeChange(type)}
                            />
                            <Label htmlFor={`type-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Pickup Location</h3>
                      <div className="space-y-2">
                        {locations.map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox
                              id={`location-${location}`}
                              checked={selectedLocations.includes(location)}
                              onCheckedChange={() => handleLocationChange(location)}
                            />
                            <Label htmlFor={`location-${location}`}>{location}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedTypes([])
                          setSelectedLocations([])
                          setPriceRange([0, 20])
                        }}
                      >
                        Reset Filters
                      </Button>
                      <Button>Apply Filters</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                id={vehicle.id}
                name={vehicle.name}
                type={vehicle.type as "Bike" | "Scooter"}
                hourlyRate={vehicle.hourlyRate}
                rating={vehicle.rating}
                location={vehicle.location}
                image={vehicle.image}
              />
            ))}
            {sortedVehicles.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">No vehicles found</h2>
                <p className="text-muted-foreground max-w-md mb-6">
                  We couldn't find any vehicles matching your search criteria. Try adjusting your filters or search
                  query.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedTypes([])
                    setSelectedLocations([])
                    setPriceRange([0, 20])
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We're constantly adding new vehicles to our platform. Check back soon or contact us for specific requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Contact Support</Button>
              <Link href="/register?type=renter" passHref>
                <Button>Become a Renter</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t">
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

