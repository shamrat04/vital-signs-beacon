
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope } from "lucide-react"

export function MemberEncounters() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Encounters</h1>
        <p className="text-gray-600">Clinical encounters and visits</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5" />
            Encounter History
          </CardTitle>
          <CardDescription>Clinical visits and interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Encounter management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
