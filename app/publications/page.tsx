import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Publications | Dr. Toyin Tofade",
  description: "Academic publications by Professor Toyin Tofade on pharmacy practice and leadership",
}

const publications = [
  {
    title: "Making a Curricular Commitment to Continuing Professional Development in Doctor of Pharmacy Programs",
    journal: "American Journal of Pharmaceutical Education",
    year: "2015",
    link:"https://www.researchgate.net/publication/286450899_Making_a_Curricular_Commitment_to_Continuing_Professional_Development_in_Doctor_of_Pharmacy_Programs",
  },
  {
    title: "Strategies to grow an experiential learning program—The role of administrators",
    journal: "Currents in Pharmacy Teaching and Learning",
    year: "2016",
    link:"https://www.researchgate.net/publication/299125766_Strategies_to_grow_an_experiential_learning_program-The_role_of_administrators",
  },
  {
    title: "Use of SMART Learning Objectives to Introduce Continuing Professional Development Into the Pharmacy Curriculum",
    journal: "American Journal of Pharmaceutical Education",
    year: "2012",
    link:"https://www.researchgate.net/publication/225050639_Use_of_SMART_Learning_Objectives_to_Introduce_Continuing_Professional_Development_Into_the_Pharmacy_Curriculum",
  },
  {
    title: "Clinical Track Program Expansion Increases Rotation Capacity for Experiential Program",
    journal: "American Journal of Pharmaceutical Education",
    year: "2017",
    link:"https://www.researchgate.net/publication/321142235_Clinical_Track_Program_Expansion_Increases_Rotation_Capacity_for_Experiential_Program",
  },
  {
    title: "Current Practices in Hosting Non-US Pharmacy Students at US Pharmacy Schools in Experiential Clerkships",
    journal: "American Journal of Pharmaceutical Education",
    year: "2017",
    link:"https://www.researchgate.net/publication/321893740_Current_Practices_in_Hosting_Non-US_Pharmacy_Students_at_US_Pharmacy_Schools_in_Experiential_Clerkships",
  },
  {
    title: "Results from a global pharmacy leadership needs assessment: Opportunities to advance pharmacy leadership",
    journal: "Pharmacy Education",
    year: "2024",
    link:"https://www.researchgate.net/publication/378377012_Results_from_a_global_pharmacy_leadership_needs_assessment_Opportunities_to_advance_pharmacy_leadership",
  },
  {
    title: "Transforming pharmaceutical education: A needs-based global analysis for policy development",
    journal: "Exploratory Research in Clinical and Social Pharmacy",
    year: "2023",
    link:"https://www.researchgate.net/publication/368517117_Transforming_pharmaceutical_education_A_needs-based_global_analysis_for_policy_development",
  },
  {
    title: "Leading with heart in service of global initiatives",
    journal: "Official journal of the American Society of Health-System Pharmacists",
    year: "2023",
    link:"https://www.researchgate.net/publication/367329740_Leading_with_heart_in_service_of_global_initiatives",
  },
  {
    title: "Past, present, and future of the International Pharmaceutical Federation (FIP) Academic Pharmacy Section: Interviews with past presidents",
    journal: "Pharmacy Education",
    year: "2022",
    link:"https://www.researchgate.net/publication/365295922_Past_present_and_future_of_the_International_Pharmaceutical_Federation_FIP_Academic_Pharmacy_Section_Interviews_with_past_presidents",
  },
]


export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0C3050] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Publications
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Scholarship in Print
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Academic Publications */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#0C3050] font-semibold text-sm uppercase tracking-wider">
              Research
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Academic Publications
            </h2>
            <p className="text-[#5C4A2A] mt-4 max-w-2xl mx-auto">
              Author of research publications in pharmacy practice, pharmaceutical education, and health sciences leadership. Topics include clinical pharmacokinetics, health disparities, pharmacy education innovation, and global health.
            </p>
          </AnimatedSection>

          <div className="space-y-4 mb-12">
            {publications.map((pub, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <Link
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-[#E6F1FB] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-[#0C3050]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-bold text-[#2C1A0E] group-hover:text-[#0C3050] transition-colors mb-2">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-[#5C4A2A]">
                        <span className="font-semibold text-[#C6993A]">{pub.year}</span>
                        <span className="text-[#5C4A2A]/50">|</span>
                        <span>{pub.journal}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#C6993A]" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="https://www.researchgate.net/profile/Toyin-Tofade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C3050] hover:bg-[#0C3050]/90 text-white font-semibold rounded-md transition-colors"
            >
              <FileText className="w-5 h-5" />
              View Full Publication List on ResearchGate
              <ExternalLink className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
