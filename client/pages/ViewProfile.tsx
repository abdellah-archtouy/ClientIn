import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  Shield,
  Crown,
  Activity,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

const userProfile = {
  name: "Abir Amam",
  email: "abir@clientin.com",
  phone: "+216 98 123 456",
  role: "CEO & Founder",
  company: "ClientIn Solutions",
  location: "Tunis, Tunisia",
  bio: "Passionate entrepreneur revolutionizing customer service with innovative NFC technology. Leading ClientIn to transform how businesses interact with their customers.",
  joinDate: "2023-01-15",
  avatar: "/api/placeholder/120/120",
  plan: "PRO",
  stats: {
    totalEmployees: 24,
    avgRating: 4.8,
    totalFeedbacks: 1247,
    performance: 94,
  },
  activities: [
    { action: "Updated company settings", time: "2 hours ago" },
    { action: "Added new employee: Sarah Mansouri", time: "1 day ago" },
    { action: "Reviewed monthly performance report", time: "2 days ago" },
    { action: "Upgraded to PRO plan", time: "1 week ago" },
  ],
};

export default function ViewProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone,
    company: userProfile.company,
    location: userProfile.location,
    bio: userProfile.bio,
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone,
      company: userProfile.company,
      location: userProfile.location,
      bio: userProfile.bio,
    });
    setIsEditing(false);
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
              <h1 className="text-2xl font-bold text-foreground">Profile</h1>
              <p className="text-sm text-muted-foreground">
                Manage your personal information and preferences
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={handleCancel} size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleSave} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} size="sm">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Header Card */}
            <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="w-32 h-32 ring-4 ring-primary/20">
                      <AvatarImage src={userProfile.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-2xl font-bold">
                        {userProfile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        size="sm"
                        className="absolute bottom-0 right-0 w-10 h-10 p-0 rounded-full shadow-lg"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-3xl font-bold text-foreground">{userProfile.name}</h2>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {userProfile.plan}
                      </Badge>
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600/30">
                        <Crown className="h-3 w-3 mr-1" />
                        {userProfile.role}
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">{userProfile.company}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{userProfile.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{userProfile.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{userProfile.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Joined {new Date(userProfile.joinDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Profile Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        {isEditing ? (
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          />
                        ) : (
                          <p className="py-2">{formData.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        ) : (
                          <p className="py-2">{formData.email}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        {isEditing ? (
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          />
                        ) : (
                          <p className="py-2">{formData.phone}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        {isEditing ? (
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          />
                        ) : (
                          <p className="py-2">{formData.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      {isEditing ? (
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        />
                      ) : (
                        <p className="py-2">{formData.location}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      {isEditing ? (
                        <Textarea
                          id="bio"
                          rows={4}
                          value={formData.bio}
                          onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                        />
                      ) : (
                        <p className="py-2 leading-relaxed">{formData.bio}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userProfile.activities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border/50 last:border-0">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Stats & Quick Info */}
              <div className="space-y-6">
                {/* Stats */}
                <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Total Employees</span>
                      </div>
                      <span className="font-bold">{userProfile.stats.totalEmployees}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Average Rating</span>
                      </div>
                      <span className="font-bold">{userProfile.stats.avgRating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Total Feedbacks</span>
                      </div>
                      <span className="font-bold">{userProfile.stats.totalFeedbacks}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Performance</span>
                      </div>
                      <span className="font-bold">{userProfile.stats.performance}%</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Security Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Crown className="h-4 w-4 mr-2" />
                      Upgrade Plan
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="h-4 w-4 mr-2" />
                      Company Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
