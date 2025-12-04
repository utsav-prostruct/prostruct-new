import { Footer } from "@/components/layout/Footer";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { CivilEngineersPage } from "@/components/pages/CivilEngineersPage";
import { civilEngineersContent } from "@/data/pages/civilEngineersContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithState />
      <CivilEngineersPage data={civilEngineersContent.texas} />
      <Footer />
    </>
  );
}
