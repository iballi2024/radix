import { gothamMedium } from '@/app/layout';
import React from 'react';
import Image from 'next/image';

export interface CardProp {
    title: string,
    description: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    featuredImage: any,
    group?:string
}

const DisplayCard = ({ title, description, featuredImage, group }: CardProp) => {
    return (
        <div className='flex flex-col justify-between gap-y-2 bg-theme-clr-card-light rounded-lg p-4 lg:p-7 h-full'>
            <div>
                <h5 className={`${gothamMedium.className} antialiased text-xl mb-2`}>{title}</h5>
                <p>{description}.</p>
            </div>
            <div className={`flex ${group ==='l2' ? ` justify-end` : ` place-content-center`}`}>
                <Image src={featuredImage} alt={title} />
            </div>
        </div>
    );
}

export default DisplayCard;
