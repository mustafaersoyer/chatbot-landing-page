import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';
import Instagram from '@/constants/svg/ig.svg';
import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import InfoCard from '../cards/info-card';
import Increasing from '@/constants/svg/increasing-2.svg';
import Person from '@/constants/svg/time.svg';

function VideoSection() {
  const [playing, setPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={tw(`ml-12 flex  items-start `)}>
      <div className={tw(`ml-12 flex  flex-col space-y-6 `)}>
        <InfoCard
          isActive={activeIndex === 0}
          title="Automate Interactions"
          description="Supercharge your Instagram marketing with messaging and business automations"
          icon={<Instagram width={28} />}
          onClick={() => {
            setActiveIndex(0);
            console.log(activeIndex);
          }}
        ></InfoCard>
        <InfoCard
          isActive={activeIndex === 1}
          title="Increase Your Income"
          description="Increase your income with faster and professional customer communication."
          icon={<Increasing width={28} />}
          onClick={() => {
            setActiveIndex(1);
            console.log(activeIndex);
          }}
        ></InfoCard>
        <InfoCard
          isActive={activeIndex === 2}
          title="Save Time"
          description="Automation takes care of all the work for you, you just sit back and drink your coffee."
          icon={<Person width={28} />}
          onClick={() => {
            setActiveIndex(2);
            console.log(activeIndex);
          }}
        ></InfoCard>
      </div>
      <div className={tw(`-mt-28`)}>
        <ReactPlayer
          url="mock.mp4"
          height={1100}
          width={800}
          loop={true}
          playing
          zoom={2}
          onReady={() => {
            setPlay(true);
          }}
        />
      </div>
    </section>
  );
}

export default VideoSection;
