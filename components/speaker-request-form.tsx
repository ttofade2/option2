"use client"

import { useState, useMemo } from "react"
import { Send, Loader2 } from "lucide-react"

export function SpeakerRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const minDate = useMemo(() => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }, [])

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
          Your speaking request has been submitted.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="Your full name"
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Organization <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="Your organization"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Email <span className="text-red-500">*</span>
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

        {/* Event Name */}
        <div>
          <label htmlFor="eventName" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Event Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="Name of your event"
          />
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Event Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            min={minDate}
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
          />
        </div>

        {/* Event Location */}
        <div>
          <label htmlFor="eventLocation" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Event Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
            placeholder="City or Virtual"
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
            <option value="">Select type</option>
            <option value="keynote">Keynote Address</option>
            <option value="panel">Panel Discussion</option>
            <option value="workshop">Workshop</option>
            <option value="commencement">Commencement Speech</option>
            <option value="fireside">Fireside Chat</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Topic Interest */}
        <div>
          <label htmlFor="topicInterest" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Topic Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="topicInterest"
            name="topicInterest"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23C6993A%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]"
          >
            <option value="">Select topic</option>
            <option value="higher-ed-leadership">Transformational leadership in higher education</option>
            <option value="health-equity">Health equity and the future of healthcare</option>
            <option value="women-leadership">Women in leadership</option>
            <option value="pharmacy-leadership">Pharmacy leadership</option>
            <option value="mentorship">Mentorship and career development</option>
            <option value="other">Other</option>
          </select>
        </div>

          {/* Honorarium Range */}
            <div>
              <label htmlFor="honorarium" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
                Honorarium Range or Budget
              </label>
              <input
                type="text"
                id="honorarium"
                name="honorarium"
                className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow"
                placeholder="Your budget range"
              />
            </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-[#2C1A0E] mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-[#EDE5D4] bg-[#F5F0E8] text-[#2C1A0E] focus:outline-none focus:ring-2 focus:ring-[#C6993A] transition-shadow resize-none"
            placeholder="Any additional information about your event or specific requests..."
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
              Submit Request
            </>
          )}
        </button>
      </div>
    </form>
  )
}
