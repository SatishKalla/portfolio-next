import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/page-warpper";

import experiences from "@/data/companies";

export default function Experience() {
  const calculateExperience = (): string => {
    const start: Date = new Date("2014-03-05");
    const today: Date = new Date();

    const diffTime: number = today.getTime() - start.getTime();
    const diffDays: number = diffTime / (1000 * 3600 * 24);
    const diffYears: number = diffDays / 365;

    return `${diffYears.toFixed(0)} years`;
  };

  return (
    <PageWrapper>
      <section className="p-5 ">
        <h2 className="text-3xl font-bold mb-3">
          Work Experience - {calculateExperience()}
        </h2>
        <Separator className="dark:bg-white" />
        <div className="space-y-6 p-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between items-center p-5 border-l-4 ${
                exp.present ? "border-[#0ac5b2]" : "border-gray-500"
              } bg-gray-100 dark:bg-gray-800`}
            >
              <div>
                <h3 className="text-xl font-semibold">{exp.name}</h3>
                {exp.designations.map((desg, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300">
                    {desg.name} | {desg.term}
                  </p>
                ))}
                <p className="text-sm">{exp.location}</p>
                <Link href={exp.url} target="_blank" className="text-blue-500">
                  {exp.url}
                </Link>
              </div>
              <Image
                src={exp.logo}
                alt={`${exp.name} logo`}
                width={120}
                height={60}
                className="rounded-lg bg-gray-600 p-2"
              />
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
