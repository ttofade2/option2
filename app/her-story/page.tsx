import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Her Story | Dr. Toyin Tofade",
  description: "The journey of Dr. Toyin Tofade from Ile-Ife, Nigeria to becoming the first Black woman president of Albany College of Pharmacy and Health Sciences.",
}

export default function HerStoryPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-up">
              <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                Her Story
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                A Journey from Ile-Ife to Albany
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Every extraordinary leader has a first chapter that most people never see.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200} className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8640-1pWfdvfuqPWRMGFMDrRFXhrGee0yZL.jpg"
                  alt="Dr. Toyin Tofade in academic regalia"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-12 bg-[#3D1854]">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
          <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed">
            I stand here today, not as a symbol of individual achievement, but as a testament to the progress and determination of all those who came before me.
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Early Life */}
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
              The Beginning in Nigeria
            </h2>
            <div className="prose prose-lg max-w-none text-[#5C4A2A]">
              <p className="leading-relaxed mb-4">
                For Dr. Toyin Tofade, that chapter began in Ile-Ife, Nigeria, in the shadow of one of West Africa&apos;s most distinguished universities, and one of its most distinguished pharmacists.
              </p>
              <p className="leading-relaxed mb-4">
                Her father, the late Professor Abayomi Sofowora, was a pioneering pharmacognosist who spent over four decades at Obafemi Awolowo University, including serving as Chairman of the WHO Regional Expert Committee on Traditional Medicine. It was watching him work, watching him translate plant science into medicine that reached communities across Africa, that first sparked Toyin&apos;s love of pharmacy.
              </p>
              <p className="leading-relaxed">
                She went on to earn her Bachelor of Pharmacy from OAU, walking the same halls where her father had shaped generations of students.
              </p>
            </div>
          </AnimatedSection>

          {/* UNC Chapter */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dean%20with%20students_0-OjCkluzo5mwcFEIdYSxo3P0hKL3pTx.jpg"
                  alt="Dr. Tofade with students"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  A Defining Chapter at Chapel Hill
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed">
                  In the early 1990s, Toyin crossed an ocean to pursue graduate study at the University of North Carolina at Chapel Hill, the number one ranked pharmacy school in the nation. There, she earned both her Master&apos;s in Pharmacy Practice (1994) and her Doctor of Pharmacy (1997), completing clinical residencies at UNC hospitals along the way.
                </p>
              </div>
            </div>
            <div className="bg-[#EDE5D4] rounded-xl p-8 gold-bar">
              <p className="font-serif text-xl text-[#2C1A0E] italic">
                &ldquo;I believe relationships are powerful. I list the touch points of my career in names rather than CV entries.&rdquo;
              </p>
            </div>
            <p className="text-[#5C4A2A] leading-relaxed mt-6">
              Chapel Hill was where she discovered the power of mentorship. It was there that she first crossed paths with Professor Fred Eckel who, she later said, &ldquo;tapped me when I was a nobody in Nigeria.&rdquo; That relationship would span decades, and come full circle when she became the first Black person to receive the Fred Eckel Pharmacy Leadership Award from UNC in 2019.
            </p>
          </AnimatedSection>



           {/* Building a Practice */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                     Building a Practice, Building a Life
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed mb-2">
              After her training, Dr. Tofade joined UNC hospitals as a clinical pharmacist, eventually rising to Clinical Specialist in the general medicine service. She then took the helm as Director of Pharmacotherapy Services at the Wake Area Health Education Center (AHEC), where she served from 2002 to 2011, shaping the next generation of pharmacy practitioners across North Carolina.
         
              </p>
               <p className="text-[#5C4A2A] leading-relaxed">
              During these years, alongside her professional life, she and her husband Alfred also planted roots in Durham&apos;s faith community. Together, they helped build Jubilee Christian Church International, a congregation that would grow into a vibrant, multinational community of worship. 
            </p>
              </div>
              <div className="relative aspect-[4/4] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-21-58yMSIPq5DL84zHwbBJ6YshMVEdS5y.jpg"
                  alt="Dr. Tofade and Pastor Bisi Tofade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>


          {/* Academic Leadership */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%201-zQsbNBb0vrZD0b9DWT0M8cGObwj3SV.jpg"
                  alt="Dr. Tofade mentoring a student"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  The Pivot into Academic Leadership
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed">
                  When Dr. Tofade moved to the University of Maryland School of Pharmacy in Baltimore, something shifted. &ldquo;When I switched to academia,&rdquo; she recalled, &ldquo;my boss told me, &apos;patients were your first priority in clinical pharmacy. Now your first priority is teaching students how to take care of those patients.&apos; That was my pivot.&rdquo;
                </p>
              </div>
            </div>

          </AnimatedSection>

          {/* Howard */}
          <AnimatedSection className="mb-16 bg-[#0C3050] rounded-2xl p-8 md:p-12">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Howard University
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-4 mb-6">
              Raising Leaders at the Nation&apos;s Premier HBCU Pharmacy School
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              In August 2016, Dr. Toyin Tofade was appointed Dean and Professor at Howard University College of Pharmacy in Washington, D.C., the nation&apos;s leading HBCU pharmacy school. She arrived with a clear mandate and an even clearer vision.
            </p>
            <div className="bg-[#E6F1FB]/10 rounded-xl p-6 my-6 gold-bar">
              <p className="font-serif text-xl text-white italic">
                &ldquo;Any institution can produce a pharmacist. But to raise leaders takes a different kind of environment.&rdquo;
              </p>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Over six transformative years, she made that environment. Enrollment nearly doubled. Student internships doubled. Alumni giving increased by over 70 percent. The student residency match rate climbed from 36 to more than 50 percent. Howard&apos;s College of Pharmacy achieved full re-accreditation for eight years, the maximum possible term.
            </p>
            <p className="text-white/80 leading-relaxed">
              She built 18 international partnerships across 16 countries, realizing her stated goal of reaching every continent on earth, with the exception of Antarctica. When she left for Albany in 2022, she didn&apos;t leave Howard behind. She established the Alfred and Toyin Tofade Aspiring Leaders Endowed Fund, ensuring that future Howard faculty, staff, and students would have resources to pursue leadership development long after her departure.
            </p>
          </AnimatedSection>

          {/* Albany */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-takes-elevator-to-Inauguration-Ceremony-1540x866-MS9b3c9VdW38eE3Q9Itm7bxNrmL7SE.jpg"
                  alt="Dr. Tofade greeted by students at inauguration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-Tofade-stands-with-Board-of-Trustees-at-Inauguration-980x552-Oycz7m2JW4NWFYgxeS1roqkHHDKv83.jpg"
                  alt="Dr. Tofade with Board of Trustees at inauguration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
              Making History in Albany
            </h2>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
              On July 1, 2022, Dr. Toyin Tofade became the 10th President of Albany College of Pharmacy and Health Sciences and the first Black woman to hold that office in the college&apos;s 141-year history.
            </p>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
              She did not arrive as a symbol. She arrived as a builder. Under her leadership, ACPHS launched its boldest strategic plan in a generation, introduced its first online academic portfolio, and approved seven new degree programs in a single year, the largest expansion in the institution&apos;s history. Applications rose 19%. PharmD first-year deposits surged 210%. Transfer admissions increased by more than 700%.
            </p>
            <p className="text-[#5C4A2A] leading-relaxed">
              Global partnerships extended to India, the Philippines, Nigeria, Brazil, Indonesia, Taiwan, South Korea, and the Bahamas, and grew further.
            </p>
          </AnimatedSection>

          {/* Final Quote */}
          <AnimatedSection className="bg-[#3D1854] rounded-2xl p-8 md:p-12 text-center">
            <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
            <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-4">
              I am grateful to God for this new opportunity, and I look forward to serving the ACPHS community as president.
            </blockquote>
            <cite className="text-[#C9A0E8] text-sm not-italic">
              Dr. Toyin Tofade, on her appointment as ACPHS president, March 2022
            </cite>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
    </main>
  )
}
