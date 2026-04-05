import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Mic, Newspaper, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Media | Dr. Toyin Tofade",
  description: "Media appearances, podcasts, and press coverage featuring Dr. Toyin Tofade.",
}

const mediaAppearances = [
   {
    outlet: "AAPS News Magazine",
    title: "My Mentorship Journey: An Interview with Toyin Tofade, President, Albany College of Pharmacy and Health Sciences",
    link: "https://www.aapsnewsmagazine.org/aapsnewsmagazine/articles/new-page2/mar24/career-success-mar24b",
  },
  {
    outlet: "Howard University's News & Stories Hub",
    title: "Departing College of Pharmacy Dean Toyin Tofade Establishes Endowed Fund for Leadership Development",
    link: "https://thedig.howard.edu/all-stories/departing-college-pharmacy-dean-toyin-tofade-establishes-endowed-fund-leadership-development",
  },
  {
    outlet: "Albany Business Review",
    title: "Toyin Tofade's calling: To be a leader of leaders",
    link: "https://www.bizjournals.com/albany/news/2022/11/30/toyin-tofade-albany-college-of-pharmacy.html",
  },
  {
    outlet: "Capital Region Chamber",
    title: "New President Selected at Albany College of Pharmacy and Health Sciences",
    link: "https://capitalregionchamber.com/news/new-president-selected-at-albany-college-of-pharmacy-and-health-sciences/",
  },
  {
    outlet: "Albany College of Pharmacy and Health Sciences News",
    title: "Partnerships Extend College’s Reach",
    link: "https://www.acphs.edu/news/partnerships-extend-colleges-reach/?fbclid=IwY2xjawQ3tZ5leHRuA2FlbQIxMABicmlkETFWREp2M2tmRUsxc2YzcmYwc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkZR8b2zcK6mT7AF2MlLNAVq8bC04-h3J9_VVpn6R6btG3iWeJT9hulirQYg_aem_JGcqi6Evs3DbzPlWPQLGuA",
  },
  {
  outlet: "Connect Nigeria",
  title: "Nigerian Scholar, Toyin Tofade, Emerges First Black Female President In American College",
  link: "https://articles.connectnigeria.com/nigerian-scholar-toyin-tofade-emerges-first-black-female-president-in-american-college/",
  },

]

const podcasts = [
  {
    name: "Unscripted",
    episode: "Servant Leadership and the Importance of Sponsorship",
    platform: "Apple Podcasts",
    link: "https://podcasts.apple.com/us/podcast/50-toyin-tofade-ms-pharmd-bcps-cpcc-ffip-servant-leadership/id1578805977?i=1000607586023",
  },
  {
    name: "Visionary MD",
    episode: "Mentorship across disciplines with President Toyin Tofade",
    platform: "Apple Podcasts",
    link: "https://podcasts.apple.com/us/podcast/mentorship-across-disciplines-with-president-toyin/id1700557468?i=1000656643905",
  },
  {
    name: "Center for Women, Gender and Global Leadership",
    episode: "Women in Leadership: Dean Toyin Tofade",
    link: "https://www.youtube.com/watch?v=DTlmqEF8isY",
  },
    {
    name: "International Pharmaceutical Federation",
    episode: "Shaping the future of pharmacy education",
    link: "https://www.youtube.com/watch?v=msJWBGyyf28",
  },
]

const sermons = [
  { id: "6aMvNuFESwg", title: "Ministry Message" },
  { id: "mWa5A5U-eH4", title: "Faith & Leadership" },
  { id: "CcoRprZ4UB4", title: "Spiritual Guidance" },
]

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#3D1854] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Media
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              In the Spotlight
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Press coverage, podcast appearances, and ministry messages featuring Dr. Tofade&apos;s insights on leadership, healthcare, and faith.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* In The Press */}
      <section className="py-20 bg-[#0C3050]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Coverage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
              In the Press
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaAppearances.map((item, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#E6F1FB]/10 rounded-xl p-6 backdrop-blur hover:bg-[#E6F1FB]/20 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C6993A]/20 flex items-center justify-center flex-shrink-0">
                      <Newspaper className="w-5 h-5 text-[#FAC775]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#FAC775] font-semibold text-sm mb-2">
                        {item.outlet}
                      </p>
                      <p className="text-white font-serif text-lg">
                        {item.title}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C6993A]  transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#0C3050] font-semibold text-sm uppercase tracking-wider">
              Audio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Podcasts & Audio
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {podcasts.map((podcast, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <Link
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#EDE5D4] rounded-xl p-6 hover:bg-[#E6DCC8] transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0C3050] flex items-center justify-center flex-shrink-0">
                      <Mic className="w-5 h-5 text-[#FAC775]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#C6993A] font-semibold text-sm mb-2">
                        {podcast.name}
                      </p>
                      <p className="text-[#2C1A0E] font-serif text-lg">
                        {podcast.episode}
                      </p>
                      {podcast.platform && (
                        <p className="text-[#5C4A2A] text-sm mt-1">{podcast.platform}</p>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C6993A] transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons */}
      <section className="py-20 bg-[#3D1854]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Ministry
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
              Messages & Sermons
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              In addition to her academic platform, Dr. Tofade is a sought after voice in faith communities. Preaching, teaching, and leading from a place of deep scriptural grounding and lived experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {sermons.map((sermon, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Link
                  href={`https://www.youtube.com/watch?v=${sermon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
                    <img
                      src={`https://img.youtube.com/vi/${sermon.id}/maxresdefault.jpg`}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#3D1854] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-white font-medium mt-3 group-hover:text-[#FAC775] transition-colors">
                    {sermon.title}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
