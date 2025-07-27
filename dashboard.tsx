"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Bell,
  ChevronDown,
  Home,
  LineChart,
  Search,
  Settings,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  Target,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg">MetrixCore</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              <Button variant="default" className="w-full justify-start bg-teal-500 hover:bg-teal-600">
                <Home className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <BarChart3 className="w-4 h-4 mr-3" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <Users className="w-4 h-4 mr-3" />
                Users
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <FileText className="w-4 h-4 mr-3" />
                Reports
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </Button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold">$45,231</p>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    +20.1%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Orders</p>
                    <p className="text-2xl font-bold">2,350</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    +15.3%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Customers</p>
                    <p className="text-2xl font-bold">2,420</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    +19%
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold">345,678</p>
                  </div>
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <LineChart className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    +201
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">since last hour</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Line Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Revenue Overview</span>
                  <Button variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Last 30 days
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between px-2">
                  {/* Simulated line chart with SVG */}
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <polyline
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      points="0,150 50,120 100,140 150,100 200,80 250,90 300,60 350,70 400,50"
                    />
                    <circle cx="0" cy="150" r="3" fill="#14b8a6" />
                    <circle cx="50" cy="120" r="3" fill="#14b8a6" />
                    <circle cx="100" cy="140" r="3" fill="#14b8a6" />
                    <circle cx="150" cy="100" r="3" fill="#14b8a6" />
                    <circle cx="200" cy="80" r="3" fill="#14b8a6" />
                    <circle cx="250" cy="90" r="3" fill="#14b8a6" />
                    <circle cx="300" cy="60" r="3" fill="#14b8a6" />
                    <circle cx="350" cy="70" r="3" fill="#14b8a6" />
                    <circle cx="400" cy="50" r="3" fill="#14b8a6" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Electronics</span>
                    <span className="text-sm text-gray-500">$12,426</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Clothing</span>
                    <span className="text-sm text-gray-500">$8,234</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Books</span>
                    <span className="text-sm text-gray-500">$5,678</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Home & Garden</span>
                    <span className="text-sm text-gray-500">$3,456</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "New order received", time: "2 minutes ago", amount: "$234.00" },
                    { action: "Payment processed", time: "5 minutes ago", amount: "$1,234.00" },
                    { action: "New customer registered", time: "10 minutes ago", amount: "" },
                    { action: "Product review submitted", time: "15 minutes ago", amount: "" },
                    { action: "Inventory updated", time: "20 minutes ago", amount: "" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <p className="text-sm font-medium">{item.action}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                      {item.amount && <span className="text-sm font-medium text-green-600">{item.amount}</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-sm font-medium">3.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg. Order Value</span>
                    <span className="text-sm font-medium">$67.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <span className="text-sm font-medium">4.8/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Return Rate</span>
                    <span className="text-sm font-medium">2.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
