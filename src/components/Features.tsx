import { MessageSquare, Calendar, Mic, Clock, Users as UsersIcon, ListChecks } from "lucide-react";
import { Button } from "./ui/button";
import appMockup from "@/assets/app-mockup.png";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Notes that never get lost",
      description: "Shopping lists, ideas, or whatever. Just say it, type it, or drop it in and your list is saved.",
      color: "bg-feature-blue",
    },
    {
      icon: Calendar,
      title: "All your calendars in one chat",
      description: "Google, Outlook. Your appointments, events, and tasks together. You won't miss a thing, even if you try.",
      color: "bg-feature-pink",
    },
    {
      icon: Mic,
      title: "Voice notes that become tasks",
      description: "Your voice is enough. Memorae listens, transcribes, and organizes what you say. That easy.",
      color: "bg-feature-purple",
    },
    {
      icon: Clock,
      title: "Unlimited automatic reminders",
      description: "Unique or repeating. Weekly, monthly, with or without excuses. Scheduled, spontaneous — Memorae reminds you whenever needed!",
      color: "bg-feature-blue",
    },
    {
      icon: UsersIcon,
      title: "Reminders between friends",
      description: "Tell Memorae what to say, to whom, and when. Memorae will remind you when the time comes. That way, you can get on with your own business.",
      color: "bg-feature-orange",
    },
    {
      icon: ListChecks,
      title: "Your control center",
      description: "Your reminders, lists, everything. Everything that needs organizing together and organize that manageable.",
      color: "bg-feature-teal",
    },
  ];

  return (
    <section id="features" className="py-24 bg-dark-bg text-dark-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Superpowers for people who can't do it all
          </h2>

          {/* Auto-scrolling horizontal carousel */}
          <div className="relative mt-16">
            <div className="flex gap-6 animate-scroll-left-fast">
              {/* Duplicate features for seamless loop */}
              {[...features, ...features].map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.color}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:${feature.color}/20 hover:border-white/30 hover:shadow-2xl transition-all group min-w-[320px] max-w-[320px] flex-shrink-0`}
                >
                  <feature.icon className={`w-12 h-12 mb-4 ${feature.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-dark-foreground/70">{feature.description}</p>

                  {/* Mock message card */}
                  <div className={`mt-6 ${feature.color} rounded-xl p-4 text-sm text-white shadow-lg group-hover:scale-105 transition-transform`}>
                    <p className="line-clamp-2">
                      Memorae, {feature.title.toLowerCase()}
                    </p>
                    <p className="text-xs mt-2 text-white/70">17:48</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:scale-110 hover:shadow-2xl transition-all text-lg px-8 py-6 rounded-full"
            >
              Discover all the superpowers →
            </Button>
          </div>
        </div>
      </div>

      {/* App mockup section */}
      <div className="mt-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Capture, organize, remember, and act,
              <br />
              <span className="text-gradient">all in one place.</span>
            </h2>
            <p className="text-xl text-dark-foreground/70">
              Memorae transforms your scattered thoughts into structured memories that help you take action, focus, and ultimately feel relief.
            </p>

            <div className="relative mt-16">
              <img
                src={appMockup}
                alt="Memorae App Interface"
                className="rounded-3xl shadow-2xl mx-auto max-w-3xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
