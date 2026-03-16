import Hero from "../Components/Hero";
import ServicesSection from "../Components/ServicesSection";
import Stats from "../Components/Stats";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";




function Home() {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <ServicesSection></ServicesSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      
    </div>
  );
}

export default Home;