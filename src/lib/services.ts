import { Piano, Music, Sparkles, Wrench, Keyboard, ClipboardList } from "lucide-react";

export type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceData = {
  name: string;
  slug: string;
  price: string;
  icon: typeof Piano;
  metaTitle: string;
  metaDescription: string;
  images: {
    hero: ServiceImage;
    guide: ServiceImage;
    success: ServiceImage;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  problem: {
    heading: string;
    paragraphs: string[];
    painPoints: string[];
  };
  guide: {
    heading: string;
    paragraphs: string[];
  };
  plan: {
    heading: string;
    steps: Array<{ title: string; description: string }>;
  };
  included: {
    heading: string;
    items: string[];
    bonuses?: Array<{ label: string; detail: string }>;
  };
  stakes: {
    heading: string;
    paragraphs: string[];
    consequences: string[];
  };
  success: {
    heading: string;
    paragraphs: string[];
    outcomes: string[];
  };
  guarantee: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  scarcity: string;
  ctaHeadline: string;
  ctaSubheadline: string;
};

export const services: ServiceData[] = [
  {
    name: "Piano Tuning",
    slug: "piano-tuning-west-michigan",
    price: "Starting at $150",
    icon: Piano,
    metaTitle: "Piano Tuning in West Michigan | Ortiz Piano Tuning",
    metaDescription: "Professional piano tuning in Grand Rapids and West Michigan. Precision pitch adjustment by a full-time technician with 8+ years of experience. Zero-prep appointments, free minor repairs included, and a sound-right guarantee. Starting at $150.",
    images: {
      hero: { src: "/stock/piano-tuning-handle.png", alt: "Professional piano tuning tools resting on piano strings" },
      guide: { src: "/jaiden-playing-piano.webp", alt: "Jaiden Ortiz playing piano" },
      success: { src: "/stock/girl-smiling-at-piano.jpeg", alt: "Young girl smiling while playing a well-tuned piano" },
    },
    hero: {
      headline: "Your piano used to make you want to play. It can again.",
      subheadline: "Professional piano tuning in Grand Rapids and West Michigan. One visit, zero hassle, and a sound so clear it pulls you back to the bench.",
    },
    problem: {
      heading: "You know something's off. You just haven't done anything about it yet.",
      paragraphs: [
        "You sit down to play and something doesn't feel right. The tone is muddy. A chord that used to ring beautifully now sounds flat and lifeless. You press a key and the response feels sluggish, like the piano is fighting you instead of working with you.",
        "So you play less. You practice less. And slowly, the instrument that used to be the centerpiece of your home becomes background furniture. That's not why you bought a piano.",
      ],
      painPoints: [
        "Playing feels like a chore instead of something you look forward to",
        "You're embarrassed to play when guests are over because you know it sounds off",
        "Your kids are losing motivation to practice because the piano doesn't sound good",
        "You can hear something is wrong but you've been putting off dealing with it",
      ],
    },
    guide: {
      heading: "Jaiden gets it, because music has been his life since he was five.",
      paragraphs: [
        "Jaiden Ortiz started performing at church as a kid, picked up the piano at 16, and studied piano performance in college. He knows exactly what it feels like to sit down at a perfectly tuned instrument and get lost in the music. He also knows how quickly that magic disappears when the piano drifts out of tune.",
        "This isn't a side hustle. Jaiden has been tuning pianos full-time since 2017, with over 1,000 pianos serviced across West Michigan. He's a trained pianist and a full-time technician, and he treats every piano like it's his own.",
      ],
    },
    plan: {
      heading: "Three steps to a piano that sounds like new.",
      steps: [
        {
          title: "Call or schedule online",
          description: "Tell us about your piano, its age, its history, and what you're hearing. Jaiden comes prepared.",
        },
        {
          title: "Jaiden comes to you",
          description: "He handles everything on-site. You don't need to move anything off the piano, clean up, or even be home. He lets himself in, does the work, and leaves your piano sounding better than it has in years.",
        },
        {
          title: "Fall back in love with playing",
          description: "Sit down at a piano that sounds clear, feels responsive, and makes you want to play again. That 'new car' feeling, every time you touch the keys.",
        },
      ],
    },
    included: {
      heading: "What's included with every tuning",
      items: [
        "Full chromatic tuning to A440 concert pitch",
        "Assessment of tuning pin tightness and string condition",
        "Evaluation of overall piano health with honest recommendations",
        "Zero-prep service: Jaiden moves items off the piano and tidies up when finished",
        "Keyless entry option so you don't have to be home",
        "Appointment reminders at 30, 7, and 1 day before your tuning",
        "Day-of ETA notification so you know exactly when he's arriving",
      ],
      bonuses: [
        { label: "FREE minor repairs", detail: "Sticking keys, buzzing strings, squeaky pedals, all handled on the spot at no extra charge (normally $30-$75 per fix)" },
        { label: "FREE diagnostic assessment", detail: "A full evaluation of your piano's health so nothing sneaks up on you" },
        { label: "FREE piano valuation estimate", detail: "Find out what your instrument is actually worth (a professional appraisal alone can cost $100+)" },
        { label: "FREE exterior cleaning", detail: "Book your next tuning same-day and Jaiden polishes the case and cleans the keys before he leaves ($40 value)" },
      ],
    },
    stakes: {
      heading: "Waiting doesn't just sound worse. It costs more.",
      paragraphs: [
        "Every month your piano sits out of tune, the strings lose more tension. The longer you wait, the further it drifts, and eventually a simple tuning won't hold anymore. You'll need a pitch raise first, which takes longer and costs more.",
        "But the real cost isn't financial. It's the playing you're not doing. The practice your kids are skipping. The music that used to fill your home and doesn't anymore.",
      ],
      consequences: [
        "Strings loosen further and the soundboard warps, leading to permanent damage",
        "A standard tuning won't hold, requiring a more expensive pitch raise",
        "Playing ability declines as you avoid a frustrating instrument",
        "Your kids lose motivation and stop practicing",
        "Uneven keys train bad technique, undermining years of lessons",
      ],
    },
    success: {
      heading: "This is what you've been missing.",
      paragraphs: [
        "You sit down, press a key, and everything is right. The tone is clear. The action is smooth. The piano responds to you instead of fighting you. It's that feeling of driving a brand new car off the lot, except it's sitting in your living room.",
      ],
      outcomes: [
        "Every practice session feels rewarding instead of frustrating",
        "You're confident playing for guests, family, and friends",
        "Your kids actually want to practice because the piano sounds great",
        "Your skills improve because you're inspired to play consistently",
        "Peace of mind knowing your instrument is maintained and not slowly deteriorating",
      ],
    },
    guarantee: {
      heading: "Our guarantees",
      items: [
        { title: "Sound-Right Guarantee", description: "If your piano doesn't sound noticeably better after your tuning, Jaiden comes back within 14 days and re-tunes it, completely free." },
        { title: "On-Time Guarantee", description: "If Jaiden doesn't arrive within the quoted time window, you get $25 off your tuning, automatically, no questions asked." },
        { title: "No-Risk Annual Plan", description: "Sign up for the Annual Care Plan and aren't satisfied after your first tuning? Cancel for a full refund. Zero risk." },
      ],
    },
    scarcity: "Jaiden only performs 10 tunings per week. The first 4 appointments booked each week receive the best pricing. During peak seasons, the waitlist can stretch 3-4 weeks.",
    ctaHeadline: "Your piano is going out of tune right now.",
    ctaSubheadline: "The longer you wait, the worse it sounds and the more it costs to fix. One call is all it takes to get back to the music.",
  },
  {
    name: "Tuning + Pitch Raise",
    slug: "pitch-raise-west-michigan",
    price: "Starting at $200",
    icon: Music,
    metaTitle: "Piano Pitch Raise Service in West Michigan | Ortiz Piano Tuning",
    metaDescription: "Has your piano gone years without tuning? A pitch raise brings it back to life. Careful tension adjustment, full fine-tuning, and a sound-right guarantee. Serving Grand Rapids and West Michigan.",
    images: {
      hero: { src: "/stock/piano-strings.jpg", alt: "Close-up of piano strings and tuning pins" },
      guide: { src: "/jaiden-headshot.jpeg", alt: "Jaiden Ortiz, professional piano technician" },
      success: { src: "/stock/couple-playing-piano.png", alt: "Couple enjoying playing piano together" },
    },
    hero: {
      headline: "It's been a while. Your piano can still come back.",
      subheadline: "When a piano goes years without tuning, a standard tuning won't hold. A pitch raise brings the whole instrument back to where it should be, carefully and correctly.",
    },
    problem: {
      heading: "You know it's been too long. You've been putting it off because you're not sure what it even needs.",
      paragraphs: [
        "Maybe it's been two years. Maybe five. Maybe you inherited a piano that hasn't been touched in a decade. Whatever the story, you can hear it. The whole instrument sounds flat and dull. Notes that used to sparkle just thud. Playing it feels pointless because nothing sounds the way it should.",
        "You might have even called another tuner who told you the piano \"just needs a tuning.\" But a few days later, it sounded just as bad. That's because they skipped a critical step.",
      ],
      painPoints: [
        "The piano sounds so far off that you've stopped playing entirely",
        "You had it tuned before but it didn't hold, so you gave up",
        "You feel guilty about neglecting an instrument that meant something to you or your family",
        "You're worried it might be too far gone to save",
      ],
    },
    guide: {
      heading: "Jaiden won't cut corners. That's why his tunings hold.",
      paragraphs: [
        "Most tuners want to get in and out fast. They'll do a single-pass tuning on a piano that's dropped a full semitone and call it done. The problem? When you adjust one string on a piano under that much tension imbalance, the strings around it shift. The whole tuning unravels within days.",
        "Jaiden takes the time to do it right. He brings the pitch up gradually, in stages, giving the strings and plate time to settle. Then he does a full fine-tuning pass on top of that. It takes longer, but the result is a tuning that actually stays in tune.",
      ],
    },
    plan: {
      heading: "How a pitch raise works",
      steps: [
        {
          title: "Assessment",
          description: "Jaiden measures how far the piano has drifted and evaluates the condition of the strings, tuning pins, and soundboard to make sure the instrument can safely handle the tension change.",
        },
        {
          title: "Gradual pitch raise",
          description: "He brings the entire piano up to proper tension in careful stages, not all at once. This protects the plate, strings, and soundboard from sudden stress.",
        },
        {
          title: "Fine tuning",
          description: "Once the pitch raise stabilizes, Jaiden does a complete fine-tuning pass. The result is a piano that sounds transformed and stays that way.",
        },
      ],
    },
    included: {
      heading: "What's included",
      items: [
        "Initial pitch assessment to determine how far the piano has drifted",
        "Careful, staged pitch raise to bring all strings back to proper tension",
        "Full fine-tuning pass after the pitch stabilizes",
        "Evaluation of tuning pins, strings, and soundboard for stress or wear",
        "Recommendations for follow-up tuning schedule to maintain stability",
        "Zero-prep service and keyless entry option",
        "Appointment reminders and day-of ETA notification",
      ],
      bonuses: [
        { label: "FREE minor repairs", detail: "Sticking keys, buzzing strings, and other issues addressed on the spot at no charge" },
        { label: "FREE diagnostic report", detail: "Full condition evaluation so you know exactly where your piano stands" },
        { label: "FREE piano valuation estimate", detail: "Find out what your instrument is worth ($100+ value)" },
      ],
    },
    stakes: {
      heading: "Every month you wait, the problem gets worse and the fix gets more expensive.",
      paragraphs: [
        "A piano that sits flat for too long doesn't just sound bad. The uneven tension across the plate and soundboard can cause real structural damage. Tuning pins loosen in their holes. Strings corrode and lose elasticity. The soundboard warps.",
        "What could have been a $200 pitch raise becomes a $500+ repair, or worse, damage that can't be undone at all.",
      ],
      consequences: [
        "Tuning pins lose their grip, making the piano unable to hold pitch at all",
        "Strings corrode and become brittle, increasing the risk of breakage",
        "The soundboard warps under uneven tension, permanently affecting tone",
        "What starts as a pitch raise escalates into a major restoration project",
        "The piano becomes functionally unplayable and loses most of its value",
      ],
    },
    success: {
      heading: "It's not too late. Most pianos come back beautifully.",
      paragraphs: [
        "After a proper pitch raise, clients say the same thing: \"I forgot it could sound like this.\" Notes ring clearly again. Chords have depth and resonance. The whole instrument feels alive in a way it hasn't in years. It's like getting your piano back.",
      ],
      outcomes: [
        "Your piano sounds clear, bright, and in tune for the first time in years",
        "You actually want to sit down and play again",
        "Follow-up tunings are simpler and less expensive now that the pitch is stable",
        "Your family hears the instrument the way it was meant to sound",
        "The piano holds its value instead of continuing to deteriorate",
      ],
    },
    guarantee: {
      heading: "Our guarantees",
      items: [
        { title: "Sound-Right Guarantee", description: "If your piano doesn't sound noticeably better, Jaiden comes back within 14 days and makes it right, free of charge." },
        { title: "On-Time Guarantee", description: "If Jaiden doesn't arrive within the quoted time window, $25 off, automatically." },
        { title: "No hidden costs", description: "Jaiden quotes the full price before he starts. If the job takes longer than expected, the price stays the same." },
      ],
    },
    scarcity: "Pitch raises take longer than standard tunings, so Jaiden can only fit a limited number per week. During busy seasons, the wait can be 3-4 weeks.",
    ctaHeadline: "Your piano hasn't forgotten how to sound beautiful. It just needs help getting there.",
    ctaSubheadline: "Whether it's been two years or twenty, one visit can bring it back. Call today before the waitlist fills up.",
  },
  {
    name: "Tuning + Cleaning",
    slug: "tuning-and-cleaning-west-michigan",
    price: "Starting at $250",
    icon: Sparkles,
    metaTitle: "Piano Tuning and Cleaning in West Michigan | Ortiz Piano Tuning",
    metaDescription: "Professional piano tuning and deep cleaning in Grand Rapids and West Michigan. Interior and exterior cleaning, full tuning, and free diagnostic. Make your piano look and sound its best.",
    images: {
      hero: { src: "/stock/piano-keys.jpg", alt: "Gleaming piano keys on a clean instrument" },
      guide: { src: "/jaiden-playing-piano.webp", alt: "Jaiden Ortiz playing piano" },
      success: { src: "/stock/piano-clean-livingroom.png", alt: "Beautiful clean piano in a bright living room" },
    },
    hero: {
      headline: "When was the last time someone looked inside your piano?",
      subheadline: "A tuning and cleaning package doesn't just make your piano sound better. It makes it look, feel, and play like the instrument you fell in love with.",
    },
    problem: {
      heading: "You'd be surprised what's living inside your piano right now.",
      paragraphs: [
        "Dust. Pet hair. Pencils, paper clips, old sheet music, coins. The inside of a piano collects everything, and none of it belongs there. That debris isn't just unsightly. It sits on your strings and muffles tone. It gets into the action and causes keys to stick. It accelerates wear on felt components that are designed to last decades.",
        "And the outside? Fingerprints on the keys. A dull, dusty case that used to gleam. The piano that was once the centerpiece of your living room now blends into the background.",
      ],
      painPoints: [
        "Keys feel sluggish or sticky and you're not sure why",
        "You hear occasional buzzing or rattling sounds that shouldn't be there",
        "The piano looks neglected even though you care about it",
        "You're nervous about opening it up and cleaning it yourself",
      ],
    },
    guide: {
      heading: "Jaiden treats every piano like it's his own.",
      paragraphs: [
        "As a pianist himself, Jaiden knows that a great playing experience is about more than just pitch. It's about how the keys feel under your fingers, how the instrument looks in your home, and the confidence that comes from knowing everything is clean and maintained. He's meticulous about the details because those details are the difference between a piano you tolerate and a piano you love.",
      ],
    },
    plan: {
      heading: "A complete refresh in one visit",
      steps: [
        {
          title: "Interior deep clean",
          description: "Jaiden carefully cleans the strings, soundboard, and all action components. He removes dust, debris, and any foreign objects that have accumulated inside.",
        },
        {
          title: "Full professional tuning",
          description: "With the interior clean, the tuning is more precise and the results are more noticeable. Every note rings without interference.",
        },
        {
          title: "Exterior polish and detail",
          description: "Case polishing, key cleaning and sanitization, and a final inspection. Your piano looks as good as it sounds.",
        },
      ],
    },
    included: {
      heading: "What's included",
      items: [
        "Full professional tuning to A440 concert pitch",
        "Interior cleaning of strings, soundboard, and action components",
        "Removal of dust, debris, and foreign objects",
        "Exterior case cleaning and polishing",
        "Key cleaning and sanitization",
        "Inspection for moth, pest, or moisture damage",
        "Zero-prep service, keyless entry, and appointment reminders",
      ],
      bonuses: [
        { label: "FREE minor repairs", detail: "Any sticking keys, buzzing strings, or squeaky pedals fixed on the spot" },
        { label: "FREE diagnostic report", detail: "Full condition assessment so you know exactly what your piano needs going forward" },
        { label: "FREE piano valuation estimate", detail: "Professional appraisal of what your instrument is worth ($100+ value)" },
      ],
    },
    stakes: {
      heading: "Neglect doesn't just look bad. It causes real damage.",
      paragraphs: [
        "Debris inside a piano isn't just a cosmetic problem. Dust and grime on hammer felts change the tone. Foreign objects can jam the action and break delicate parts. Moth damage to felts is expensive to repair and often goes undetected until it's severe.",
      ],
      consequences: [
        "Dust buildup on strings and soundboard gradually muffles your piano's tone",
        "Debris in the action causes sticking, sluggish keys, and uneven response",
        "Moths and pests can destroy hammer felts and dampers, requiring costly replacement",
        "A dirty, dull exterior makes your piano look neglected instead of treasured",
        "Accumulated grime accelerates wear on parts designed to last decades",
      ],
    },
    success: {
      heading: "Like getting a brand new piano without buying one.",
      paragraphs: [
        "Clients who book a tuning and cleaning say the transformation is dramatic. The tone is brighter and clearer because there's nothing sitting on the strings muffling the sound. The keys feel snappier and more responsive. And the polished case catches the light the way it did when the piano was new.",
      ],
      outcomes: [
        "Brighter, clearer tone because strings and soundboard are clean",
        "Snappy, responsive key action without sticking or sluggishness",
        "A polished, beautiful case that makes your piano a centerpiece again",
        "Peace of mind that there's nothing inside causing hidden damage",
        "A great way to prepare for holidays, recitals, or family events",
      ],
    },
    guarantee: {
      heading: "Our guarantees",
      items: [
        { title: "Sound-Right Guarantee", description: "If your piano doesn't sound noticeably better, Jaiden comes back within 14 days and makes it right, free of charge." },
        { title: "On-Time Guarantee", description: "If Jaiden doesn't arrive within the quoted window, $25 off, automatically." },
        { title: "Spotless or free", description: "If you're not completely satisfied with the cleaning, Jaiden will redo it on the spot or refund the cleaning portion entirely." },
      ],
    },
    scarcity: "Tuning and cleaning appointments take longer than standard tunings, so availability is limited. Book early if you're preparing for a holiday or event.",
    ctaHeadline: "Your piano deserves better than dust and silence.",
    ctaSubheadline: "One visit. Sound, feel, and appearance, all transformed. Call today to book your tuning and cleaning.",
  },
  {
    name: "Minor Repairs",
    slug: "piano-repairs-west-michigan",
    price: "Starting at $50",
    icon: Wrench,
    metaTitle: "Piano Repair Services in West Michigan | Ortiz Piano Tuning",
    metaDescription: "Expert minor piano repairs in Grand Rapids and West Michigan. Sticky keys, loose strings, squeaky pedals, and more. Most repairs completed in one on-site visit. Starting at $50.",
    images: {
      hero: { src: "/stock/piano-tuning-handle.png", alt: "Piano repair tools on an open piano" },
      guide: { src: "/jaiden-headshot.jpeg", alt: "Jaiden Ortiz, professional piano technician" },
      success: { src: "/stock/man-with-daughter-piano-lesson.png", alt: "Father and daughter enjoying playing piano together" },
    },
    hero: {
      headline: "That sticky key isn't going to fix itself. And it's making you play worse.",
      subheadline: "Minor piano repairs handled on-site, usually in a single visit. No transporting your instrument to a shop. No waiting weeks for it to come back.",
    },
    problem: {
      heading: "Small problems don't stay small.",
      paragraphs: [
        "It starts with one sticky key. Or a buzzing sound you can't quite place. A pedal that squeaks every time you press it. You work around it for a while. You avoid that key, or you just stop using the pedal. But the problem doesn't go away. It gets worse. And it changes the way you play.",
        "For students, this is especially damaging. Uneven key action trains bad habits. A child learning to play on a piano with mechanical issues is building technique on a broken foundation. Every practice session reinforces the wrong muscle memory.",
      ],
      painPoints: [
        "A key sticks or doesn't return properly, disrupting your playing flow",
        "Buzzing or rattling sounds that appear at certain notes and won't go away",
        "Wobbly keys that feel loose and unresponsive",
        "Pedals that squeak, stick, or don't engage properly",
        "You've been working around the problem instead of fixing it",
      ],
    },
    guide: {
      heading: "Jaiden fixes it on the spot, not in a week at some shop.",
      paragraphs: [
        "Most minor piano repairs don't require your piano to be disassembled or transported. Jaiden diagnoses and fixes the issue right in your home, usually during a single visit. He carries the tools and common parts needed for the most frequent repairs, so there's no waiting for parts to arrive or scheduling a second appointment.",
        "And because he's a pianist himself, he doesn't just fix the mechanical problem. He tests the repair by playing, making sure it feels right under the fingers, not just that it technically works.",
      ],
    },
    plan: {
      heading: "How it works",
      steps: [
        {
          title: "Tell us what's happening",
          description: "Call or schedule online and describe the issue. Jaiden will ask questions to come prepared with the right tools and parts.",
        },
        {
          title: "On-site diagnosis and repair",
          description: "Jaiden evaluates the problem in person, explains what's going on, and fixes it on the spot. If it requires parts or more extensive work, you get a clear estimate before he proceeds.",
        },
        {
          title: "Play without compromise",
          description: "No more working around broken keys or ignoring strange sounds. Every key responds, every pedal works, and playing feels right again.",
        },
      ],
    },
    included: {
      heading: "Common repairs we handle",
      items: [
        "Sticky or sluggish keys that don't return properly",
        "Loose or broken strings that buzz or rattle",
        "Wobbly or uneven keys",
        "Squeaky or unresponsive pedals",
        "Broken or chipped key tops",
        "Hammer alignment and voicing issues",
        "Damper adjustments for notes that ring too long or cut off too quickly",
        "Lid and hinge repairs",
      ],
    },
    stakes: {
      heading: "Ignoring a small repair now creates a big bill later.",
      paragraphs: [
        "A sticky key that costs $50 to fix today can become a broken hammer or damaged action part that costs $300+ to repair next year. Piano mechanisms are interconnected. When one part malfunctions, it puts stress on the parts around it. Small problems cascade into bigger, more expensive ones.",
      ],
      consequences: [
        "A single sticky key can damage the hammer, whippen, or jack behind it",
        "Buzzing strings left untightened can break, requiring full string replacement",
        "Uneven key action trains bad habits in students that are hard to unlearn",
        "You play less and less because the piano frustrates you",
        "Small repairs that cost $50-$75 now become $300+ restorations later",
      ],
    },
    success: {
      heading: "Every key works. Every note rings. Playing feels effortless again.",
      paragraphs: [
        "There's a specific feeling when a piano just works. No surprises, no workarounds, no sounds that shouldn't be there. Just your fingers, the keys, and the music. That's what a repair visit restores.",
      ],
      outcomes: [
        "Every key responds evenly and returns smoothly",
        "No more buzzing, rattling, or squeaking distracting your playing",
        "Students build proper technique on a properly functioning instrument",
        "You stop avoiding certain notes or registers",
        "Playing becomes enjoyable again instead of an exercise in frustration",
      ],
    },
    guarantee: {
      heading: "Our guarantees",
      items: [
        { title: "Transparent pricing", description: "If a repair requires parts or extensive work, Jaiden provides a clear estimate before proceeding. No surprises, no pressure." },
        { title: "On-Time Guarantee", description: "If Jaiden doesn't arrive within the quoted window, $25 off, automatically." },
        { title: "Done right the first time", description: "Jaiden diagnoses the root cause, not just the symptom. If the same issue comes back within 30 days, he'll return and fix it at no charge." },
      ],
    },
    scarcity: "Jaiden carries common repair parts with him, but some repairs require ordering specific components. The sooner you call, the sooner it's fixed.",
    ctaHeadline: "Stop working around a broken piano.",
    ctaSubheadline: "One visit. The problem is gone. Call today and get back to playing the way you should be.",
  },
  {
    name: "Electronic Keyboard Repair",
    slug: "electronic-keyboard-repair-west-michigan",
    price: "Starting at $75",
    icon: Keyboard,
    metaTitle: "Electronic Keyboard Repair in West Michigan | Ortiz Piano Tuning",
    metaDescription: "Expert repair for digital pianos, MIDI keyboards, and stage keyboards in Grand Rapids and West Michigan. Dead keys, power issues, connectivity problems, and more. Starting at $75.",
    images: {
      hero: { src: "/stock/teenager-with-friend-playing-keyboard.jpg", alt: "Teenager playing an electronic keyboard" },
      guide: { src: "/jaiden-headshot.jpeg", alt: "Jaiden Ortiz, professional piano technician" },
      success: { src: "/stock/focused-asian-man-playing-piano.png", alt: "Musician focused while playing keyboard" },
    },
    hero: {
      headline: "Your digital piano isn't working. Finding someone who can actually fix it shouldn't be this hard.",
      subheadline: "Professional diagnostics and repair for digital pianos, MIDI controllers, and stage keyboards. All major brands. Serving musicians, churches, schools, and studios across West Michigan.",
    },
    problem: {
      heading: "Most piano technicians won't touch electronic keyboards. Jaiden will.",
      paragraphs: [
        "Your digital piano has dead keys, a connectivity issue, or it just won't turn on. You call around and hear the same thing: \"We only service acoustic pianos.\" Or worse, someone suggests you just buy a new one.",
        "Electronic keyboards aren't disposable. They're precision instruments with weighted keys, complex circuit boards, and sensitive components. They deserve a technician who understands both the mechanical and electronic side of how they work.",
      ],
      painPoints: [
        "Dead or unresponsive keys on your digital piano or stage keyboard",
        "Power supply issues, the keyboard won't turn on or loses power randomly",
        "MIDI, USB, or audio connectivity problems",
        "Display screen malfunctions or error messages",
        "You've been told to \"just replace it\" when the keyboard is worth repairing",
      ],
    },
    guide: {
      heading: "Jaiden works on both acoustic and electronic instruments.",
      paragraphs: [
        "While most piano technicians specialize exclusively in acoustic pianos, Jaiden has the training and experience to diagnose and repair electronic keyboard instruments as well. He services all major brands and models, from weighted-key digital pianos to stage keyboards and MIDI controllers.",
        "Whether it's a $500 practice keyboard or a $5,000 stage piano you depend on for performances, Jaiden takes the repair seriously. He runs a full diagnostic, explains the issue clearly, and gives you an honest assessment of whether the repair makes financial sense.",
      ],
    },
    plan: {
      heading: "How it works",
      steps: [
        {
          title: "Describe the problem",
          description: "Call or schedule online. Tell us the brand, model, and what's happening. Jaiden will let you know if he needs to see it on-site or if you should bring it in.",
        },
        {
          title: "Full diagnostic",
          description: "Jaiden runs a complete diagnostic to identify the root cause. You get a clear explanation of the issue and a repair estimate before any work begins.",
        },
        {
          title: "Repair and testing",
          description: "The repair is completed and thoroughly tested. You get your keyboard back working the way it should, fully functional and ready to play.",
        },
      ],
    },
    included: {
      heading: "What we repair",
      items: [
        "Dead or unresponsive keys and key mechanisms",
        "Power supply and charging issues",
        "Display screen malfunctions and error codes",
        "MIDI, USB, and Bluetooth connectivity problems",
        "Audio output issues (headphone jacks, internal speakers, line out)",
        "Sustain pedal and expression pedal input problems",
        "Software and firmware troubleshooting",
        "Circuit board diagnostics and component-level repair",
      ],
    },
    stakes: {
      heading: "A keyboard sitting in the closet isn't an instrument. It's a paperweight.",
      paragraphs: [
        "Every week your keyboard sits broken is a week you're not playing. For churches and schools, it means finding workarounds for worship services and music programs. For gigging musicians, it means canceling performances or borrowing gear. The longer it sits, the easier it becomes to just... stop playing.",
      ],
      consequences: [
        "Practice routines are disrupted and hard to restart",
        "Churches and schools scramble for alternatives during services and classes",
        "Performing musicians lose gigs or rely on borrowed equipment",
        "A repairable instrument gets replaced unnecessarily, wasting hundreds of dollars",
        "Motivation fades when there's no working instrument at home",
      ],
    },
    success: {
      heading: "Your keyboard works again. Fully. Not \"mostly.\"",
      paragraphs: [
        "Every key responds. The display works. MIDI connects without issues. Power is reliable. You plug in, turn on, and play, the way it's supposed to work. No workarounds, no frustration, no excuses not to practice.",
      ],
      outcomes: [
        "Every key responds with full velocity sensitivity",
        "Connectivity is reliable for recording, performance, and practice",
        "Power issues are resolved so the keyboard works when you need it",
        "Churches and schools have their instrument back for services and programs",
        "You saved hundreds by repairing instead of replacing",
      ],
    },
    guarantee: {
      heading: "Our guarantees",
      items: [
        { title: "Honest assessment", description: "If a repair doesn't make financial sense, Jaiden will tell you. He won't charge you $200 to fix a $150 keyboard." },
        { title: "Clear estimates", description: "You get a full diagnosis and cost estimate before any repair work begins. No surprises." },
        { title: "30-day warranty", description: "If the same issue comes back within 30 days of the repair, Jaiden fixes it again at no additional charge." },
      ],
    },
    scarcity: "Electronic keyboard repairs require dedicated bench time. Availability varies by the complexity of the issue. Call early to get on the schedule.",
    ctaHeadline: "Don't let a fixable problem keep you from playing.",
    ctaSubheadline: "Most electronic keyboard issues are repairable. Call today for a diagnostic and find out what it'll take to get yours working again.",
  },
  {
    name: "Piano Appraisals",
    slug: "piano-appraisals-west-michigan",
    price: "From $99",
    icon: ClipboardList,
    metaTitle: "Piano Appraisal Services in West Michigan | Ortiz Piano Tuning",
    metaDescription: "Professional piano appraisals in Grand Rapids and West Michigan. Accurate valuations for insurance, sale, estate, or donation purposes. On-site inspection and written report. From $99.",
    images: {
      hero: { src: "/stock/piano-clean-livingroom.png", alt: "Beautiful piano in a well-appointed living room" },
      guide: { src: "/jaiden-headshot.jpeg", alt: "Jaiden Ortiz, professional piano technician" },
      success: { src: "/stock/older-woman-smiling-playing-piano.png", alt: "Woman smiling while playing her appraised piano" },
    },
    hero: {
      headline: "You have no idea what your piano is worth. Most people don't.",
      subheadline: "A professional appraisal gives you an accurate, defensible valuation backed by hands-on inspection, not a Google search.",
    },
    problem: {
      heading: "Online estimates are guesses. You need an answer you can trust.",
      paragraphs: [
        "You've probably searched your piano's brand and model online and found a range so wide it's useless. \"Between $500 and $8,000\" doesn't help when you need to set a sale price, update your insurance, or settle an estate.",
        "The truth is, two pianos of the same make, model, and year can differ in value by thousands of dollars. The difference comes down to condition, maintenance history, and environmental exposure. Things you can only assess by inspecting the instrument in person.",
      ],
      painPoints: [
        "You're selling a piano and have no idea what to ask for it",
        "Your homeowner's insurance doesn't cover the piano's actual value",
        "You're settling an estate and need a documented valuation",
        "You want to donate the piano and need an appraisal for tax purposes",
        "You're curious about a family heirloom but don't trust online price guides",
      ],
    },
    guide: {
      heading: "Jaiden inspects the instrument in person. That's why his valuations hold up.",
      paragraphs: [
        "An online serial number lookup can tell you when a piano was built. It can't tell you whether the soundboard has cracks, whether the tuning pins are tight, or whether the hammers have been properly maintained. Jaiden evaluates all of it, on-site, by hand.",
        "With over 8 years of experience working on pianos of every age, brand, and condition across West Michigan, Jaiden has the hands-on knowledge to give you a valuation that reflects reality, not an internet average.",
      ],
    },
    plan: {
      heading: "How it works",
      steps: [
        {
          title: "Schedule your appraisal",
          description: "Call or book online. Let us know the purpose of the appraisal (sale, insurance, estate, donation) so Jaiden can tailor the report.",
        },
        {
          title: "On-site inspection",
          description: "Jaiden inspects the piano's brand, model, serial number, structural condition, cosmetic condition, and mechanical health. He evaluates everything from soundboard integrity to tuning pin tightness.",
        },
        {
          title: "Written appraisal report",
          description: "You receive a professional written report with a fair market value estimate, suitable for insurance documentation, sale negotiations, estate proceedings, or tax deduction purposes.",
        },
      ],
    },
    included: {
      heading: "What's included",
      items: [
        "On-site inspection of brand, model, serial number, and age verification",
        "Assessment of structural integrity (soundboard, bridges, pin block, plate)",
        "Evaluation of mechanical condition (action, hammers, keys, pedals)",
        "Cosmetic condition assessment (case, finish, keys, hardware)",
        "Fair market value estimate based on current market conditions",
        "Written appraisal report suitable for insurance, sale, estate, or tax purposes",
      ],
    },
    stakes: {
      heading: "Without an appraisal, you're guessing. And guesses cost money.",
      paragraphs: [
        "Sell too low and you leave money on the table. Sell too high and it sits for months. Insure for the wrong amount and you're either overpaying premiums or underinsured if something happens. File a tax deduction without proper documentation and you invite scrutiny.",
      ],
      consequences: [
        "Selling below market value because you didn't know what the piano was worth",
        "Paying insurance premiums on an inaccurate valuation",
        "Estate disputes over undocumented asset values",
        "Rejected tax deductions because the donation lacked a professional appraisal",
        "Buying a used piano at an inflated price because neither party knew the real value",
      ],
    },
    success: {
      heading: "You know what it's worth. Now you can make the right decision.",
      paragraphs: [
        "Whether you're selling, insuring, donating, or just satisfying your curiosity, an accurate appraisal gives you confidence. You're not guessing anymore. You have a number backed by a professional inspection and documented in a report you can hand to anyone who asks.",
      ],
      outcomes: [
        "Set a fair, defensible sale price based on actual condition, not guesswork",
        "Insure your piano for the right amount with documentation your provider accepts",
        "Settle estate valuations cleanly with a professional written report",
        "Maximize your tax deduction for piano donations with proper documentation",
        "Finally know the real story behind a family heirloom",
      ],
    },
    guarantee: {
      heading: "Our guarantees",
      items: [
        { title: "Professional documentation", description: "Your written appraisal report is suitable for insurance companies, estate attorneys, tax filings, and sale negotiations." },
        { title: "Honest assessment", description: "Jaiden tells you what your piano is actually worth, not what you want to hear. An accurate appraisal protects you whether you're buying, selling, or documenting." },
        { title: "On-site accuracy", description: "Every appraisal includes a hands-on inspection of your piano's condition. No phone estimates or online guesses, just a real evaluation of the instrument in front of you." },
      ],
    },
    scarcity: "Appraisal appointments are available alongside tuning visits. If you're on a deadline for an estate, insurance, or sale, call early to secure your spot.",
    ctaHeadline: "Find out what your piano is really worth.",
    ctaSubheadline: "One visit, one inspection, and you'll have a professional valuation you can use for any purpose. Call today to schedule your appraisal.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
