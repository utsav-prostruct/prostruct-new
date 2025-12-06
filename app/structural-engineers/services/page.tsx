import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { servicesPageContent } from "@/data/pages/services/servicesPageContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <Header />
      <ServicesPage data={servicesPageContent.structural} />
      <Footer />
    </>
  );
}

