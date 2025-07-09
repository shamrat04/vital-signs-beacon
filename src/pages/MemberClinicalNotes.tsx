
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function MemberClinicalNotes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Clinical Notes</h1>
        <p className="text-gray-600">Documentation and clinical observations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Clinical Documentation
          </CardTitle>
          <CardDescription>Recent notes and observations</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Clinical notes interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
