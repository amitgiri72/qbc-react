import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import "./Faq.css"

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('dance-professionals');
  const [openItems, setOpenItems] = useState({});

  const categories = {
    'dance-professionals': {
      title: "FAQs for Dance Professionals",
      questions: [
        {
          q: "How do I create a profile on the platform?",
          a: "Simply sign up by choosing the services and dance styles you offer. Submit the necessary documents and wait for background and reference check to be approved."
        },
        {
          q: "What are the requirements to join the platform?",
          a: "Outline your qualifications, experience, certification, upload your resume, bio, headshot and 2 reference letters."
        },
        {
          q: "What is the commission structure?",
          a: "We operate like a talent agency where we take 10% of all work booked through us as well as any future work at studios and competitions booked through us."
        },
        {
          q: "How are payments processed?",
          a: "Invoice Indiana Mehta Inc. for all your bookings through Quick Ball Change. Payments will be processed via direct deposit or e transfer on every 15th and 30th of the month."
        },
        {
          q: "How can I manage my availability?",
          a: "Turn on email notifications for job postings, opt in when available and interested, wait for approval."
        },
        {
          q: "What should I do if I need to cancel a booking?",
          a: "Once confirmed, we ask that you stay committed. In case of any emergency, email quickballchange@gmail.com and we will try our best to accommodate your request. Bookings cannot be cancelled before 24 hours. 3 strikes will lead to pausing your account for a period of 30 days."
        },
        {
          q: "Will you be issued a T4?",
          a: "Under the guidelines of Ontario taxation system, you are responsible to file your taxes as an independent contractor."
        }
      ]
    },
    'studios': {
      title: "For Studios, Dance Competitions and other Clients",
      questions: [
        {
          q: "How do I search and book a dance professional?",
          a: "Once you create an account, you can post a job with all the necessary information (Studio name, address, date, time, class details, rates etc.) The job posting, once approved by admin will be available for our roster to opt in followed by you to choose from and confirm the booking."
        },
        {
          q: "How are payments handled?",
          a: "We ask you add our bank details for direct deposit. An invoice will be generated before the start of a booking and the studio or client is required to make the deposit within 48 hours of receiving the invoice."
        },
        {
          q: "Are there any fees to use our services?",
          a: "Quick Ball Change is free to use for studios and other clients."
        },
        {
          q: "Can I communicate directly with the professional before confirming a booking?",
          a: "We require you to communicate directly with Quick Ball Change. For sharing any music, class notes, future bookings etc. the communication has to go through Quick Ball Change."
        },
        {
          q: "What measures are in place to ensure the quality and reliability of professionals?",
          a: "Quick Ball Change has a thorough vetting process. Artists are required to submit their professional resume, police check (VSS) and 2 reference letters. Our team will get a feedback from the references before approving the artist on the platform."
        }
      ]
    },
    'general': {
      title: "General FAQs",
      questions: [
        {
          q: "Is there customer support available if I encounter issues?",
          a: "There is chat box available on our website and web app. During non office hours, you can send any queries to quickballchange@gmail.com or call 647-822-9893 for emergencies."
        },
        {
          q: "Is there a mobile app available for the platform?",
          a: "The platform is accessible via web app."
        },
        {
          q: "Are there any subscription fees or costs to use the platform?",
          a: "There are no upfront cost or any hidden fees."
        }
      ]
    }
  };

  const toggleItem = (categoryId, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${categoryId}-${index}`]: !prev[`${categoryId}-${index}`]
    }));
  };

  return (
    <div className="faq-con min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.keys(categories).map((categoryId) => (
            <button
              key={categoryId}
              onClick={() => setActiveCategory(categoryId)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === categoryId 
                  ? 'bg-[#AA1A12] text-white' 
                  : 'bg-white-800 border border-gray-800 text-black-300 hover:bg-gray-700-text-white'}`}
            >
              {categories[categoryId].title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {categories[activeCategory].questions.map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(activeCategory, index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#AA1A12] transition-colors"
              >
                <span className="font-medium text-lg">{item.q}</span>
                {openItems[`${activeCategory}-${index}`] ? (
                  <ChevronUp className="w-5 h-5 text-[#AA1A12]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#AA1A12]" />
                )}
              </button>
              
              {openItems[`${activeCategory}-${index}`] && (
                <div className="px-6 py-4 bg-white-900 border-t border-gray-800">
                  <p className="text-black-300">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;