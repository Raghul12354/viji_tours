import Hero from "@/components/hero/Hero";
import PopularTours from "@/components/popularTours/PopularTours";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactUs from "@/components/contact_us/ContactUs";

export default function Home() {
  return (
    // <main className="overflow-hidden">
    <main>
      <Hero />
      <PopularTours />
      #why choose us 
      #services
      #contact pages for tours and travels
      #pending: about page , dashboard, whatsapp api , 
      <Testimonials />
      <ContactUs />
    </main>
  );
}