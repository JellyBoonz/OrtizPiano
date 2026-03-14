import { Piano, Frown, Users, HeartOff } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: HeartOff,
      text: <>Your piano is slowly getting out of tune, <strong className="text-secondary font-medium">making the sound noticeably worse</strong>.</>,
    },
    {
      icon: Piano,
      text: <>Keys feel <strong className="text-secondary font-medium">wobbly and uneven</strong>, making practicing <strong className="text-secondary font-medium">less fun</strong>.</>,
    },
    {
      icon: HeartOff,
      text: <>An out of tune piano <strong className="text-secondary font-medium">takes away from the magic</strong> of playing.</>,
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white rounded-3xl border border-border overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight">
            Your piano <span className="text-primary">doesn&apos;t sound like it used to</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div key={i} className="flex flex-col items-center text-left gap-3 rounded-2xl border border-border bg-muted/40 p-6 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <problem.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
