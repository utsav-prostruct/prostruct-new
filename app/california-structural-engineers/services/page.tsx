import { Footer } from "@/components/layout/Footer";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { servicesPageContent } from "@/data/pages/services/servicesPageContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithStateCal />
      <ServicesPage data={servicesPageContent.california} />
      <Footer />
    </>
  );
}
