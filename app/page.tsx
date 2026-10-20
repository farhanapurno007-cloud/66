import HeroBanner from "@/components/HeroBanner";
import JackpotTicker from "@/components/JackpotTicker";
import GameLobbyPreview from "@/components/GameLobbyPreview";
import PromotionsSection from "@/components/PromotionsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <HeroBanner />
      <JackpotTicker />
      <GameLobbyPreview />
      <PromotionsSection />
      <WhyChooseUs />
    </main>
  );
}
