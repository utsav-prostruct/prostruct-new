import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { CivilEngineersPage } from "@/components/pages/CivilEngineersPage";
import { civilEngineersContent } from "@/data/pages/civilEngineersContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <Header />
      <CivilEngineersPage data={civilEngineersContent.default} />
      <Footer />
    </>
  );
}
