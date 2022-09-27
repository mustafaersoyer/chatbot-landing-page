import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `FEATURES`,
    href: `#features`,
  },
  {
    label: `PRICING`,
    href: `#pricing`,
  },
  {
    label: `CONTACT`,
    href: `#footer`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a href={link.href} className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const Navigation = () => {
  let name = "Mustafa ERSOY";
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const toggleMenu = () => setShowMenu(!showMenu);
  const responseFacebook = async (response:any) => {
    if(response['name']){
      setShowLoginButton(false);
      name = response['name'];

      const fbApiToGetUserLongLivedAccessToken = `https://graph.facebook.com/v15.0/oauth/access_token?grant_type=fb_exchange_token&client_id=527580845195247&client_secret=2e1865d105ef7e600ff5382cb12d2cc3&fb_exchange_token=${response['accessToken']}`;
      let requestOptionsForFb = {
        method: 'GET',
      };
      let userLongLivedAccessToken;
      await fetch(fbApiToGetUserLongLivedAccessToken,requestOptionsForFb).then((response) => response.json()).then((data) => {userLongLivedAccessToken= data.access_token; console.log(data.access_token)} )  .catch(console.error);;
      response['long_lived_token'] = userLongLivedAccessToken;
      response['expire_date'] = new Date(new Date().setDate(new Date().getDate() + 60));

      const fbApiToGetPageAccessToken = `https://graph.facebook.com/${response['id']}/accounts?access_token=${userLongLivedAccessToken}`;
      let pages;
      await fetch(fbApiToGetPageAccessToken,requestOptionsForFb).then((response) => response.json()).then(async (data) => {
        pages = data;   
        

        const bodyy = {
          facebookPageId: pages.data[0].id, email: response['email']
        };

        const requestOptionsForOracle = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyy),
      };
      await fetch('http://130.61.161.101:3000/api/create-sheet', requestOptionsForOracle);} )  .catch(console.error);;
      response['pages'] = pages;
      
       const requestOptionsForMongo = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      };
      await fetch('/api/fbusers', requestOptionsForMongo);


    


    
    }

  
    
  }
  const componentClicked = () => {
    console.log('clic');     
    
  
  }
  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-full mx-auto px-4 sm:px-6 lg:px-8 `)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center space-x-4`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-16 w-16`)} src="logo-3.png" alt="logo" width={64} height={64} />
            </div>
            <p className={tw(`font-extrabold text-2xl `)}>AutoRepl.</p>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
              {links.map((link: Link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={tw(`text-gray-700 hover:text-black px-3 py-2 rounded-md font-bold`)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
           
            
          {showLoginButton ?  <FacebookLogin
            appId="527580845195247"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            size="small"
            textButton='Login With Facebook'
            scope="public_profile,pages_messaging,pages_show_list"
             /> : "Thanks, " + name}

         
  
    
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
