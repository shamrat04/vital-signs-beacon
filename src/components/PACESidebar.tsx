
import { NavLink, useLocation, useParams } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  User,
  FileText,
  ClipboardList,
  Pill,
  Calendar,
  Stethoscope,
  ShieldCheck,
  UserCheck,
  TestTube,
  CreditCard,
  FolderOpen,
  BarChart3,
  DollarSign,
  Search,
  AlertTriangle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PACESidebarProps {
  selectedMember?: any
}

export function PACESidebar({ selectedMember }: PACESidebarProps) {
  const { state } = useSidebar()
  const location = useLocation()
  const { memberId } = useParams()
  const isCollapsed = state === "collapsed"
  
  const getNavClass = (path: string) => {
    const isActive = location.pathname === path
    return isActive 
      ? "bg-primary text-primary-foreground font-medium" 
      : "hover:bg-accent hover:text-accent-foreground"
  }

  const memberMenuItems = [
    { title: "Member Summary", url: `/member/${memberId}`, icon: User },
    { title: "Clinical Notes", url: `/member/${memberId}/clinical-notes`, icon: FileText, badge: "3" },
    { title: "Assessments", url: `/member/${memberId}/assessments`, icon: ClipboardList, badge: "Due" },
    { title: "Medications", url: `/member/${memberId}/medications`, icon: Pill },
    { title: "Appointments", url: `/member/${memberId}/appointments`, icon: Calendar, badge: "2" },
    { title: "Encounters", url: `/member/${memberId}/encounters`, icon: Stethoscope },
    { title: "Authorizations", url: `/member/${memberId}/authorizations`, icon: ShieldCheck, alert: true },
    { title: "Referrals", url: `/member/${memberId}/referrals`, icon: UserCheck },
    { title: "Labs", url: `/member/${memberId}/labs`, icon: TestTube, badge: "New" },
    { title: "Claims", url: `/member/${memberId}/claims`, icon: CreditCard },
    { title: "Documents", url: `/member/${memberId}/documents`, icon: FolderOpen },
    { title: "Reports", url: `/member/${memberId}/reports`, icon: BarChart3 },
    { title: "Finance", url: `/member/${memberId}/finance`, icon: DollarSign },
  ]

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-72"} collapsible="icon">
      <SidebarContent className="bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="text-gray-600" />
            {!isCollapsed && (
              <div className="text-sm font-medium text-gray-900">
                Navigation
              </div>
            )}
          </div>
        </div>

        {/* Global Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" className={getNavClass("/")}>
                    <Search className="w-4 h-4" />
                    {!isCollapsed && <span>Find Member</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Member-Specific Navigation */}
        {memberId && selectedMember && (
          <SidebarGroup>
            <SidebarGroupLabel>
              {!isCollapsed ? `${selectedMember.firstName} ${selectedMember.lastName}` : "Member"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {memberMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavClass(item.url)}>
                        <div className="flex items-center gap-2 w-full">
                          <item.icon className="w-4 h-4" />
                          {!isCollapsed && (
                            <>
                              <span className="flex-1">{item.title}</span>
                              {item.badge && (
                                <Badge 
                                  variant={item.badge === "Due" ? "destructive" : "secondary"}
                                  className="text-xs px-1.5 py-0.5"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                              {item.alert && (
                                <AlertTriangle className="w-3 h-3 text-amber-500" />
                              )}
                            </>
                          )}
                        </div>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Empty State */}
        {!memberId && !isCollapsed && (
          <div className="p-4 text-center text-gray-500 text-sm">
            <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <p>Search for a member to view their information</p>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
