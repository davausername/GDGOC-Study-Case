import BuildAndBelong from '../components/section/BuildAndBelong';
import DiscoverLearning from '../components/section/DiscoverLearning';
import HeroBanner from '../components/section/HeroBanner';
import JoinCta from '../components/section/JoinCta';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <DiscoverLearning />
      <BuildAndBelong />
      <JoinCta />
    </>
  );
}
