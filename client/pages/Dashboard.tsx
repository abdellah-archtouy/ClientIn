import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Users,
  FileText,
  BarChart3,
  Settings,
  Bell,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
  Filter,
  Plus,
  TrendingUp,
  UserCheck,
  Activity,
  Zap,
  Smartphone,
  Wifi,
  QrCode,
  Radio,
  WifiOff,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import SearchField from "@/components/SearchField";
import ProfileDropdown from "@/components/ProfileDropdown";

const employees = [
  {
    id: 1,
    name: "Darine",
    avatar: "/api/placeholder/40/40",
    status: "active",
    checkIn: "09:00 Am",
    checkOut: "-",
    rating: 4.8,
    department: "Front Office",
    nfcCard: {
      id: "NFC001",
      status: "active",
      lastScan: "2 min ago",
      totalScans: 47,
    },
  },
  {
    id: 2,
    name: "Ahmed",
    avatar: "/api/placeholder/40/40",
    status: "active",
    checkIn: "09:00 Am",
    checkOut: "-",
    rating: 4.9,
    department: "Kitchen",
    nfcCard: {
      id: "NFC002",
      status: "active",
      lastScan: "5 min ago",
      totalScans: 33,
    },
  },
  {
    id: 3,
    name: "Sarah",
    avatar: "/api/placeholder/40/40",
    status: "break",
    checkIn: "09:00 Am",
    checkOut: "-",
    rating: 4.2,
    department: "Service",
    nfcCard: {
      id: "NFC003",
      status: "inactive",
      lastScan: "1 hour ago",
      totalScans: 18,
    },
  },
  {
    id: 4,
    name: "Karim",
    avatar: "/api/placeholder/40/40",
    status: "active",
    checkIn: "09:00 Am",
    checkOut: "-",
    rating: 4.7,
    department: "Bar",
    nfcCard: {
      id: "NFC004",
      status: "active",
      lastScan: "Just now",
      totalScans: 52,
    },
  },
  {
    id: 5,
    name: "Fatima",
    avatar: "/api/placeholder/40/40",
    status: "active",
    checkIn: "08:30 Am",
    checkOut: "-",
    rating: 4.6,
    department: "Kitchen",
    nfcCard: {
      id: "NFC005",
      status: "pending",
      lastScan: "Never",
      totalScans: 0,
    },
  },
  {
    id: 6,
    name: "Omar",
    avatar: "/api/placeholder/40/40",
    status: "offline",
    checkIn: "09:00 Am",
    checkOut: "17:00 Pm",
    rating: 4.5,
    department: "Security",
    nfcCard: {
      id: "NFC006",
      status: "active",
      lastScan: "3 hours ago",
      totalScans: 29,
    },
  },
];

const feedbacks = [
  {
    id: 1,
    name: "Abir",
    time: "9:00 Pm",
    message: "Service was excellent, very professional staff!",
    rating: 5,
    employee: "Darine",
  },
  {
    id: 2,
    name: "David",
    time: "8:45 Pm",
    message: "Quick service and friendly attitude",
    rating: 4,
    employee: "Ahmed",
  },
  {
    id: 3,
    name: "Ahmed",
    time: "8:30 Pm",
    message: "Outstanding customer service experience",
    rating: 5,
    employee: "Sarah",
  },
  {
    id: 4,
    name: "Leila",
    time: "8:15 Pm",
    message: "Very helpful and knowledgeable",
    rating: 4,
    employee: "Karim",
  },
];

