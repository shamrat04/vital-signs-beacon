
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bell, Search, User, Plus } from "lucide-react"

export function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-gray-600" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search patients, records..." 
            className="pl-10 w-80 bg-gray-50 border-gray-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          New Patient
        </Button>
        
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-xs">
            3
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-900">Dr. Sarah Johnson</p>
            <p className="text-gray-500">Physician</p>
          </div>
        </div>
      </div>
    </header>
  )
}
