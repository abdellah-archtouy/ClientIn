import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bell, 
  Star, 
  Users, 
  Clock, 
  Check, 
  X,
  Settings,
  Trash2
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "feedback",
    title: "New 5-star review for Darine",
    message: "A customer left excellent feedback about Darine's service",
    time: "2 minutes ago",
    read: false,
    avatar: "/api/placeholder/32/32",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: 2,
    type: "employee",
    title: "Ahmed checked in",
    message: "Ahmed has started his shift at 9:00 AM",
    time: "5 minutes ago",
    read: false,
    avatar: "/api/placeholder/32/32",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 3,
    type: "system",
    title: "NFC Card assigned",
    message: "NFC005 has been assigned to Fatima Bouaziz",
    time: "10 minutes ago",
    read: true,
    avatar: null,
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 4,
    type: "feedback",
    title: "Customer complaint",
    message: "A customer reported slow service in the dining area",
    time: "1 hour ago",
    read: true,
    avatar: "/api/placeholder/32/32",
    icon: Star,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    id: 5,
    type: "employee",
    title: "Break time extended",
    message: "Sarah's break has been extended by 15 minutes",
    time: "2 hours ago",
    read: true,
    avatar: "/api/placeholder/32/32",
    icon: Clock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }
];

export default function NotificationPanel() {
  const [notificationList, setNotificationList] = useState(notifications);
  const [isOpen, setIsOpen] = useState(false);
  
  const unreadCount = notificationList.filter(n => !n.read).length;
  
  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };
  
  const deleteNotification = (id: number) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative w-12 h-12 p-0 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
        >
          <Bell className="h-6 w-6" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {unreadCount > 9 ? "9+" : unreadCount}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {unreadCount} new
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs px-2 py-1 h-auto"
                >
                  Mark all read
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80">
              <div className="space-y-1 p-4">
                {notificationList.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No notifications</p>
                  </div>
                ) : (
                  notificationList.map((notification) => (
                    <div
                      key={notification.id}
                      className={`group flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 ${
                        !notification.read ? 'bg-primary/5 border-l-2 border-primary' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 ${notification.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        {notification.avatar ? (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback className="text-xs">
                              {notification.title.split(' ')[2]?.[0] || 'U'}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <notification.icon className={`h-4 w-4 ${notification.color}`} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {notification.time}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="w-6 h-6 p-0 hover:bg-primary/20"
                              >
                                <Check className="h-3 w-3" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="w-6 h-6 p-0 hover:bg-red-500/20 text-red-500"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
            <div className="border-t border-border/50 p-4">
              <Button
                variant="ghost"
                className="w-full text-sm text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-4 w-4 mr-2" />
                Notification Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
