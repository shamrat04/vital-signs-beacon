
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import { PACESidebar } from "@/components/PACESidebar"
import { GlobalSearchBar } from "@/components/GlobalSearchBar"
import { MemberHeader } from "@/components/MemberHeader"

interface PACELayoutProps {
  children: React.ReactNode
}

export function PACELayout({ children }: PACELayoutProps) {
  const location = useLocation()
  const { memberId } = useParams()
  const [selectedMember, setSelectedMember] = useState<any>(null)
  
  const isMemberView = location.pathname.includes('/member/')

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <PACESidebar selectedMember={selectedMember} />
        
        <div className="flex-1 flex flex-col">
          {/* Global Search Header */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-50">
            <div className="flex items-center gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="text-xl font-bold text-primary">
                  PACE EMR
                </div>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <GlobalSearchBar 
                  onMemberSelect={(member) => {
                    setSelectedMember(member)
                    window.history.pushState(null, '', `/member/${member.id}`)
                  }}
                />
              </div>
              
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>Dr. Sarah Johnson</span>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">SJ</span>
                </div>
              </div>
            </div>
          </header>

          {/* Member Context Header */}
          {isMemberView && selectedMember && (
            <MemberHeader member={selectedMember} />
          )}

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
