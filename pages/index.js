import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ProductsGrid from '../components/ProductsGrid';
import CategoriesSection from '../components/CategoriesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import GallerySection from '../components/GallerySection';
import FormSection from '../components/FormSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDoSection />
        <ProductsGrid />
        <CategoriesSection />
        <ProcessTimeline />
        <GallerySection />
        <FormSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
