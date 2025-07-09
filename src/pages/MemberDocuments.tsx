
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderOpen } from "lucide-react"

export function MemberDocuments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
        <p className="text-gray-600">Medical records and document management</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            Document Library
          </CardTitle>
          <CardDescription>Uploaded files and medical records</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Document management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
