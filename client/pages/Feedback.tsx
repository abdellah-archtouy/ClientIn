import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit3,
  Trash2,
  Reply,
  Star,
  Clock,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Users,
  Calendar,
  Eye,
  Flag,
  Download,
  ArrowUpDown,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import SearchField from "@/components/SearchField";

// Mock feedback data
const feedbackData = [
  {
    id: 1,
    customerName: "Abir Amam",
    customerEmail: "abir@example.com",
    employeeName: "Darine Ben Ali",
    employeeId: 1,
    department: "Front Office",
    rating: 5,
    message: "Excellent service! Darine was very professional and helpful. The check-in process was smooth and efficient.",
    timestamp: "2025-01-18T14:30:00Z",
    status: "reviewed",
    category: "service",
    nfcCardId: "NFC001",
    response: "Thank you for your wonderful feedback! We're thrilled to hear about your positive experience.",
    responseBy: "Manager",
    responseTimestamp: "2025-01-18T15:00:00Z",
    isPublic: true,
    sentiment: "positive",
    tags: ["professional", "efficient", "helpful"],
  },
  {
    id: 2,
    customerName: "Ahmed Hassan",
    customerEmail: "ahmed@example.com",
    employeeName: "Karim Jebali",
    employeeId: 4,
    department: "Bar",
    rating: 4,
    message: "Great cocktails and friendly service. Karim made excellent recommendations!",
    timestamp: "2025-01-18T13:45:00Z",
    status: "pending",
    category: "service",
    nfcCardId: "NFC004",
    response: null,
    responseBy: null,
    responseTimestamp: null,
    isPublic: true,
    sentiment: "positive",
    tags: ["cocktails", "recommendations", "friendly"],
  },
  {
    id: 3,
    customerName: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    employeeName: "Ahmed Khelifi",
    employeeId: 2,
    department: "Kitchen",
    rating: 3,
    message: "Food was okay but took a bit long to arrive. Ahmed was apologetic about the delay.",
    timestamp: "2025-01-18T12:20:00Z",
    status: "pending",
    category: "food",
    nfcCardId: "NFC002",
    response: null,
    responseBy: null,
    responseTimestamp: null,
    isPublic: false,
    sentiment: "neutral",
    tags: ["delay", "food", "apologetic"],
  },
  {
    id: 4,
    customerName: "David Miller",
    customerEmail: "david@example.com",
    employeeName: "Sarah Mansouri",
    employeeId: 3,
    department: "Service",
    rating: 2,
    message: "Service was slow and Sarah seemed overwhelmed. Food quality was below expectations.",
    timestamp: "2025-01-18T11:15:00Z",
    status: "escalated",
    category: "service",
    nfcCardId: "NFC003",
    response: "We sincerely apologize for the poor experience. We're addressing the staffing issues immediately.",
    responseBy: "Manager",
    responseTimestamp: "2025-01-18T16:30:00Z",
    isPublic: false,
    sentiment: "negative",
    tags: ["slow", "overwhelmed", "quality"],
  },
  {
    id: 5,
    customerName: "Leila Ben Salah",
    customerEmail: "leila@example.com",
    employeeName: "Fatima Bouaziz",
    employeeId: 5,
    department: "Kitchen",
    rating: 5,
    message: "Amazing food! Fatima personally ensured our special dietary requirements were met. Outstanding!",
    timestamp: "2025-01-18T10:30:00Z",
    status: "reviewed",
    category: "food",
    nfcCardId: "NFC005",
    response: "Thank you so much! We're delighted that Fatima could accommodate your dietary needs.",
    responseBy: "Chef Manager",
    responseTimestamp: "2025-01-18T11:00:00Z",
    isPublic: true,
    sentiment: "positive",
    tags: ["amazing", "dietary", "outstanding"],
  },
];

