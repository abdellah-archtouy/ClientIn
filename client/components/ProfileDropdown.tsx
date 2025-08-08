import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Settings,
  LogOut,
  Crown,
  HelpCircle,
  Moon,
  Sun,
  Monitor,
  Shield
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const userProfile = {
  name: "Abir Amam",
  email: "abir@clientin.com",
  role: "Admin",
  avatar: "/api/placeholder/40/40",
  plan: "PRO",
  company: "ClientIn Solutions"
};

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("system");
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, this would clear auth tokens and session
    navigate("/");
    setIsOpen(false);
  };

  const cycleTheme = () => {
    const themes = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-auto p-0">
          <Avatar className="w-10 h-10 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-200">
            <AvatarImage src={userProfile.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
              {userProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="bg-card border-0 shadow-lg rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-border/50">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12 ring-2 ring-primary/30">
                <AvatarImage src={userProfile.avatar} />
                <AvatarFallback className="bg-primary/20 text-primary font-medium">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-foreground truncate">
                    {userProfile.name}
                  </h3>
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                    {userProfile.plan}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {userProfile.email}
                </p>
                <p className="text-xs text-muted-foreground">
                  {userProfile.role} • {userProfile.company}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/20">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">24</div>
              <div className="text-xs text-muted-foreground">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">4.8</div>
              <div className="text-xs text-muted-foreground">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-500">94%</div>
              <div className="text-xs text-muted-foreground">Performance</div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-muted/50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/profile">
                <User className="h-4 w-4 mr-3" />
                View Profile
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-muted/50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/settings">
                <Settings className="h-4 w-4 mr-3" />
                Account Settings
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-muted/50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Crown className="h-4 w-4 mr-3 text-yellow-500" />
              <div className="flex-1 text-left">
                <div>Upgrade Plan</div>
                <div className="text-xs text-muted-foreground">Unlock premium features</div>
              </div>
            </Button>

            <Separator className="my-2" />

            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-muted/50 rounded-lg"
              onClick={cycleTheme}
            >
              {getThemeIcon()}
              <span className="ml-3 flex-1 text-left">Theme</span>
              <span className="text-xs text-muted-foreground capitalize">{theme}</span>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-muted/50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Shield className="h-4 w-4 mr-3" />
              Privacy & Security
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-muted/50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle className="h-4 w-4 mr-3" />
              Help & Support
            </Button>

            <Separator className="my-2" />

            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-normal hover:bg-red-500/10 text-red-600 hover:text-red-700 rounded-lg"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>

          {/* Footer */}
          <div className="p-4 bg-muted/20 border-t border-border/50">
            <div className="text-xs text-muted-foreground text-center">
              ClientIn v2.1.0 • © 2025
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
