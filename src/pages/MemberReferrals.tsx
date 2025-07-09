
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck } from "lucide-react"

export function MemberReferrals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Referrals</h1>
        <p className="text-gray-600">Specialist referrals and care coordination</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="w-5 h-5" />
            Referral Management
          </CardTitle>
          <CardDescription>Active and completed referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Referral management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
