import { Separator } from "@/components/ui/separator";
import Skill from "@/components/skill";
import Certificate from "@/components/certificate";
import PageWrapper from "@/components/page-warpper";
import CaseStudy from "@/components/case-study";

import categoryWiseSkills from "@/data/skills-data";

export default function Skills() {
  return (
    <PageWrapper>
      <section className="p-5">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold mb-3">Skills</h2> -{" "}
          <span>Worked on</span>
        </div>
        <Separator className="dark:bg-white" />
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8 p-3">
          {categoryWiseSkills.map(({ category, icon, skills }) => (
            <Skill
              key={category}
              category={category}
              icon={icon}
              skills={skills}
            />
          ))}
        </div>
      </section>
      <section className="p-5">
        <h2 className="text-3xl font-bold mb-3">Certificates</h2>
        <Separator className="dark:bg-white" />
        <div className="flex justify-center mt-5 md:mt-10">
          <Certificate />
        </div>
      </section>
      <section className="p-5">
        <h2 className="text-3xl font-bold mb-3">Case study</h2>
        <Separator className="dark:bg-white" />
        <div className="flex justify-center mt-5">
          <CaseStudy />
        </div>
      </section>
    </PageWrapper>
  );
}
