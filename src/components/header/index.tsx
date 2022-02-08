import { tw, css } from 'twind/css';
import ReactGA from 'react-ga';
import { useState } from 'react';

const Header = () => {
  const [email, setEmail] = useState('');
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  const [isEmailGet, setIsEmailGet] = useState(false);

  return (
    <section id="header">
      <header className={tw(`sm:pb-28  sm:pt-20`)}>
        <div className={tw(`max-w-7xl mx-auto pt-8 px-7 sm:px-8 `)}>
          <h1
            className={tw(
              `font-sans font-bold text-5xl md:text-5xl lg:text-8xl text-center  leading-snug text-gray-800`,
            )}
          >
            Auto Reply your customers <br />
            instantly
          </h1>
          <div className={tw(`max-w-4xl mx-auto`)}>
            <p className={tw(`sm:mt-10 mt-4 text-gray-700 text-center text-l lg:text-3xl`)}>
              Automate your Instagram Messages like the pros the easy way to grow your brand.{' '}
            </p>
          </div>
          {!isEmailGet ? (
            <div
              className={tw(
                `sm:mt-10 mt-6 flex flex-col sm:flex-row  sm:justify-center sm:items-center w-full mx-auto sm:space-x-4
                  space-y-4 sm:space-y-0`,
              )}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className={tw(`rounded-md border h-12 p-2 border-blue-600`)}
                placeholder="Your Best E-Mail"
              ></input>
              <button
                className={tw(`border bg-blue-600 text-white rounded-full p-4 font-medium text-sm  `)}
                onClick={() => {
                  ReactGA.event({
                    category: 'User',
                    action: 'Clicked join button',
                  });

                  // Simple POST request with a JSON body using fetch
                  if (email !== '') {
                    const requestOptions = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: email }),
                    };
                    fetch('/api/users', requestOptions).then((response) => response.json());
                  } else {
                    alert('Please enter your email');
                  }
                }}
              >
                JOIN THE FREE ACCESS WAITLIST
              </button>
            </div>
          ) : (
            <div className={tw(`text-green-600 sm:mt-10 mt-6 container mx-auto  text-center`)}>
              Your email address has been registered. Thank you! See you soon :){' '}
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
