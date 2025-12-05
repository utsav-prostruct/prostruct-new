import { Footer } from "@/components/layout/Footer";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { servicesPageContent } from "@/data/pages/services/servicesPageContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithState />
      <ServicesPage data={servicesPageContent.washington} />
      <Footer />
    </>
  );
}
