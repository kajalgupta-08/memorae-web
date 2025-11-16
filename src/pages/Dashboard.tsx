import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Send, Paperclip, Mic, Search, MoreVertical, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi! I'm Memorae 🧠 Your digital memory assistant. I can help you remember tasks, set reminders, and organize your thoughts. What would you like me to help you with?",
      time: "10:30 AM"
    },
    {
      id: 2,
      type: "user",
      content: "Remind me to call mom at 6 PM today",
      time: "10:32 AM"
    },
    {
      id: 3,
      type: "bot",
      content: "✅ Reminder set! I'll remind you to call mom at 6:00 PM today.",
      time: "10:32 AM"
    },
    {
      id: 4,
      type: "user",
      content: "Add to my shopping list: milk, bread, eggs",
      time: "11:15 AM"
    },
    {
      id: 5,
      type: "bot",
      content: "📝 Added to your shopping list:\n• Milk\n• Bread\n• Eggs\n\nYour list now has 3 items.",
      time: "11:15 AM"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: "Got it! I've processed your request. Is there anything else I can help you remember? 🤖",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    toast({
      title: "Message sent! 💬",
      description: "Memorae is processing your request",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* WhatsApp-style Header */}
      <div className="bg-green-600 text-white p-4 flex items-center gap-4 shadow-lg">
        <Link to="/">
          <Button variant="ghost" size="sm" className="text-white hover:bg-green-700 p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        
        <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">M</span>
        </div>
        
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Memorae Assistant</h1>
          <p className="text-sm text-green-100">Online • Your digital memory</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-green-700 p-2">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-green-700 p-2">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              msg.type === 'user' 
                ? 'bg-green-500 text-white rounded-br-none' 
                : 'bg-white text-gray-800 rounded-bl-none shadow-md'
            }`}>
              <p className="whitespace-pre-line">{msg.content}</p>
              <p className={`text-xs mt-1 ${
                msg.type === 'user' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-t p-4">
        <div className="flex gap-2 mb-4 overflow-x-auto">
          <Button 
            size="sm" 
            className="bg-blue-100 text-blue-700 hover:bg-blue-200 whitespace-nowrap"
            onClick={() => setMessage("Remind me to ")}
          >
            📅 Set Reminder
          </Button>
          <Button 
            size="sm" 
            className="bg-green-100 text-green-700 hover:bg-green-200 whitespace-nowrap"
            onClick={() => setMessage("Add to my list: ")}
          >
            📝 Add to List
          </Button>
          <Button 
            size="sm" 
            className="bg-purple-100 text-purple-700 hover:bg-purple-200 whitespace-nowrap"
            onClick={() => setMessage("Remember that ")}
          >
            🧠 Save Memory
          </Button>
          <Button 
            size="sm" 
            className="bg-orange-100 text-orange-700 hover:bg-orange-200 whitespace-nowrap"
            onClick={() => setMessage("Schedule ")}
          >
            ⏰ Schedule Task
          </Button>
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-2">
            <Paperclip className="w-5 h-5" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message to Memorae..."
              className="pr-12 rounded-full border-gray-300 focus:border-green-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 p-2"
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>
          
          <Button 
            onClick={handleSendMessage}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;