"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

export function WorkWithMeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mbdpabgp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
        <div className="w-16 h-16 rounded-full bg-[#C6993A] flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-[#2C1A0E]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-4">
          Thank You!
        </h3>
        <p className="text-[#5C4A2A]">
          Your enquiry has been submitted. Prof. Tofade&apos;s team will respond within five business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="Your full name"
          />
        </div>

        {/* Title and Organisation */}
        <div>
          <label htmlFor="titleOrganisation" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Title and Organisation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="titleOrganisation"
            name="titleOrganisation"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="Your title and organisation"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="your@email.com"
          />
        </div>

        {/* Type of Engagement */}
        <div>
          <label htmlFor="engagementType" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Type of Engagement <span className="text-red-500">*</span>
          </label>
          <select
            id="engagementType"
            name="engagementType"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23C6993A%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]"
          >
            <option value="">Select type of engagement</option>
            <option value="executive-coaching">Executive Leadership Coaching</option>
            <option value="emerging-leader">Emerging Leader Accelerator</option>
            <option value="organisational-development">Organisational & Team Development</option>
            <option value="board-advisory">Board Advisory & Governance</option>
            <option value="speaking">Speaking & Leadership Facilitation</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Brief Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow resize-none"
            placeholder="What you are working on and what you hope to achieve..."
          />
        </div>

        {/* Preferred Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Preferred Timeline or Event Date
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="If applicable"
          />
        </div>

        {/* How did you find Prof. Tofade */}
        <div>
          <label htmlFor="referralSource" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            How did you find Prof. Tofade?
          </label>
          <input
            type="text"
            id="referralSource"
            name="referralSource"
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="Referral, website, conference, etc."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-[#C6993A] hover:bg-[#FAC775] disabled:bg-[#C6993A]/50 text-[#2C1A0E] font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Enquiry
            </>
          )}
        </button>
      </div>
    </form>
  )
}