const stats = [
  {
    title: "Active Staff",
    value: "12",
    change: "+2",
    icon: UserCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
  {
    title: "Avg Rating",
    value: "4.7",
    change: "+0.3",
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
  {
    title: "Today's Feedback",
    value: "47",
    change: "+12",
    icon: Activity,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
  {
    title: "Performance",
    value: "94%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    trend: "up",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card backdrop-blur-xl border-b border-border sticky top-0 z-40">
          <div className="flex items-center justify-between h-20 px-8">
            <div className="flex items-center space-x-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Monitor your team performance in real-time
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <SearchField placeholder="Search employees..." className="w-64" />
              <Button
                asChild
                size="sm"
                className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg"
              >
                <Link to="/employees">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Employee
                </Link>
              </Button>
              <ProfileDropdown />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-card backdrop-blur-xl hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-3xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-primary/20 text-primary border-0"
                        >
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Employee Management */}
            <div className="lg:col-span-2 space-y-8">
              {/* Employee Table */}
              <Card className="border-0  shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5" />
                      <span>Today's Activity</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">
                        Live Updates
                      </span>
                    </div>
                  </div>

                  {/* Search and Filter Controls */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <SearchField
                      placeholder="Search employees..."
                      className="flex-1"
                    />
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="break">On Break</option>
                        <option value="offline">Offline</option>
                      </select>
                      <select className="px-3 py-2 border border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm">
                        <option value="all">All Departments</option>
                        <option value="front">Front Office</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="service">Service</option>
                        <option value="bar">Bar</option>
                        <option value="security">Security</option>
                      </select>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                      >
                        <Filter className="h-4 w-4 mr-2" />
                        More Filters
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-hidden">
                    <div className="flex items-center justify-between mb-4 px-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">
                          Showing {employees.length} employees
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {
                            employees.filter((e) => e.status === "active")
                              .length
                          }{" "}
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-lg"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-lg"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border/50 bg-muted/20">
                          <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <span>Employee</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-4 h-4 p-0"
                              >
                                <ChevronLeft className="h-3 w-3 rotate-90" />
                              </Button>
                            </div>
                          </th>
                          <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <span>Check-in</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-4 h-4 p-0"
                              >
                                <ChevronLeft className="h-3 w-3 rotate-90" />
                              </Button>
                            </div>
                          </th>
                          <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                            Status
                          </th>
                          <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <span>Rating</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-4 h-4 p-0"
                              >
                                <ChevronLeft className="h-3 w-3 rotate-90" />
                              </Button>
                            </div>
                          </th>
                          <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((employee, index) => (
                          <tr
                            key={employee.id}
                            className="border-b border-border/30 hover:bg-muted/10 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={employee.avatar} />
                                  <AvatarFallback>
                                    {employee.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-sm">
                                    {employee.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {employee.department}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  {employee.checkIn}
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge
                                variant={
                                  employee.status === "active"
                                    ? "default"
                                    : employee.status === "break"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={`text-xs ${
                                  employee.status === "active"
                                    ? "bg-greenactive/20 text-greenactive border-greenactive/30"
                                    : employee.status === "break"
                                      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                      : "bg-muted text-muted-foreground border-border"
                                }`}
                              >
                                {employee.status}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">
                                  {employee.rating}
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-lg"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* NFC Card Management */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="flex items-center space-x-2">
                      <Radio className="h-5 w-5 text-primary" />
                      <span>NFC Card Management</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {
                          employees.filter((e) => e.nfcCard.status === "active")
                            .length
                        }{" "}
                        Active Cards
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Assign Card
                      </Button>
                    </div>
                  </div>

                  {/* NFC Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-foreground">
                            6
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Total Cards
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                          <Wifi className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-foreground">
                            4
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Active
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-xl p-4 border border-yellow-500/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                          <Clock className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-foreground">
                            1
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Pending
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-4 border border-red-500/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                          <WifiOff className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-foreground">
                            1
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Inactive
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {employees.map((employee) => (
                      <div
                        key={employee.id}
                        className="bg-muted/20 rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={employee.avatar} />
                              <AvatarFallback>
                                {employee.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">
                                {employee.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {employee.department}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6">
                            {/* NFC Card ID */}
                            <div className="text-center">
                              <div className="flex items-center space-x-2">
                                <QrCode className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-mono text-foreground">
                                  {employee.nfcCard.id}
                                </span>
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Card ID
                              </div>
                            </div>

                            {/* Status */}
                            <div className="text-center">
                              <Badge
                                variant={
                                  employee.nfcCard.status === "active"
                                    ? "default"
                                    : employee.nfcCard.status === "pending"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={`text-xs ${
                                  employee.nfcCard.status === "active"
                                    ? "bg-greenactive/20 text-greenactive border-greenactive/30"
                                    : employee.nfcCard.status === "pending"
                                      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                      : "bg-red-500/20 text-red-400 border-red-500/30"
                                }`}
                              >
                                {employee.nfcCard.status}
                              </Badge>
                              <div className="text-xs text-muted-foreground mt-1">
                                Status
                              </div>
                            </div>

                            {/* Last Scan */}
                            <div className="text-center">
                              <div className="text-sm font-medium">
                                {employee.nfcCard.lastScan}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Last Scan
                              </div>
                            </div>

                            {/* Total Scans */}
                            <div className="text-center">
                              <div className="text-sm font-bold text-primary">
                                {employee.nfcCard.totalScans}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Total Scans
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0 hover:bg-primary/20"
                              >
                                <RotateCcw className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0 hover:bg-primary/20"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent NFC Activity */}
                  <div className="mt-6 p-4 bg-muted/10 rounded-xl border border-border/30">
                    <h4 className="font-semibold text-sm mb-3 flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-primary" />
                      <span>Recent NFC Scans</span>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Karim's card scanned by customer
                        </span>
                        <span className="text-primary font-medium">
                          Just now
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Darine received 5-star feedback via NFC
                        </span>
                        <span className="text-muted-foreground">2 min ago</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Ahmed's card scanned - feedback pending
                        </span>
                        <span className="text-muted-foreground">5 min ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Feedback & Analytics */}
            <div className="flex flex-col space-y-6 h-full">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Link
                    to="/employees"
                    className="group cursor-pointer bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 rounded-xl p-4 border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 block"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">
                          Add Employee
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Create new staff profile
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/feedback"
                    className="group cursor-pointer bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:from-blue-500/20 hover:to-blue-500/10 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 block"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                        <FileText className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">
                          Feedback
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Manage customer feedback
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/settings"
                    className="group cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-500/5 hover:from-purple-500/20 hover:to-purple-500/10 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 block"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                        <Settings className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">
                          Settings
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Configure system
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/charts"
                    className="group cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-500/5 hover:from-orange-500/20 hover:to-orange-500/10 rounded-xl p-4 border border-orange-500/20 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 block"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                        <BarChart3 className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">
                          Analytics
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          View performance charts
                        </p>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Feedback */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl flex-1 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Recent Feedback</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  {/* Mini Calendar */}
                  <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-sm">Filter by Date</h4>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-6 h-6 p-0 hover:bg-primary/20"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <span className="text-sm font-medium">Dec 2024</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-6 h-6 p-0 hover:bg-primary/20"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                      {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                        <div
                          key={day}
                          className="p-2 font-medium text-muted-foreground"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {Array.from({ length: 31 }, (_, i) => {
                        const isToday = i === 14;
                        const hasActivity = [3, 7, 14, 18, 22, 28].includes(i);
                        return (
                          <button
                            key={i}
                            className={`p-2 hover:bg-primary/20 rounded-lg cursor-pointer transition-colors relative ${
                              isToday
                                ? "bg-primary text-primary-foreground font-semibold"
                                : hasActivity
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "hover:bg-muted"
                            }`}
                          >
                            {i + 1}
                            {hasActivity && !isToday && (
                              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-primary rounded-full"></div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Has feedback</span>
                      </div>
                      <span>Today: Dec 15</span>
                    </div>
                  </div>

                  {/* Feedback List */}
                  <div className="space-y-3 flex-1 overflow-y-auto min-h-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">
                        Today's Feedback
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {feedbacks.length} reviews
                      </Badge>
                    </div>
                    {feedbacks.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="group bg-muted/20 hover:bg-muted/30 rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-200"
                      >
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-10 h-10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200">
                            <AvatarFallback className="text-sm bg-primary/10 text-primary font-medium">
                              {feedback.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-semibold">
                                  {feedback.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  •
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {feedback.time}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                {Array.from(
                                  { length: feedback.rating },
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                    />
                                  ),
                                )}
                                <span className="text-xs font-medium ml-1">
                                  {feedback.rating}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                              {feedback.message}
                            </p>
                            <div className="flex items-center justify-between">
                              <Badge
                                variant="outline"
                                className="text-xs bg-primary/10 text-primary border-primary/20"
                              >
                                📋 {feedback.employee}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs px-2 py-1 h-auto"
                              >
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
