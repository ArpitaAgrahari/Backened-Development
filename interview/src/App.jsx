import React from 'react'
import Popover from './component/Popover'
import Slider from './component/Slider'
import Accordion from './component/Accordion';
import Tabs from './component/tabs';
import ThemeToggle from './component/Theme';

export default function App() {
  // --- Data for the components ---
  const Slides = [
    "https://placehold.co/800x400/3498db/ffffff?text=Slide+1",
    "https://placehold.co/800x400/e74c3c/ffffff?text=Slide+2",
    "https://placehold.co/800x400/2ecc71/ffffff?text=Slide+3",
    "https://placehold.co/800x400/f1c40f/ffffff?text=Slide+4",
  ];

  const faqItems = [
    { question: "What is React?", answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on components." },
    { question: "What is TypeScript?", answer: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML." },
  ];
  
  const tabData = [
    { label: 'Profile', content: <div>This is the user's profile content. You can put forms, details, and more here.</div> },
    { label: 'Dashboard', content: <div>Welcome to your dashboard. Here are your latest stats and activities.</div> },
    { label: 'Settings', content: <div>Manage your account settings, notifications, and preferences from this tab.</div> },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-300">
      {/* This modal will appear automatically */}
      <Popover 
        title="Welcome to Our Interactive UI Guide!"
        message="This modal appeared automatically after 10 seconds. Explore the components below."
      />

      <div className="container mx-auto p-4 sm:p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">React UI Components</h1>
          <ThemeToggle />
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Carousel / Slider</h2>
          <Slider slides={Slides} />
        </section>
        
        <div className="grid md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Accordion (FAQ)</h2>
              <Accordion items={faqItems} />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Tabs</h2>
              <Tabs tabs={tabData} />
            </section>
        </div>

      </div>
    </div>
  );
}