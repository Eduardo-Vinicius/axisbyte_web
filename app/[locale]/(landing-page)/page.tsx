import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import { Hero } from "@/components/hero";
import PartnersCarousel from '@/components/PartnersCarousel';
import Testimonials from "@/components/Testimonials";
import HowItWorks from '@/components/HowItWorks';
import SuccessCasesCarousel from "@/components/SuccessCases";
import AboutUs from "@/components/AboutUs";
import ServicesHighlights from "@/components/ServicesHighlights";
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

export default async function IndexPage({
  params,
}: {
  params: any
}) {
  // Ensure locale is defined with a fallback
  const locale = await params?.locale || "pt"
  const dict = await getDictionary(locale)

  return (
    <div className="overflow-y-visible">
      <Hero
        primaryCtaLink="https://wa.me/5511917330975?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!"
        secondaryCtaLink="https://www.instagram.com/p/DKiSko3SaRv/?img_index=1"
        mediaType="image"
        mediaSrc="/axislogo.png"
        dictionary={dict.hero}
      />

      <div id="Benefits"/>
      <Benefits dictionary={dict.benefits}/>

      <div id="HowItWorks"/>
      <HowItWorks dictionary={dict.howItWorks}/>
      
      <div id="ServicesHighlights"/>
      <ServicesHighlights dictionary={dict.servicesHighlights}/>

      <div id="SuccessCasesCarousel"/>
      <SuccessCasesCarousel intervalTime={5000} dictionary={dict.successCases}/>

      {/* <div id="Testimonials"/>
      <Testimonials intervalTime={5000} dictionary={dict.testimonials}/> */}

      <div id="AboutUs"/>
      <AboutUs dictionary={dict.aboutUs}/>

      {/* <div id="Partners"/>
      <PartnersCarousel intervalTime={5000} dictionary={dict.partnersCarousel}/> */}

      {/* <div id="faq" />
      <FAQ dictionary={dict.faq}/> */}
    </div>
  );
}
