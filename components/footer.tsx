import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0C3050] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Prof. Toyin Tofade</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A visionary leader at the intersection of healthcare and higher education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[#FAC775]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/her-story" className="text-white/70 hover:text-[#FAC775] text-sm transition-colors">
                  Her Story
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-white/70 hover:text-[#FAC775] text-sm transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-white/70 hover:text-[#FAC775] text-sm transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/global-women-leaders" className="text-white/70 hover:text-[#FAC775] text-sm transition-colors">
                  Global Women Leaders
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="text-white/70 hover:text-[#FAC775] text-sm transition-colors">
                  Work With Me
                </Link>
              </li>
              <li>
                <Link href="/speaker-request" className="text-white/70 hover:text-[#FAC775] text-sm transition-colors">
                  Speaker Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[#FAC775]">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/toyin-tofade-a604181a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C6993A] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:presidenttofade@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C6993A] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center  items-center gap-4">
          <p className="text-white/50 text-sm center">
            &copy; {new Date().getFullYear()} Prof. Toyin Tofade. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
