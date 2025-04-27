import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import { Hero } from "@/components/hero";
import PartnersCarousel from '@/components/PartnersCarousel';
import Testimonials from "@/components/Testimonials";
import HowItWorks from '@/components/HowItWorks';
import SuccessCasesCarousel from "@/components/SuccessCases";
import AboutUs from "@/components/AboutUs";
import ServicesHighlights from "@/components/ServicesHighlights";

export default async function IndexPage() {
  return (
    <div className="overflow-y-visible">
      <Hero
        title="Transformamos ideias em soluções digitais!"
        subtitle="Desenvolvimento de sites, sistemas e aplicativos que aceleram negócios e otimizam resultados."
        primaryCtaText="Peça seu orçamento agora"
        primaryCtaLink="https://forms.gle/6DT6awF1XbrdDjxRA"
        secondaryCtaText="Conheça nossos serviços"
        secondaryCtaLink="/#conheca"
        credits={
          <>
          </>
        }
        mediaType="image"
        mediaSrc="/Kanban.png"
      />

      <div id="Benefits"/>
      <Benefits />
      
      <div id="SuccessCasesCarousel"/>
      <SuccessCasesCarousel intervalTime={5000} />

      <div id="HowItWorks"/>
      <HowItWorks />

      <div id="ServicesHighlights"/>
      <ServicesHighlights />

      <div id="Testimonials"/>
      <Testimonials intervalTime={5000}/>

      <div id="AboutUs"/>
      <AboutUs />

      <div id="Partners"/>
      <PartnersCarousel intervalTime={5000}/>

      <div id="faq" />
      <FAQ />
    </div>
  );
}
