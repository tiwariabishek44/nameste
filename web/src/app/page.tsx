import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Concierge from "@/components/Concierge";
import Promise from "@/components/Promise";
import Treatments from "@/components/Treatments";
import TheSpace from "@/components/TheSpace";
import SpaTourTeaser from "@/components/SpaTourTeaser";
import FounderNote from "@/components/FounderNote";
import QuoteBand from "@/components/QuoteBand";
import Proof from "@/components/Proof";
import InstagramStrip from "@/components/InstagramStrip";
import Gifting from "@/components/Gifting";
import Visit from "@/components/Visit";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <div id="concierge">
        <Concierge />
      </div>
      <Promise />
      <Treatments />
      <TheSpace />
      <SpaTourTeaser />
      <FounderNote />
      <QuoteBand />
      <Proof />
      <InstagramStrip />
      <Gifting />
      <Visit />
      <SiteFooter />
    </>
  );
}
