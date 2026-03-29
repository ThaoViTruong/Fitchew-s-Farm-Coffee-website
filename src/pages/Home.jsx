import ArtOfWaitingSection from '../components/ArtOfWaitingSection'
import HeroSection from '../components/HeroSection'
import QuietSpaceCommunitySection from '../components/QuietSpaceCommunitySection'
import SignatureBlendsSection from '../components/SignatureBlendsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ArtOfWaitingSection />
      <SignatureBlendsSection />
      <QuietSpaceCommunitySection />
    </main>
  )
}
