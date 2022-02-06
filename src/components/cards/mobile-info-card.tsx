import React from 'react';
import { tw } from 'twind';
import Instagram from '@/constants/svg/ig.svg';
import Arrow from '@/constants/svg/arrow.svg';
interface IInfoCard {
  title: string;
  icon: any;
}
const MobileInfoCard = (props: IInfoCard) => {
  return (
    <div className={tw(` max-w-xl pt-8  rounded-3xl max-h-min  `)}>
      <div className={tw(`flex flex-col  bg-blue-50  pl-4 pr-4 pt-8 pb-6 rounded-3xl max-h-min items-center`)}>
        <div className={tw(`flex space-x-5 `)}>
          {props.icon}
          <p className={tw(`font-semibold text-base `)}> {props.title}</p>
        </div>
        <div>
          <a href="#features">
            <p className={tw(`font-light text-sm `)}>
              Learn More <hr className={tw(`w-70 `)}></hr>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileInfoCard;
