import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Star,
  Clock,
  Filter,
  Download,
  Calendar,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Eye,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Mock data for charts
const performanceData = [
  { month: "Jan", performance: 85, feedback: 120, employees: 18 },
  { month: "Feb", performance: 88, feedback: 145, employees: 20 },
  { month: "Mar", performance: 92, feedback: 168, employees: 22 },
  { month: "Apr", performance: 87, feedback: 134, employees: 21 },
  { month: "May", performance: 94, feedback: 189, employees: 24 },
  { month: "Jun", performance: 91, feedback: 201, employees: 24 },
];

const departmentStats = [
  { name: "Front Office", performance: 95, employees: 6, color: "bg-blue-500" },
  { name: "Kitchen", performance: 92, employees: 8, color: "bg-green-500" },
  { name: "Service", performance: 89, employees: 7, color: "bg-yellow-500" },
  { name: "Bar", performance: 93, employees: 2, color: "bg-purple-500" },
  { name: "Security", performance: 88, employees: 1, color: "bg-red-500" },
];

const ratingDistribution = [
  { rating: 5, count: 145, percentage: 58 },
  { rating: 4, count: 76, percentage: 30 },
  { rating: 3, count: 20, percentage: 8 },
  { rating: 2, count: 7, percentage: 3 },
  { rating: 1, count: 2, percentage: 1 },
];

const topPerformers = [
  {
    name: "Ahmed Khelifi",
    department: "Kitchen",
    rating: 4.9,
    feedbacks: 33,
    improvement: "+12%",
  },
  {
    name: "Darine Ben Ali",
    department: "Front Office",
    rating: 4.8,
    feedbacks: 47,
    improvement: "+8%",
  },
  {
    name: "Karim Jebali",
    department: "Bar",
    rating: 4.7,
    feedbacks: 52,
    improvement: "+15%",
  },
  {
    name: "Fatima Bouaziz",
    department: "Kitchen",
    rating: 4.6,
    feedbacks: 41,
    improvement: "+5%",
  },
  {
    name: "Omar Trabelsi",
    department: "Security",
    rating: 4.5,
    feedbacks: 29,
    improvement: "+3%",
  },
];

export default function Charts() {
  const [timeRange, setTimeRange] = useState("6m");
  const [department, setDepartment] = useState("all");
  const [chartType, setChartType] = useState("performance");

  const stats = [
    {
      title: "Total Feedback",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Avg Rating",
      value: "4.7",
      change: "+0.3",
      trend: "up",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Active Employees",
      value: "24",
      change: "+2",
      trend: "up",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Avg Response Time",
      value: "2.4 min",
      change: "-15%",
      trend: "down",
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card backdrop-blur-xl border-b border-border sticky top-0 z-40">
          <div className="flex items-center justify-between h-20 px-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Analytics Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Detailed insights and performance metrics
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1w">Last Week</SelectItem>
                  <SelectItem value="1m">Last Month</SelectItem>
                  <SelectItem value="3m">Last 3 Months</SelectItem>
                  <SelectItem value="6m">Last 6 Months</SelectItem>
                  <SelectItem value="1y">Last Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 space-y-8">
          {/* Stats Overview */}
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
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
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
            {/* Main Chart */}
            <div className="lg:col-span-2 space-y-8">
              {/* Performance Trends */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <LineChart className="h-5 w-5" />
                      <span>Performance Trends</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select value={chartType} onValueChange={setChartType}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="performance">
                            Performance
                          </SelectItem>
                          <SelectItem value="feedback">
                            Feedback Count
                          </SelectItem>
                          <SelectItem value="employees">
                            Employee Count
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    {/* Simulated Line Chart */}
                    <div className="relative h-full bg-muted/10 rounded-lg p-6">
                      <div className="flex items-end justify-between h-full space-x-4">
                        {performanceData.map((data, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center space-y-2 flex-1"
                          >
                            <div className="relative w-full">
                              <div
                                className="bg-primary rounded-t-lg transition-all duration-500"
                                style={{
                                  height: `${((data[chartType as keyof typeof data] as number) / 100) * 200}px`,
                                  minHeight: "20px",
                                }}
                              ></div>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {data.month}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-4 left-6 text-sm font-medium text-foreground">
                        {chartType === "performance" && "Performance %"}
                        {chartType === "feedback" && "Feedback Count"}
                        {chartType === "employees" && "Employee Count"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Performance */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart className="h-5 w-5" />
                    <span>Department Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentStats.map((dept, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 ${dept.color} rounded-full`}
                            ></div>
                            <span className="font-medium">{dept.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {dept.employees} employees
                            </Badge>
                          </div>
                          <span className="font-bold">{dept.performance}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${dept.performance}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Rating Distribution */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5" />
                    <span>Rating Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ratingDistribution.map((rating, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {Array.from({ length: rating.rating }, (_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-sm">
                              {rating.count} reviews
                            </span>
                          </div>
                          <span className="text-sm font-medium">
                            {rating.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${rating.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performers */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Top Performers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPerformers.map((performer, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/20 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            {performer.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {performer.department}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {performer.rating}
                            </span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-500/20 text-green-600"
                          >
                            {performer.improvement}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Filters */}
              <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>Filters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <Select value={department} onValueChange={setDepartment}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="front">Front Office</SelectItem>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" className="w-full">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
