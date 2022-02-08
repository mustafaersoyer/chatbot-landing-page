import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    ReactGA.initialize('G-59FTPW4G56');

    ReactGA.pageview('Init page view');
  }, []);

  return (
    <Page>
      <NextSeo
        title="AutoRepl. Automate Instagram Messages"
        description="A chatbot for Automating Instagram Messages!"
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
