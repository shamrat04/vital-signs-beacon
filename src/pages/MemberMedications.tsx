
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pill } from "lucide-react"

export function MemberMedications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Medications</h1>
        <p className="text-gray-600">Current and historical medication management</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="w-5 h-5" />
            Medication List
          </CardTitle>
          <CardDescription>Active prescriptions and medication history</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Medication management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
