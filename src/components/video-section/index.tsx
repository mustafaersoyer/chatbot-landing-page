import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';
import Instagram from '@/constants/svg/ig.svg';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import InfoCard from '../cards/info-card';
import Increasing from '@/constants/svg/increasing-2.svg';
import Person from '@/constants/svg/time.svg';
import Arrow from '@/constants/svg/arrow.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MobileInfoCard from '../cards/mobile-info-card';
// Import Swiper styles
function VideoSection() {
  const [playing, setPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  return (
    <section className={tw(`sm:ml-12 flex flex-col sm:flex-row items-start  `)}>
      <div className={tw(`flex flex-row sm:hidden  ml-2`)}>
        <div
          className=" mt-12 pt-6 "
          onClick={() => {
            console.log('index', activeCarouselIndex);
            let newIndex;
            if (activeCarouselIndex > 0) newIndex = activeCarouselIndex - 1;
            else newIndex = activeCarouselIndex;
            setActiveCarouselIndex(newIndex);
            console.log('index2', activeCarouselIndex);
          }}
        >
          <Arrow width={28} className={tw(`origin-center rotate-180`)} />
        </div>
        <Carousel
          className={tw(`w-72 px-2 `)}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={activeCarouselIndex}
          showThumbs={false}
        >
          <MobileInfoCard icon={<Instagram width={28} />} title="Automate Conversations" />
          <MobileInfoCard title="Increase Your Income" icon={<Increasing width={28} />} />
          <MobileInfoCard title="Save Time and Relax" icon={<Person width={28} />} />
        </Carousel>
        <div
          className=" mt-12 pt-6 "
          onClick={() => {
            console.log('index', activeCarouselIndex);
            let newIndex;
            activeCarouselIndex <= 1 ? (newIndex = activeCarouselIndex + 1) : (newIndex = activeCarouselIndex);
            setActiveCarouselIndex(newIndex);
            console.log('index2', activeCarouselIndex);
          }}
        >
          <Arrow width={28} />{' '}
        </div>
      </div>
      <div className={tw(`ml-12 flex-col space-y-6 hidden sm:block`)}>
        <InfoCard
          isActive={activeIndex === 0}
          title="Automate Conversations"
          description="Boost your Instagram interaction with messaging and business automations"
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
          title="Save Time and Relax"
          description="Automation takes care of all the work for you, you just sit back and drink your coffee."
          icon={<Person width={28} />}
          onClick={() => {
            setActiveIndex(2);
            console.log(activeIndex);
          }}
        ></InfoCard>
      </div>

      <div className={tw(`sm:-mt-28   `)}>
        <ReactPlayer
          url="mock.mp4"
          loop={true}
          height="100%"
          width="100%"
          playing={playing}
          muted={true}
          onReady={() => {
            setPlay(true);
          }}
        />
      </div>
    </section>
  );
}

export default VideoSection;
