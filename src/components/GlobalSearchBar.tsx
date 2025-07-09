
import { useState, useRef, useEffect } from "react"
import { Search, Calendar, Hash, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Member {
  id: string
  firstName: string
  lastName: string
  mrn: string
  dob: string
  status: string
  pcp: string
  lastVisit: string
}

interface GlobalSearchBarProps {
  onMemberSelect: (member: Member) => void
}

const mockMembers: Member[] = [
  {
    id: "1",
    firstName: "Margaret",
    lastName: "Chen",
    mrn: "MRN001234",
    dob: "1935-03-15",
    status: "Active",
    pcp: "Dr. Johnson",
    lastVisit: "2024-01-10"
  },
  {
    id: "2", 
    firstName: "Robert",
    lastName: "Williams",
    mrn: "MRN005678",
    dob: "1942-07-22",
    status: "Active",
    pcp: "Dr. Smith",
    lastVisit: "2024-01-08"
  },
  {
    id: "3",
    firstName: "Dorothy",
    lastName: "Martinez",
    mrn: "MRN009876", 
    dob: "1938-11-03",
    status: "Inactive",
    pcp: "Dr. Johnson",
    lastVisit: "2023-12-15"
  }
]

export function GlobalSearchBar({ onMemberSelect }: GlobalSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filtered = mockMembers.filter(member => 
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.dob.includes(searchTerm)
      )
      setFilteredMembers(filtered)
      setIsOpen(true)
    } else {
      setIsOpen(false)
      setFilteredMembers([])
    }
  }, [searchTerm])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMemberSelect = (member: Member) => {
    setSearchTerm(`${member.firstName} ${member.lastName}`)
    setIsOpen(false)
    onMemberSelect(member)
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search by name, MRN, or DOB..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-10 bg-gray-50 border-gray-200"
        />
      </div>

      {isOpen && filteredMembers.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {filteredMembers.map((member) => (
              <Button
                key={member.id}
                variant="ghost"
                className="w-full justify-start p-4 h-auto hover:bg-gray-50"
                onClick={() => handleMemberSelect(member)}
              >
                <div className="flex items-start gap-3 w-full text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">
                        {member.firstName} {member.lastName}
                      </h4>
                      <Badge 
                        variant={member.status === "Active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {member.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Hash className="w-3 h-3" />
                        {member.mrn}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {member.dob}
                      </div>
                      <div>
                        PCP: {member.pcp}
                      </div>
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      )}

      {isOpen && searchTerm.length >= 2 && filteredMembers.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50">
          <CardContent className="p-4 text-center text-gray-500">
            No members found matching "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  )
}
