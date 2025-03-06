
import FeatureSection from "@/components/landing/feature-section";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import ProtectionSection from "@/components/landing/protection-section";


export default function Home() {
  return (
    <>
    {/* hero section */}
    <HeroSection/>
    {/* features */}
    <FeatureSection/>
    {/* security details section */}
    <ProtectionSection/>
    {/* footer */}
    <Footer/>
    </>
  );
}
