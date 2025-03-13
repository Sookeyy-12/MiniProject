import Link from "next/link"
import { ArrowRight, Bike, Clock, Filter, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import VehicleCard from "@/components/vehicle-card"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Bike className="h-6 w-6" />
            <span>RideRental</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#vehicles" className="text-sm font-medium hover:underline underline-offset-4">
              Vehicles
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#locations" className="text-sm font-medium hover:underline underline-offset-4">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Rent Bikes & Scooters On Demand
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore the city on your terms. Affordable hourly rentals with convenient pickup locations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/vehicles" passHref>
                    <Button size="lg" className="gap-1">
                      Browse Vehicles <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/register" passHref>
                    <Button size="lg" variant="outline">
                      Become a Renter
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </section>

        <section id="vehicles" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Featured Vehicles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our wide selection of bikes and scooters for your next adventure.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8 mb-6">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="outline" size="sm">
                  Bikes
                </Button>
                <Button variant="outline" size="sm">
                  Scooters
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded p-1">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <VehicleCard
                id="1"
                name="City Cruiser Bike"
                type="Bike"
                hourlyRate={5.99}
                rating={4.8}
                location="Downtown"
                image="/placeholder.svg?height=300&width=400"
              />
              <VehicleCard
                id="2"
                name="Electric Scooter Pro"
                type="Scooter"
                hourlyRate={7.99}
                rating={4.6}
                location="Riverside"
                image="/placeholder.svg?height=300&width=400"
              />
              <VehicleCard
                id="3"
                name="Mountain Explorer"
                type="Bike"
                hourlyRate={8.99}
                rating={4.9}
                location="Uptown"
                image="/placeholder.svg?height=300&width=400"
              />
              <VehicleCard
                id="4"
                name="Urban Commuter"
                type="Scooter"
                hourlyRate={6.99}
                rating={4.7}
                location="Central Park"
                image="/placeholder.svg?height=300&width=400"
              />
              <VehicleCard
                id="5"
                name="Foldable City Bike"
                type="Bike"
                hourlyRate={4.99}
                rating={4.5}
                location="Business District"
                image="/placeholder.svg?height=300&width=400"
              />
              <VehicleCard
                id="6"
                name="Performance Scooter"
                type="Scooter"
                hourlyRate={9.99}
                rating={4.9}
                location="Tech Hub"
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/vehicles" passHref>
                <Button variant="outline" size="lg">
                  View All Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Renting a bike or scooter has never been easier. Follow these simple steps.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Filter className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Choose Your Vehicle</h3>
                <p className="text-muted-foreground">
                  Browse our selection of bikes and scooters and find the perfect ride for your needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. Book Your Time</h3>
                <p className="text-muted-foreground">
                  Select your rental duration and pay securely online. Hourly, daily, and weekly options available.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Pick Up & Ride</h3>
                <p className="text-muted-foreground">
                  Head to the pickup location, show your booking confirmation, and enjoy your ride!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pay only for the time you need. No hidden fees or commitments.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg border">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Standard Bikes</h3>
                  <p className="text-muted-foreground">Perfect for casual rides and city exploration.</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">
                    $4-6<span className="text-xl font-normal">/hour</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Starting price for standard city bikes</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Comfortable seating</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Easy to ride</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Helmet included</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/vehicles?type=bike" passHref>
                    <Button className="w-full">Browse Bikes</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-primary text-primary-foreground shadow-lg rounded-lg border border-primary">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Electric Scooters</h3>
                  <p className="text-primary-foreground/90">Fast and fun way to get around the city.</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">
                    $6-10<span className="text-xl font-normal">/hour</span>
                  </div>
                  <p className="text-sm text-primary-foreground/90 mt-2">Starting price for electric scooters</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    <span>Battery powered</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    <span>Up to 25km/h</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    <span>Helmet included</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    <span>Phone holder</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/vehicles?type=scooter" passHref>
                    <Button variant="secondary" className="w-full">
                      Browse Scooters
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg border">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Premium Bikes</h3>
                  <p className="text-muted-foreground">High-performance bikes for enthusiasts.</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">
                    $8-12<span className="text-xl font-normal">/hour</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Starting price for premium bikes</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Lightweight frame</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Multiple gears</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Premium helmet</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    <span>Water bottle holder</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/vehicles?type=premium" passHref>
                    <Button className="w-full">Browse Premium</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pickup Locations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We have convenient pickup locations throughout the city.
                </p>
              </div>
            </div>
            <div className="mt-12 rounded-lg overflow-hidden border h-[400px] bg-background">
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive map showing all pickup locations</p>
                  <Button>View All Locations</Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-bold">Downtown Hub</h3>
                <p className="text-sm text-muted-foreground">123 Main Street</p>
                <p className="text-sm text-muted-foreground">Open 8AM - 8PM</p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-bold">Riverside Station</h3>
                <p className="text-sm text-muted-foreground">456 River Road</p>
                <p className="text-sm text-muted-foreground">Open 9AM - 7PM</p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-bold">Central Park</h3>
                <p className="text-sm text-muted-foreground">789 Park Avenue</p>
                <p className="text-sm text-muted-foreground">Open 7AM - 9PM</p>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <h3 className="font-bold">Tech District</h3>
                <p className="text-sm text-muted-foreground">101 Innovation Way</p>
                <p className="text-sm text-muted-foreground">Open 8AM - 8PM</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Become a Renter</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Have a bike or scooter you're not using all the time? List it on our platform and earn money when
                    others rent it.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Set your own hourly rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Choose your availability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>We handle payments and insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Earn passive income from your vehicles</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register?type=renter" passHref>
                    <Button size="lg">Register as a Renter</Button>
                  </Link>
                  <Link href="/renter-info" passHref>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Person with bike"
                    className="aspect-[4/3] object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Ride?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of happy riders exploring the city on their terms.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register" passHref>
                  <Button size="lg">Sign Up Now</Button>
                </Link>
                <Link href="/vehicles" passHref>
                  <Button size="lg" variant="outline">
                    Browse Vehicles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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

