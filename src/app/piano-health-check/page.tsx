"use client";

import { useState } from "react";
import Link from "next/link";

type Step = 0 | 1 | 2 | "result";

export default function PianoHealthCheck() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<{
    q1: string | null;
    q2: string | null;
    q3: string | null;
  }>({ q1: null, q2: null, q3: null });
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  function selectAnswer(question: "q1" | "q2" | "q3", value: string) {
    const next = { ...answers, [question]: value };
    setAnswers(next);
    if (question === "q1") setStep(1);
    if (question === "q2") setStep(2);
    if (question === "q3") setStep("result");
  }

  const isResultA =
    answers.q1 === "within_year" &&
    answers.q2 === "sounds_great" &&
    answers.q3 === "feels_fine";

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = isResultA ? "A" : "B";
    const body = new URLSearchParams({
      "form-name": "quiz-email-capture",
      email,
      result,
      website: "",
    }).toString();

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    setEmailSent(true);
  }

  const q1Options = [
    { value: "within_year", label: "Within the last year" },
    { value: "one_two_years", label: "1–2 years ago" },
    { value: "three_plus_years", label: "3 or more years ago" },
    { value: "not_sure", label: "I'm not sure / never" },
  ];

  const q2Options = [
    { value: "sounds_great", label: "It sounds great" },
    { value: "slightly_off", label: "Something feels slightly off" },
    { value: "noticeably_off", label: "It's noticeably out of tune" },
    {
      value: "stopped_playing",
      label: "I've stopped playing it as much because of how it sounds",
    },
  ];

  const q3Options = [
    { value: "feels_fine", label: "No, everything feels fine" },
    { value: "few_off", label: "A few keys feel a little off" },
    { value: "several_issues", label: "Yes, several keys have issues" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 w-full">
      <div className="max-w-lg mx-auto">
        {/* Page header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-secondary mb-2">
            Piano Health Check
          </h1>
          <p className="text-muted-foreground text-sm">3 questions. 60 seconds.</p>
        </div>

        <div className="bg-white rounded-3xl border border-border p-8 md:p-10">
          {step === 0 && (
            <QuestionCard
              question="When was your piano last professionally tuned?"
              options={q1Options}
              selected={answers.q1}
              onSelect={(v) => selectAnswer("q1", v)}
            />
          )}

          {step === 1 && (
            <QuestionCard
              question="When you sit down to play, how does your piano sound?"
              options={q2Options}
              selected={answers.q2}
              onSelect={(v) => selectAnswer("q2", v)}
            />
          )}

          {step === 2 && (
            <QuestionCard
              question="Are any keys sticking, buzzing, or feeling uneven?"
              options={q3Options}
              selected={answers.q3}
              onSelect={(v) => selectAnswer("q3", v)}
            />
          )}

          {step === "result" && (
            <div>
              {isResultA ? (
                <>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-4">
                    Your piano is in good shape — let&apos;s keep it that way.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A well-maintained piano holds its tone and value over time.
                    The best way to protect what you&apos;ve already invested in
                    is a tuning now, before drift sets in. Jaiden is currently
                    taking appointments in Grand Rapids.
                  </p>
                  <Link href="/schedule" className="block">
                    <button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-base px-8 py-4 rounded-full font-medium transition-all">
                      Schedule Your Tuning →
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-4">
                    Your piano needs attention.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Based on your answers, your piano has likely drifted enough
                    that playing it isn&apos;t the experience it should be. The
                    longer it goes without service, the harder — and more
                    expensive — it becomes to bring back. Jaiden has tuned over
                    1,000 pianos across West Michigan. He&apos;ll tell you
                    exactly where yours stands and make it sound the way it
                    should. Appointments are limited — West Michigan only.
                  </p>
                  <Link href="/schedule" className="block">
                    <button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-base px-8 py-4 rounded-full font-medium transition-all">
                      Book Your Free Check-Up →
                    </button>
                  </Link>
                </>
              )}

              {/* Email capture */}
              <div className="mt-8 pt-8 border-t border-border">
                {emailSent ? (
                  <p className="text-sm text-muted-foreground">
                    You&apos;re all set.
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground mb-3">
                      Want us to send you this result and a reminder when
                      it&apos;s time to book?
                    </p>
                    <form
                      name="quiz-email-capture"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="website"
                      onSubmit={handleEmailSubmit}
                      className="flex gap-2"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="quiz-email-capture"
                      />
                      <input type="hidden" name="result" value={isResultA ? "A" : "B"} />
                      <input type="text" name="website" className="hidden" />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="flex-1 text-sm px-4 py-2 rounded-xl border border-border bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <button
                        type="submit"
                        className="bg-secondary text-white text-sm px-5 py-2 rounded-xl hover:bg-secondary/90 transition-all font-medium"
                      >
                        Send It
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  options,
  selected,
  onSelect,
}: {
  question: string;
  options: { value: string; label: string }[];
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-xl md:text-2xl font-medium text-secondary leading-snug mb-6">
        {question}
      </h2>
      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`w-full text-left py-4 px-5 rounded-xl border-2 transition-all text-sm font-medium ${
              selected === opt.value
                ? "border-primary bg-primary/10 text-secondary"
                : "border-border bg-muted/30 text-muted-foreground hover:border-primary/40 hover:bg-muted/60"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
