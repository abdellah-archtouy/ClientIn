import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Users,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit3,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Star,
  QrCode,
  Activity,
  UserCheck,
  UserX,
  Clock,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Darine Ben Ali",
    email: "darine@restaurant.com",
    phone: "+216 98 123 456",
    avatar: "/api/placeholder/40/40",
    status: "active",
    department: "Front Office",
    position: "Host",
    joinDate: "2024-01-15",
    rating: 4.8,
    totalFeedbacks: 47,
    nfcCard: {
      id: "NFC001",
      status: "active",
      lastScan: "2 min ago",
      totalScans: 47,
    },
    performance: {
      thisMonth: 95,
      lastMonth: 92,
      trend: "up",
    },
  },
  {
    id: 2,
    name: "Ahmed Khelifi",
    email: "ahmed@restaurant.com",
    phone: "+216 97 234 567",
    avatar: "/api/placeholder/40/40",
    status: "active",
    department: "Kitchen",
    position: "Chef de Partie",
    joinDate: "2023-11-20",
    rating: 4.9,
    totalFeedbacks: 33,
    nfcCard: {
      id: "NFC002",
      status: "active",
      lastScan: "5 min ago",
      totalScans: 33,
    },
    performance: {
      thisMonth: 98,
      lastMonth: 94,
      trend: "up",
    },
  },
  {
    id: 3,
    name: "Sarah Mansouri",
    email: "sarah@restaurant.com",
    phone: "+216 96 345 678",
    avatar: "/api/placeholder/40/40",
    status: "break",
    department: "Service",
    position: "Waitress",
    joinDate: "2024-03-10",
    rating: 4.2,
    totalFeedbacks: 18,
    nfcCard: {
      id: "NFC003",
      status: "inactive",
      lastScan: "1 hour ago",
      totalScans: 18,
    },
    performance: {
      thisMonth: 87,
      lastMonth: 89,
      trend: "down",
    },
  },
  {
    id: 4,
    name: "Karim Jebali",
    email: "karim@restaurant.com",
    phone: "+216 95 456 789",
    avatar: "/api/placeholder/40/40",
    status: "active",
    department: "Bar",
    position: "Bartender",
    joinDate: "2023-08-05",
    rating: 4.7,
    totalFeedbacks: 52,
    nfcCard: {
      id: "NFC004",
      status: "active",
      lastScan: "Just now",
      totalScans: 52,
    },
    performance: {
      thisMonth: 91,
      lastMonth: 88,
      trend: "up",
    },
  },
  {
    id: 5,
    name: "Fatima Bouaziz",
    email: "fatima@restaurant.com",
    phone: "+216 94 567 890",
    avatar: "/api/placeholder/40/40",
    status: "active",
    department: "Kitchen",
    position: "Sous Chef",
    joinDate: "2023-06-12",
    rating: 4.6,
    totalFeedbacks: 41,
    nfcCard: {
      id: "NFC005",
      status: "pending",
      lastScan: "Never",
      totalScans: 0,
    },
    performance: {
      thisMonth: 93,
      lastMonth: 91,
      trend: "up",
    },
  },
  {
    id: 6,
    name: "Omar Trabelsi",
    email: "omar@restaurant.com",
    phone: "+216 93 678 901",
    avatar: "/api/placeholder/40/40",
    status: "offline",
    department: "Security",
    position: "Security Guard",
    joinDate: "2023-12-01",
    rating: 4.5,
    totalFeedbacks: 29,
    nfcCard: {
      id: "NFC006",
      status: "active",
      lastScan: "3 hours ago",
      totalScans: 29,
    },
    performance: {
      thisMonth: 85,
      lastMonth: 87,
      trend: "down",
    },
  },
];

const stats = [
  {
    title: "Total Employees",
    value: employees.length.toString(),
    change: "+2",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
  {
    title: "Active Today",
    value: employees.filter(e => e.status === "active").length.toString(),
    change: "+1",
    icon: UserCheck,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    trend: "up",
  },
  {
    title: "Avg Rating",
    value: (employees.reduce((acc, emp) => acc + emp.rating, 0) / employees.length).toFixed(1),
    change: "+0.3",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    trend: "up",
  },
  {
    title: "Performance",
    value: Math.round(employees.reduce((acc, emp) => acc + emp.performance.thisMonth, 0) / employees.length) + "%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
];

export default function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<typeof employees[0] | null>(null);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || employee.status === statusFilter;
    const matchesDepartment = departmentFilter === "all" || employee.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "break":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "offline":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getNFCStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "inactive":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar space */}
      <div className="fixed left-0 top-0 h-full w-20 bg-sidebar backdrop-blur-xl border-r border-sidebar-border z-50">
        <div className="flex flex-col items-center py-6 space-y-6">
          <Link to="/dashboard" className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">C</span>
          </Link>

          <nav className="flex flex-col space-y-3">
            <Link to="/dashboard">
              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 p-0 text-sidebar-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
              >
                <Activity className="h-6 w-6" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 p-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-200"
            >
              <Users className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card backdrop-blur-xl border-b border-border sticky top-0 z-40">
          <div className="flex items-center justify-between h-20 px-8">
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Employee Management</h1>
                <p className="text-sm text-muted-foreground">
                  Manage your team members and track their performance
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Employee
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
                    <DialogDescription>
                      Create a new employee profile and assign an NFC card.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@restaurant.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+216 98 123 456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="front">Front Office</SelectItem>
                            <SelectItem value="kitchen">Kitchen</SelectItem>
                            <SelectItem value="service">Service</SelectItem>
                            <SelectItem value="bar">Bar</SelectItem>
                            <SelectItem value="security">Security</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input id="position" placeholder="Server" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddDialogOpen(false)}>
                        Create Employee
                      </Button>
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
                        <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-0">
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

          {/* Employee Table */}
          <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Employee Directory</span>
                </CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {filteredEmployees.length} employees
                </Badge>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="break">On Break</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Departments" />
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
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/20">
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Employee</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Contact</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Department</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Rating</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">NFC Card</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Performance</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((employee) => (
                      <tr key={employee.id} className="border-b border-border/30 hover:bg-muted/10 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={employee.avatar} />
                              <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{employee.name}</div>
                              <div className="text-xs text-muted-foreground">{employee.position}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-xs">
                              <Mail className="h-3 w-3 text-muted-foreground" />
                              <span>{employee.email}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs">
                              <Phone className="h-3 w-3 text-muted-foreground" />
                              <span>{employee.phone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className="text-xs">
                            {employee.department}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge className={`text-xs ${getStatusBadge(employee.status)}`}>
                            {employee.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{employee.rating}</span>
                            <span className="text-xs text-muted-foreground">({employee.totalFeedbacks})</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <QrCode className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs font-mono">{employee.nfcCard.id}</span>
                            </div>
                            <Badge className={`text-xs ${getNFCStatusBadge(employee.nfcCard.status)}`}>
                              {employee.nfcCard.status}
                            </Badge>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium">{employee.performance.thisMonth}%</div>
                            <div className={`flex items-center ${
                              employee.performance.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`}>
                              <TrendingUp className={`h-3 w-3 ${
                                employee.performance.trend === 'down' ? 'rotate-180' : ''
                              }`} />
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
