import { Footer } from "@/components/layout/Footer";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { CivilEngineersPage } from "@/components/pages/CivilEngineersPage";
import { civilEngineersContent } from "@/data/pages/civilEngineersContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithStateCal />
      <CivilEngineersPage data={civilEngineersContent.california} />
      <Footer />
    </>
  );
}
