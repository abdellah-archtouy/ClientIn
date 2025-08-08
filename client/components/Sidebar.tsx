import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Users,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NotificationPanel from "@/components/NotificationPanel";
import ProfileDropdown from "@/components/ProfileDropdown";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      icon: Home,
      path: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: Users,
      path: "/employees",
      label: "Employees",
    },
    {
      icon: BarChart3,
      path: "/charts",
      label: "Analytics",
    },
    {
      icon: FileText,
      path: "/reports",
      label: "Reports",
    },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`fixed left-0 top-0 h-full w-20 bg-sidebar backdrop-blur-xl border-r border-sidebar-border z-50 ${className}`}>
      <div className="flex flex-col items-center py-6 space-y-6 h-full">
        {/* Logo */}
        <Link to="/dashboard" className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
          <span className="text-primary-foreground font-bold text-lg">C</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3">
          {navigationItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                size="sm"
                className={`w-12 h-12 p-0 rounded-xl transition-all duration-200 ${
                  isActiveRoute(item.path)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-sidebar-foreground hover:text-primary hover:bg-primary/10"
                }`}
                title={item.label}
              >
                <item.icon className="h-6 w-6" />
              </Button>
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-3">
          {/* Settings */}
          <Link to="/settings">
            <Button
              variant="ghost"
              size="sm"
              className={`w-12 h-12 p-0 rounded-xl transition-all duration-200 ${
                isActiveRoute("/settings")
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-sidebar-foreground hover:text-primary hover:bg-primary/10"
              }`}
              title="Settings"
            >
              <Settings className="h-6 w-6" />
            </Button>
          </Link>

          {/* Notifications */}
          <NotificationPanel />

          {/* PRO Badge */}
          <Link to="/upgrade">
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-lg hover:from-primary/90 hover:to-primary cursor-pointer transition-all duration-200">
              PRO
            </Badge>
          </Link>
        </div>

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </div>
  );
}
