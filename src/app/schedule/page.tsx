'use client';
import { useState, useMemo } from 'react';
import { Music4 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  preferredDays: string[];
  preferredTime: string;
}

function ScheduleForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    preferredDays: [],
    preferredTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const isFormValid = useMemo(() => {
    return (
      formState.name.trim() !== '' &&
      formState.email.trim() !== '' &&
      formState.phone.trim() !== '' &&
      formState.preferredDays.length > 0 &&
      formState.preferredTime !== ''
    );
  }, [formState]);

  const handleDayChange = (day: string) => {
    setFormState((prev) => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter((d) => d !== day)
        : [...prev.preferredDays, day],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      serviceType: 'piano-tuning',
      preferredDate: `${formState.preferredDays.join(', ')} - ${formState.preferredTime}`,
      message: `Preferred days: ${formState.preferredDays.join(', ')}. Preferred time: ${formState.preferredTime}.`
    };

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setSubmitStatus({
          type: 'error',
          message: data.error,
        });
      } else {
        setSubmitStatus({
          type: 'success',
          message: 'Your request has been submitted! We will contact you soon.',
        });
        setFormState({
          name: '',
          email: '',
          phone: '',
          preferredDays: [],
          preferredTime: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - decorative content */}
          <div className="hidden md:flex flex-col items-center justify-center p-8 rounded-lg bg-foreground bg-opacity-5">
            <Music4 className="w-32 h-32 text-accent mb-6" />
            <h2 className="text-xl font-semibold text-foreground text-center mb-4">
              Schedule Your Piano Tune
            </h2>
            <p className="text-subtle text-center">
              Once you submit, I&apos;ll reach out to you to get your tune scheduled!
            </p>
          </div>

          {/* Right side - form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-foreground">Schedule a Tune</h1>
            
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-foreground font-medium mb-1 block">Name:</span>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => 
                      setFormState((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-lg border border-secondary border-opacity-20 focus:ring-2 focus:ring-accent focus:ring-opacity-50 focus:border-transparent transition bg-background"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-foreground font-medium mb-1 block">Email:</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => 
                      setFormState((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border border-secondary border-opacity-20 focus:ring-2 focus:ring-accent focus:ring-opacity-50 focus:border-transparent transition bg-background"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-foreground font-medium mb-1 block">Phone Number:</span>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => 
                      setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 rounded-lg border border-secondary border-opacity-20 focus:ring-2 focus:ring-accent focus:ring-opacity-50 focus:border-transparent transition bg-background"
                    required
                  />
                </label>

                <div className="space-y-2">
                  <span className="text-foreground font-medium block">Preferred Days:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Monday', 'Wednesday', 'Friday'].map((day) => (
                      <label
                        key={day}
                        className="flex items-center space-x-2 p-2 bg-background rounded-lg hover:bg-opacity-75 transition cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formState.preferredDays.includes(day)}
                          onChange={() => handleDayChange(day)}
                          className="w-4 h-4 text-accent"
                        />
                        <span className="text-foreground">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-foreground font-medium block">Preferred Time:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Morning', 'Afternoon'].map((time) => (
                      <label
                        key={time}
                        className="flex items-center space-x-2 p-2 bg-background rounded-lg hover:bg-opacity-75 transition cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="preferredTime"
                          value={time}
                          checked={formState.preferredTime === time}
                          onChange={(e) => 
                            setFormState((prev) => ({ ...prev, preferredTime: e.target.value }))}
                          className="w-4 h-4 text-accent"
                        />
                        <span className="text-foreground">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition transform ${
                  isFormValid && !isSubmitting
                    ? 'bg-accent text-background hover:bg-opacity-90 hover:scale-105 focus:ring-4 focus:ring-accent focus:ring-opacity-20'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleForm;