import { Brain, StickyNote, Repeat } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Problem Statement */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              You normalized living with your head{" "}
              <Brain className="inline w-10 h-10 text-feature-pink" /> about to explode.
              <br />
              And you don't even notice anymore.
            </h2>
          </div>

          {/* Pain Points */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform">
              <StickyNote className="w-12 h-12 text-feature-blue" />
              <p className="text-xl">
                There's always something pending. Something you forget. Something you should be doing right now
                <br />
                <span className="font-bold border-b-4 border-feature-blue">
                  ...but you don't know what.
                </span>
              </p>
            </div>

            <div className="bg-muted rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform">
              <Repeat className="w-12 h-12 text-feature-purple" />
              <p className="text-xl">
                You jot down things so you won't forget them. But you end up forgetting why you wrote them.
                And you start again. Over and over. As if{" "}
                <span className="font-bold border-b-4 border-feature-pink">
                  organization were the goal, not the solution.
                </span>
              </p>
            </div>
          </div>

          {/* Solution Intro */}
          <div className="text-center space-y-4">
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Until you decide to let go. And someone appears who doesn't complicate you, they just stay.
              And they give you back something you lost a long time ago:
            </p>
            <p className="text-4xl md:text-5xl font-bold text-gradient">peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
