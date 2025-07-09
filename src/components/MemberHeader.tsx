
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Phone, AlertTriangle, Heart, User } from "lucide-react"

interface MemberHeaderProps {
  member: any
}

export function MemberHeader({ member }: MemberHeaderProps) {
  return (
    <Card className="mx-6 mt-4 border-l-4 border-l-primary">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-gray-900">
                  {member.firstName} {member.lastName}
                </h1>
                <Badge variant="default">Active Member</Badge>
                <Badge variant="outline" className="text-red-600 border-red-200">
                  <Heart className="w-3 h-3 mr-1" />
                  Palliative Care
                </Badge>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="font-medium">MRN:</span> {member.mrn}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  DOB: {member.dob} (Age 89)
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">PCP:</span> {member.pcp}
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">Last Visit:</span> {member.lastVisit}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
              2 Alerts
            </Button>
            <Button size="sm">
              Quick Actions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
