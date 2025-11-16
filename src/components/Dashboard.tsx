import { Button } from "./ui/button";
import { Plus, Brain, Clock, Calendar, CheckCircle, Bell } from "lucide-react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome back! 
            </h1>
            <p className="text-xl text-gray-600">
              Here's what's happening with your memories today.
            </p>
          </div>

          {/* Memory Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-gray-900">Total Memories</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">247</p>
              <p className="text-sm text-gray-500 mt-1">+12 this week</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-secondary" />
                <h3 className="font-semibold text-gray-900">Recently Added</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-500 mt-1">Last 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h3 className="font-semibold text-gray-900">Due for Review</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">15</p>
              <p className="text-sm text-gray-500 mt-1">Ready to review</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-8 h-8 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Today's Reminders</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">5</p>
              <p className="text-sm text-gray-500 mt-1">Scheduled for today</p>
            </div>
          </div>

          {/* Quick Add Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Add</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-xl py-6 flex items-center gap-3 group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                Add Memory
              </Button>
              
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-xl py-6 flex items-center gap-3 group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                Add Task
              </Button>
              
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-xl py-6 flex items-center gap-3 group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                Add Reminder
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { type: "Memory", title: "Meeting notes with client", time: "2 hours ago", color: "bg-primary" },
                { type: "Task", title: "Review quarterly report", time: "4 hours ago", color: "bg-secondary" },
                { type: "Reminder", title: "Call dentist appointment", time: "6 hours ago", color: "bg-accent" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.type} • {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;