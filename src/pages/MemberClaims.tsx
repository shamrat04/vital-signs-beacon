
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

export function MemberClaims() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Claims</h1>
        <p className="text-gray-600">Insurance claims and billing information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Claims History
          </CardTitle>
          <CardDescription>Submitted and processed claims</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Claims management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