const stats = [
  {
    title: "Total Feedback",
    value: feedbackData.length.toString(),
    change: "+12",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
  {
    title: "Average Rating",
    value: (feedbackData.reduce((acc, f) => acc + f.rating, 0) / feedbackData.length).toFixed(1),
    change: "+0.3",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    trend: "up",
  },
  {
    title: "Response Rate",
    value: Math.round((feedbackData.filter(f => f.response).length / feedbackData.length) * 100) + "%",
    change: "+15%",
    icon: Reply,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    trend: "up",
  },
  {
    title: "Pending Reviews",
    value: feedbackData.filter(f => f.status === "pending").length.toString(),
    change: "-2",
    icon: Clock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    trend: "down",
  },
];

export default function Feedback() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("timestamp");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedFeedback, setSelectedFeedback] = useState<typeof feedbackData[0] | null>(null);
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyBy, setReplyBy] = useState("");

  // Filter and sort feedback
  const filteredFeedback = feedbackData
    .filter(feedback => {
      const matchesSearch = 
        feedback.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.message.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || feedback.status === statusFilter;
      const matchesRating = ratingFilter === "all" || feedback.rating.toString() === ratingFilter;
      const matchesDepartment = departmentFilter === "all" || feedback.department === departmentFilter;
      const matchesCategory = categoryFilter === "all" || feedback.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesRating && matchesDepartment && matchesCategory;
    })
    .sort((a, b) => {
      let aValue = a[sortBy as keyof typeof a];
      let bValue = b[sortBy as keyof typeof b];
      
      if (sortBy === "timestamp") {
        aValue = new Date(a.timestamp).getTime();
        bValue = new Date(b.timestamp).getTime();
      }
      
      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "reviewed":
        return "bg-green-500/20 text-green-600 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
      case "escalated":
        return "bg-red-500/20 text-red-600 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500/20 text-green-600";
      case "neutral":
        return "bg-yellow-500/20 text-yellow-600";
      case "negative":
        return "bg-red-500/20 text-red-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleReply = () => {
    if (!selectedFeedback || !replyText.trim()) return;
    
    // In a real app, this would send to backend
    console.log("Sending reply:", {
      feedbackId: selectedFeedback.id,
      replyText,
      replyBy,
    });
    
    setIsReplyDialogOpen(false);
    setReplyText("");
    setReplyBy("");
    setSelectedFeedback(null);
  };

  const handleStatusChange = (feedbackId: number, newStatus: string) => {
    // In a real app, this would update the backend
    console.log("Updating status:", { feedbackId, newStatus });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card backdrop-blur-xl border-b border-border sticky top-0 z-40">
          <div className="flex items-center justify-between h-20 px-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Feedback Management</h1>
              <p className="text-sm text-muted-foreground">
                Monitor and respond to customer feedback
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Feedback
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add Manual Feedback</DialogTitle>
                    <DialogDescription>
                      Add feedback received through other channels
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Customer Name</Label>
                      <Input id="customerName" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employee">Employee</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Darine Ben Ali</SelectItem>
                          <SelectItem value="2">Ahmed Khelifi</SelectItem>
                          <SelectItem value="3">Sarah Mansouri</SelectItem>
                          <SelectItem value="4">Karim Jebali</SelectItem>
                          <SelectItem value="5">Fatima Bouaziz</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 Stars</SelectItem>
                          <SelectItem value="4">4 Stars</SelectItem>
                          <SelectItem value="3">3 Stars</SelectItem>
                          <SelectItem value="2">2 Stars</SelectItem>
                          <SelectItem value="1">1 Star</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Feedback Message</Label>
                      <Textarea id="message" placeholder="Enter feedback message..." rows={4} />
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Add Feedback</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card backdrop-blur-xl hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                        <Badge
                          variant="secondary"
                          className={`text-xs border-0 ${
                            stat.trend === "up" 
                              ? "bg-green-500/20 text-green-600" 
                              : "bg-red-500/20 text-red-600"
                          }`}
                        >
                          {stat.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feedback Management */}
          <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Customer Feedback</span>
                </CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {filteredFeedback.length} results
                </Badge>
              </div>

              {/* Filters */}
              <Tabs defaultValue="filters" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="filters">Filters</TabsTrigger>
                  <TabsTrigger value="sort">Sort & Export</TabsTrigger>
                </TabsList>
                
                <TabsContent value="filters" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    <div className="lg:col-span-2">
                      <SearchField
                        placeholder="Search feedback..."
                        value={searchTerm}
                        onChange={setSearchTerm}
                        className="w-full"
                      />
                    </div>
                    
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="reviewed">Reviewed</SelectItem>
                        <SelectItem value="escalated">Escalated</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={ratingFilter} onValueChange={setRatingFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ratings</SelectItem>
                        <SelectItem value="5">5 Stars</SelectItem>
                        <SelectItem value="4">4 Stars</SelectItem>
                        <SelectItem value="3">3 Stars</SelectItem>
                        <SelectItem value="2">2 Stars</SelectItem>
                        <SelectItem value="1">1 Star</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="Front Office">Front Office</SelectItem>
                        <SelectItem value="Kitchen">Kitchen</SelectItem>
                        <SelectItem value="Service">Service</SelectItem>
                        <SelectItem value="Bar">Bar</SelectItem>
                        <SelectItem value="Security">Security</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="ambiance">Ambiance</SelectItem>
                        <SelectItem value="cleanliness">Cleanliness</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="sort" className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Label>Sort by:</Label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="timestamp">Date</SelectItem>
                          <SelectItem value="rating">Rating</SelectItem>
                          <SelectItem value="customerName">Customer</SelectItem>
                          <SelectItem value="employeeName">Employee</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    >
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      {sortOrder === "asc" ? "Ascending" : "Descending"}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>

            <CardContent className="p-0">
              <div className="space-y-4 p-6">
                {filteredFeedback.map((feedback) => (
                  <Card key={feedback.id} className="border border-border/50 hover:border-primary/30 transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                {feedback.customerName.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-3">
                                <h4 className="font-semibold text-foreground">{feedback.customerName}</h4>
                                <div className="flex items-center space-x-1">
                                  {Array.from({ length: feedback.rating }, (_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                  <span className="text-sm font-medium ml-1">{feedback.rating}</span>
                                </div>
                                <Badge variant="outline" className={getSentimentBadge(feedback.sentiment)}>
                                  {feedback.sentiment}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                                <span>for {feedback.employeeName}</span>
                                <span>•</span>
                                <span>{feedback.department}</span>
                                <span>•</span>
                                <span>{new Date(feedback.timestamp).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusBadge(feedback.status)}>
                              {feedback.status}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedFeedback(feedback);
                                setIsReplyDialogOpen(true);
                              }}
                            >
                              <Reply className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="bg-muted/20 rounded-lg p-4">
                          <p className="text-foreground leading-relaxed">{feedback.message}</p>
                          {feedback.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {feedback.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Response */}
                        {feedback.response && (
                          <div className="border-l-4 border-primary pl-4 bg-primary/5 rounded-r-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Reply className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium text-primary">Response by {feedback.responseBy}</span>
                              <span className="text-xs text-muted-foreground">
                                {feedback.responseTimestamp ? new Date(feedback.responseTimestamp).toLocaleDateString() : ''}
                              </span>
                            </div>
                            <p className="text-foreground leading-relaxed">{feedback.response}</p>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              #{feedback.nfcCardId}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {feedback.category}
                            </Badge>
                            {feedback.isPublic && (
                              <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600">
                                Public
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Select 
                              value={feedback.status} 
                              onValueChange={(value) => handleStatusChange(feedback.id, value)}
                            >
                              <SelectTrigger className="w-32 h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="reviewed">Reviewed</SelectItem>
                                <SelectItem value="escalated">Escalated</SelectItem>
                              </SelectContent>
                            </Select>
                            
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Flag className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reply Dialog */}
      <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Reply to Feedback</DialogTitle>
            <DialogDescription>
              Respond to {selectedFeedback?.customerName}'s feedback
            </DialogDescription>
          </DialogHeader>
          
          {selectedFeedback && (
            <div className="space-y-4">
              {/* Original Feedback */}
              <div className="bg-muted/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {Array.from({ length: selectedFeedback.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{selectedFeedback.rating}/5</span>
                </div>
                <p className="text-sm text-foreground">{selectedFeedback.message}</p>
              </div>

              {/* Reply Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="replyBy">Reply as</Label>
                  <Input
                    id="replyBy"
                    value={replyBy}
                    onChange={(e) => setReplyBy(e.target.value)}
                    placeholder="Manager, Chef, etc."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="replyText">Your response</Label>
                  <Textarea
                    id="replyText"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Thank you for your feedback..."
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsReplyDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleReply} disabled={!replyText.trim() || !replyBy.trim()}>
                  Send Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
