import Hero from "@/components/hero/Hero";
import PopularTours from "@/components/popularTours/PopularTours";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import ContactUs from "@/components/contact_us/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularTours />
      why choose us 
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}