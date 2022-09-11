import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Training`,
  `Other resources`,
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)} id="footer">
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-12 w-12 mr-4`)} src="logo-3.png" alt="logo" width={48} height={48} />
        <p className={tw(`text-4xl text-black font-bold`)}>AutoRepl.</p>
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        {' '}
        <div className="flex flex-col">
          <p>If you have a question or anything, feel free to email me:</p>
          <a href="mailto:getautorepl@gmail.com">getautorepl@gmail.com</a>
        </div>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
