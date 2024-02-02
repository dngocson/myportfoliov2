"use client";
import { companyProjectData, projectsData } from "@/lib/data";
import { useSectionInview } from "@/lib/hook";
import Project from "./project";
import SectionHeading from "./section-heading";
import CompanyProject from "./company-project";
export default function Projects() {
  const { ref } = useSectionInview("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="text-center mb-12">
        <SectionHeading>Project</SectionHeading>
        {companyProjectData.map((el) => (
          <CompanyProject
            id={el.id}
            key={el.id}
            title={el.title}
            desciption={el.desciption}
          />
        ))}
      </div>

      <SectionHeading>My Personal Project</SectionHeading>
      <div className="flex flex-col justify-items-center items-center">
        {projectsData.map((item, index) => (
          <div key={index}>
            <Project {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
