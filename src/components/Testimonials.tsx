import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder",
      rating: 5,
      title: "Tool of the year",
      text: "Without a doubt, it's the best tool I've subscribed to this year. Keep up the good work!",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      rating: 5,
      title: "Game-changer",
      text: "I have ADHD and this tool has completely changed my life. It's like having a second brain!",
    },
    {
      name: "Emma Davis",
      role: "Violinist",
      rating: 5,
      title: "It's a lifesaver",
      text: "Thanks to Memorae! It's something that has changed my life and saved it. Yesterday I discovered the friend reminders feature and it was like: wooooooooooooooooow!",
    },
    {
      name: "James Wilson",
      role: "Financial advisor",
      rating: 5,
      title: "A miracle!",
      text: "A marvel. Now my memory has a name, and it's called Memorae.",
    },
    {
      name: "Sofia Martinez",
      role: "Founder",
      rating: 5,
      title: "The best invention of the century",
      text: "Since I started using it, it's impossible for me to forget anything. Imagine now that I can also make sure others don't forget! The best invention of the century for people who live life at 200 km/h.",
    },
    {
      name: "Lucas Brown",
      role: "Student",
      rating: 5,
      title: "The best thing that ever happened to me",
      text: "The best tool I've ever subscribed to. I haven't forgotten a task or a gift since. It's been one of the best investments of my life.",
    },
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-feature-blue text-2xl font-semibold">60k+ people</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              they have <span className="text-gradient">forgotten to forget</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-feature-purple hover:border-2 transition-all animate-fade-up border border-border group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-feature-purple transition-colors">{testimonial.title}</h3>
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-feature-blue to-feature-purple flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:bg-primary/90 hover:scale-110 transition-all text-white rounded-full px-8 py-6 text-lg group"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View More Testimonials
                  <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
