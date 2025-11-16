import { Users, Globe, Bell, Languages } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "+60,000",
      label: "people already living with a peaceful mind",
      color: "text-feature-blue",
    },
    {
      icon: Globe,
      value: "+45",
      label: "countries",
      color: "text-feature-purple",
    },
    {
      icon: Bell,
      value: "+5,000,000",
      label: "reminders sent",
      color: "text-feature-pink",
    },
    {
      icon: Languages,
      value: "+100",
      label: "languages",
      color: "text-feature-teal",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your head can't take it any more. Luckily, now you have help.
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-4 hover:scale-110 transition-transform animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className={`w-16 h-16 mx-auto ${stat.color}`} />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
