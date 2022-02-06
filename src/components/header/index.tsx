import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
import Instagram from '@/constants/svg/ig.svg';
import Instagram2 from '@/constants/svg/ig-2.svg';
import Facebook from '@/constants/svg/facebook.svg';
import Google from '@/constants/svg/google-g.svg';
import Meta from '@/constants/svg/meta.svg';
import Google2 from '@/constants/svg/google-2.svg';
const headerStyle = css`
  background-color: #ffffff;
  min-height: 100vh;
`;

const Header = () => (
  <section id="header">
    <header className={tw(`sm:pb-28 sm:pt-20`)}>
      <div className={tw(`max-w-7xl mx-auto pt-8 px-7 sm:px-8 `)}>
        <h1
          className={tw(`font-sans font-bold text-5xl md:text-5xl lg:text-8xl text-center  leading-snug text-gray-800`)}
        >
          Engage your customers <br />
          instantly
        </h1>
        <div className={tw(`max-w-4xl mx-auto`)}>
          <p className={tw(`sm:mt-10 mt-4 text-gray-700 text-center text-l lg:text-3xl`)}>
            Automate interactive conversations in Instagram Direct Messages to grow your brand.{' '}
          </p>
        </div>
        <div
          className={tw(
            `sm:mt-10 mt-6 flex flex-col  sm:flex-row  sm:justify-center sm:items-center w-full mx-auto space-x-4  space-y-4 sm:space-y-0`,
          )}
        >
          <input className={tw(`rounded-md border h-12 p-2 border-blue-600`)} placeholder="Your Best E-Mail"></input>
          <button className={tw(`border bg-blue-600 text-white rounded-full p-4 font-medium text-sm w-72  `)}>
            JOIN THE FREE ACCESS WAITLIST
          </button>
        </div>
      </div>
    </header>
  </section>
);

export default Header;
