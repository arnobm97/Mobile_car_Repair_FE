import aboutHero from "@/images/hero1.webp";
import { PageHero } from "@/components/shared/PageHero";
import { SolutionSection } from "@/components/Solution/solution";
import { brandsSection, solutionSection, whyChooseData } from "@/data/data";
import { BrandsSection } from "@/components/brands/Brand";
import { WhyChooseSection } from "@/components/whychoose/WhyChooseSection";


const page = () => {
  return (
    <div className="w-full bg-secondary">
      <PageHero
        title="About"
        backgroundImage={aboutHero}
        breadcrumbs={[{ label: "About" }]}
      />

      {/* About Content */}
      <SolutionSection {...solutionSection} />
      <BrandsSection {...brandsSection} />
      <WhyChooseSection {...whyChooseData} />
    </div>
  );
};

export default page;
