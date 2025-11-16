import { Button } from "./ui/button";
import { ArrowRight, Star, Bell, Calendar, MessageSquare, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden gradient-primary gradient-animate"
    >
      <div className="container mx-auto px-4 py-32 relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-full mx-auto relative">
          {/* Left Side Cards - beside text */}
          <div className="absolute -left-60 top-1/3 -translate-y-1/3 space-y-8 hidden 2xl:block">
            {[
              { 
                icon: Bell, 
                type: "REMINDER",
                title: "Call the dentist and make an appointment",
                date: "Monday, 26",
                time: "8:00 AM",
                color: "bg-feature-blue",
                delay: 600
              },
              { 
                icon: Clock, 
                type: "REMINDER",
                title: "Morning workout routine",
                date: "Daily",
                time: "6:00 AM",
                color: "bg-feature-teal",
                delay: 800,
                position: "second"
              }
            ].map((reminder, i) => (
              <div
                key={i}
                className={`${reminder.color} rounded-3xl p-6 shadow-2xl text-white w-80 animate-fade-up opacity-0 ${reminder.position === 'second' ? 'ml-16' : ''}`}
                style={{ animationDelay: `${reminder.delay}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <reminder.icon className="w-6 h-6 text-white/80" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                    {reminder.type}
                  </span>
                </div>
                <h4 className="font-semibold mb-4 text-base leading-snug">{reminder.title}</h4>
                <div className="flex justify-between items-center text-sm opacity-90">
                  <span>{reminder.date}</span>
                  <span>{reminder.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Cards - beside text */}
          <div className="hidden 2xl:block">
            {/* First right card */}
            <div
              className="absolute -right-60 top-1/4 bg-feature-orange rounded-3xl p-6 shadow-2xl text-white w-80 animate-fade-up opacity-0"
              style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-6 h-6 text-white/80" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  REMINDER
                </span>
              </div>
              <h4 className="font-semibold mb-4 text-base leading-snug">Submit quarterly report</h4>
              <div className="flex justify-between items-center text-sm opacity-90">
                <span>Friday, 30</span>
                <span>5:00 PM</span>
              </div>
            </div>
            
            {/* Second right card - offset */}
            <div
              className="absolute -right-40 top-1/2 bg-white rounded-3xl p-6 shadow-2xl text-foreground w-80 animate-fade-up opacity-0"
              style={{ animationDelay: '1600ms', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  LISTS
                </span>
              </div>
              <h4 className="font-semibold mb-3 text-base">Weekend plans:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Birthday party 🎉</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Movie night</span>
                </li>
              </ul>
            </div>
          </div>


          {/* Center Content */}
          <div className="text-center space-y-8">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full animate-fade-up">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium">4.9 | 60K+ users worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight animate-fade-up [animation-delay:200ms]">
              You are not designed to remember everything. <span className="text-white/90">Memorae is.</span>
            </h1>

            {/* CTA Button */}
            <div className="animate-fade-up [animation-delay:400ms]">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all group"
              >
                Try for Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Center Cards (below CTA) */}
            <div className="flex justify-center gap-24 mt-20">
              {[
                { 
                  icon: MessageSquare, 
                  type: "LISTS",
                  title: "Your pending tasks:",
                  items: ["Walk Paco 🐕", "Do the grocery shopping", "Send a quote"],
                  color: "bg-white",
                  textColor: "text-foreground",
                  delay: 1000
                },
                { 
                  icon: Calendar, 
                  type: "REMINDER",
                  title: "Team meeting with design team",
                  date: "Tuesday, 27",
                  time: "2:00 PM",
                  color: "bg-feature-purple",
                  delay: 1200
                }
              ].map((reminder, i) => (
                <div
                  key={i}
                  className={`${reminder.color} rounded-3xl p-6 shadow-2xl ${reminder.textColor || 'text-white'} w-80 animate-fade-up opacity-0`}
                  style={{ animationDelay: `${reminder.delay}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <reminder.icon className={`w-6 h-6 ${reminder.textColor ? 'text-primary' : 'text-white/80'}`} />
                    <span className={`text-sm font-semibold uppercase tracking-wider ${reminder.textColor ? 'text-primary' : 'text-white/80'}`}>
                      {reminder.type}
                    </span>
                  </div>
                  
                  {'items' in reminder ? (
                    <>
                      <h4 className="font-semibold mb-3 text-base">{reminder.title}</h4>
                      <ul className="space-y-2 text-sm">
                        {reminder.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="font-semibold mb-4 text-base leading-snug">{reminder.title}</h4>
                      <div className="flex justify-between items-center text-sm opacity-90">
                        <span>{reminder.date}</span>
                        <span>{reminder.time}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float [animation-delay:1s]" />
    </section>
  );
};

export default Hero;
