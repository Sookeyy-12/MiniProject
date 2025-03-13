import Link from "next/link"
import Image from "next/image"
import { MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VehicleCardProps {
  id: string
  name: string
  type: "Bike" | "Scooter"
  hourlyRate: number
  rating: number
  location: string
  image: string
}

export default function VehicleCard({ id, name, type, hourlyRate, rating, location, image }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <Badge className="absolute top-2 right-2">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <div className="mt-4">
          <span className="text-xl font-bold">${hourlyRate.toFixed(2)}</span>
          <span className="text-muted-foreground"> / hour</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/vehicles/${id}`} passHref className="flex-1">
          <Button variant="outline" className="w-full">
            Details
          </Button>
        </Link>
        <Link href={`/book/${id}`} passHref className="flex-1">
          <Button className="w-full">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

