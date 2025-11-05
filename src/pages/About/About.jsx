import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Senior Software Engineer, Team Leader, Full-Stack Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Husnain Tahir - Senior Software Engineer"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Husnain Tahir, an accomplished Senior Software Engineer with 4+ years of experience delivering end-to-end solutions across the full technology stack. I specialize in{" "}
                <span className="font-bold text-white">
                  Angular, React.js, Node.js, and AWS cloud services
                </span>
                , with proven expertise in leading development teams and managing client relationships.
              </p>
              <p className="text-white">
                I have a strong track record of transforming complex requirements into scalable SaaS platforms. Currently at Quanrio, LLC, I led the development of the NSPG platform serving 50+ HVAC/construction companies and spearheaded the Mawhiba Meta Minds talent discovery platform that received industry acclaim.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-purple-500 pl-4">
                  <p className="text-white">
                    I thrive on solving complex technical challenges and building innovative solutions that make a real impact. As a team leader, I focus on establishing development best practices, conducting thorough code reviews, and mentoring developers to achieve excellence in every project.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Husnain Tahir
                    </cite>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">Senior Software Engineer</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">Karachi, Pakistan</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
