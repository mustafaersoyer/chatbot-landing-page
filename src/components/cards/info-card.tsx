import React from 'react';
import { tw } from 'twind';
import Instagram from '@/constants/svg/ig.svg';
interface IInfoCard {
  isActive: boolean;
  title: string;
  description: string;
  icon: any;
  onClick: () => void;
}
const InfoCard = (props: IInfoCard) => {
  return (
    <div className={tw(` ml-72 max-w-xl pl-10 pr-10 pt-8 pb-6 rounded-3xl max-h-min  `)}>
      {props.isActive ? (
        <div className={tw(`flex flex-col  bg-blue-50 max-w-max pl-10 pr-10 pt-8 pb-6 rounded-3xl max-h-min `)}>
          <div className={tw(`flex space-x-5 `)}>
            {props.icon}
            <p className={tw(`font-medium text-2xl`)}>
              {props.title} <hr className={tw(`w-70 `)}></hr>
            </p>
          </div>
          <p className={tw(`pl-12 pt-2 text-base`)}>{props.description}</p>
          <p className={tw(`pl-12 pt-6 text-base`)}>
            Learn More <hr className={tw(`w-20`)}></hr>
          </p>
        </div>
      ) : (
        <div className={tw(`ml-12 flex space-x-5  `)}>
          {props.icon}
          <button className="border-none" onClick={() => props.onClick()}>
            <p className={tw(`font-medium text-2xl `)}>
              {props.title} <hr className={tw(`w-70 `)}></hr>
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
