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
  <header className={tw(`pb-36`)}>
    <div className={tw(`max-w-7xl mx-auto pt-32 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
      Engage your customers <br/>instantly      
      </h1>
      <div className={tw(`max-w-4xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-700 text-center text-l lg:text-3xl`)}>
        Automate interactive conversations in Instagram Direct Messages to grow your brand.       </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
     
      </div>
    </div>
   
  </header>
);

export default Header;
