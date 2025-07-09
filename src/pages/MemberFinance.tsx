
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export function MemberFinance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Financial Information</h1>
        <p className="text-gray-600">Billing, payments, and financial data</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Financial Overview
          </CardTitle>
          <CardDescription>Billing and payment information</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Financial management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
