'use client'
import Image from 'next/image';
import heroFeaturedImageSm from "@/app/public/images/hero-featured-image-sm.png";
import React, { useEffect, useState } from 'react';

const FeaturedImage = () => {
    const [imageWidth, setImageWidth] = useState(40);

    useEffect(() => {
        console.log({ imageWidth });

        function adjustImageWidth() {
            // Get the current zoom level by comparing inner and outer widths
            const zoomLevel = window.innerWidth / window.outerWidth;

            // Adjust the image width based on the zoom level
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (zoomLevel < 1) {
                setImageWidth(0)
            } else {
                setImageWidth(40)
            }
        }

        // Call the function when the window is resized (detects zoom changes)
        window.addEventListener('resize', adjustImageWidth);

        // Initial adjustment on page load
        adjustImageWidth();


        return () => {

        };
    }, [imageWidth]);
    return (
        <div className='hidden lg:flex flex-col absolute w-full top-0 bottom-0 z-0'>
            <div className="grid grid-cols-12 gap-4 lg:gap-16 mt-10 lg:mt-24">
                <div className="col-span-12 lg:col-span-7">
                </div>
                <div className="col-span-12 lg:col-span-5">
                    <Image src={heroFeaturedImageSm} alt='Featured image' className={`w-[${imageWidth}rem]`} />
                    {/* <Image src={heroFeaturedImageSm} alt='Featured image' className={`w-[40rem]`} /> */}
                </div>

            </div>
        </div>
    );
}

export default FeaturedImage;
