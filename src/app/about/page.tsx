import Image from 'next/image';

export default function About() {
    return (
        <section className="max-w-3xl mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
            <div className="flex flex-wrap md:flex-nowrap items-center md:items-start gap-6">
                {/* Image Section */}
                <div className="flex-shrink-0">
                    <Image 
                        src="/jaiden.png"
                        alt="Jaiden - Professional Piano Tuner" 
                        width={220} 
                        height={220}
                        unoptimized 
                        className="rounded-full" 
                    />
                </div>
                {/* Text Section */}
                <div className="flex-1">
                    <p className="text-lg">
                        My name is Jaiden, and I am a professional piano tuner with 5+ years of experience 
                        helping musicians and music lovers maintain the sound quality of their pianos. I am passionate 
                        about delivering high-quality service to ensure your piano sounds its best.
                    </p>
                </div>
            </div>
        </section>
    );
}
