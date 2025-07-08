
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Save, Eye, Edit, Trash2, CheckSquare, Square, Circle } from "lucide-react"

const assessmentTemplates = [
  {
    id: "ASSESS-001",
    name: "Mental Health Screening",
    category: "Psychiatric",
    questions: 15,
    lastModified: "2024-01-15",
    status: "Active"
  },
  {
    id: "ASSESS-002", 
    name: "Pain Assessment Scale",
    category: "Pain Management",
    questions: 8,
    lastModified: "2024-01-12",
    status: "Active"
  },
  {
    id: "ASSESS-003",
    name: "Cardiovascular Risk Assessment",
    category: "Cardiology",
    questions: 12,
    lastModified: "2024-01-10",
    status: "Draft"
  }
]

const questionTypes = [
  { type: "multiple-choice", label: "Multiple Choice", icon: Circle },
  { type: "checkbox", label: "Checkbox", icon: CheckSquare },
  { type: "text", label: "Text Input", icon: Square },
  { type: "scale", label: "Rating Scale", icon: Square }
]

export default function AssessmentBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [isBuilding, setIsBuilding] = useState(false)
  const [currentAssessment, setCurrentAssessment] = useState({
    name: "",
    category: "",
    description: "",
    questions: []
  })

  const startNewAssessment = () => {
    setIsBuilding(true)
    setCurrentAssessment({
      name: "",
      category: "",
      description: "",
      questions: []
    })
  }

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: Date.now(),
      type,
      question: "",
      options: type === "multiple-choice" || type === "checkbox" ? [""] : [],
      required: false
    }
    setCurrentAssessment(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Assessment Builder</h1>
          <p className="text-sm text-gray-600">Create and manage patient assessment forms</p>
        </div>
        <Button onClick={startNewAssessment} className="gap-2 h-8">
          <Plus className="w-4 h-4" />
          New Assessment
        </Button>
      </div>

      {!isBuilding ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Assessment Templates */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Assessment Templates</CardTitle>
              <CardDescription>Manage existing assessment forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assessmentTemplates.map((template) => (
                  <div key={template.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="font-medium text-sm">{template.name}</h3>
                        <p className="text-xs text-gray-500">{template.category} • {template.questions} questions</p>
                        <p className="text-xs text-gray-400">Modified: {template.lastModified}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={template.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                          {template.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Assessment Statistics</CardTitle>
              <CardDescription>Overview of assessment usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Total Assessments</p>
                    <p className="text-xs text-gray-600">Active templates</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{assessmentTemplates.length}</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Completed This Month</p>
                    <p className="text-xs text-gray-600">Patient responses</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">247</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Pending Reviews</p>
                    <p className="text-xs text-gray-600">Awaiting provider review</p>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-base">Assessment Builder</CardTitle>
                <CardDescription>Create a new patient assessment form</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsBuilding(false)} className="h-8">
                  Cancel
                </Button>
                <Button className="gap-2 h-8">
                  <Save className="w-4 h-4" />
                  Save Assessment
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Assessment Details</TabsTrigger>
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm">Assessment Name</Label>
                    <Input 
                      value={currentAssessment.name}
                      onChange={(e) => setCurrentAssessment(prev => ({...prev, name: e.target.value}))}
                      placeholder="Enter assessment name"
                      className="h-8"
                    />
                  </div>
                  <div>
                    <Label className="text-sm">Category</Label>
                    <Input 
                      value={currentAssessment.category}
                      onChange={(e) => setCurrentAssessment(prev => ({...prev, category: e.target.value}))}
                      placeholder="e.g., Mental Health, Pain Management"
                      className="h-8"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Description</Label>
                  <Textarea 
                    value={currentAssessment.description}
                    onChange={(e) => setCurrentAssessment(prev => ({...prev, description: e.target.value}))}
                    placeholder="Describe the purpose and scope of this assessment"
                    className="min-h-[80px]"
                  />
                </div>
              </TabsContent>

              <TabsContent value="questions" className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Add Question Types</Label>
                  <div className="flex gap-2 mt-2">
                    {questionTypes.map((type) => (
                      <Button
                        key={type.type}
                        variant="outline"
                        size="sm"
                        onClick={() => addQuestion(type.type)}
                        className="gap-2 h-8"
                      >
                        <type.icon className="w-3 h-3" />
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {currentAssessment.questions.map((question, index) => (
                    <Card key={question.id}>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm font-medium">Question {index + 1}</Label>
                            <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                          <Input 
                            placeholder="Enter your question"
                            className="h-8"
                          />
                          {(question.type === "multiple-choice" || question.type === "checkbox") && (
                            <div>
                              <Label className="text-xs">Options</Label>
                              <div className="space-y-2 mt-1">
                                <Input placeholder="Option 1" className="h-7" />
                                <Button variant="outline" size="sm" className="h-6 text-xs">
                                  Add Option
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="preview" className="space-y-4">
                <div className="p-4 border rounded-lg bg-gray-50">
                  <h3 className="font-medium text-base mb-2">{currentAssessment.name || "Untitled Assessment"}</h3>
                  <p className="text-sm text-gray-600 mb-4">{currentAssessment.description || "No description provided"}</p>
                  
                  {currentAssessment.questions.length === 0 ? (
                    <p className="text-sm text-gray-500 italic">No questions added yet</p>
                  ) : (
                    <div className="space-y-3">
                      {currentAssessment.questions.map((question, index) => (
                        <div key={question.id} className="p-3 bg-white rounded border">
                          <p className="text-sm font-medium mb-2">
                            {index + 1}. Question placeholder
                          </p>
                          <p className="text-xs text-gray-500">Type: {question.type}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
