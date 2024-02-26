import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import PopularTours from "@/components/popularTours/PopularTours";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactUs from "@/components/contact_us/ContactUs";

export default function Home() {
  return (
    // <main className="overflow-hidden">
    <main>
      <Hero />
      <Services />
      <PopularTours />
      <WhyChooseUs /> 
      {/* #contact pages for tours and travels
      #pending:
      about page , 
      dashboard, 
      whatsapp api ,  */}
      <Testimonials />
      <ContactUs />
    </main>
  );
}