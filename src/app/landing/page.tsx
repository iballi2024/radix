import React from 'react'
import { gothamMedium } from '../layout'
import ButtonLink from '../components/ButtonLink'
import heroFeaturedImageSm from "@/app/public/images/hero-featured-image-sm.png";
import Image from 'next/image';

export default function Landing() {
    return (
        <>

            {/* <section className='bg-black text-white lg:min-h-[500px] relative'> */}
            <section className='bg-black text-white relative'>

                <div className='hidden lg:flex flex-col  absolute w-full top-0 bottom-0 z-0'>
                    <div className="grid grid-cols-12 gap-4 lg:gap-16 mt-10 lg:mt-24">
                        <div className="col-span-12 lg:col-span-7">
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <Image src={heroFeaturedImageSm} alt='Featured image' className='w-full' />
                        </div>

                    </div>
                </div>

                <div className="container flex flex-col relative z-20   lg:min-h-[580px]">
                    <div className="grid grid-cols-12 gap-4 lg:gap-16 mt-10 lg:mt-24">
                        <div className="col-span-12 lg:col-span-8">
                            <h1 className={`${gothamMedium.className} text-3xl lg:text-6xl font-bold mb-4 lg:mb-7`}>Empowering You<br />
                                to Collect Payments Effortlessly</h1>

                            <p className="max-w-[450px] mb-7 font-thin">Revolutionizing Payments in Nigeria: Radix Offers a Seamless, Efficient, and Secure Solution for Businesses of All Sizes.</p>
                            <ButtonLink link="#" label="Get Started" classNames="hidden sm:inline-block lg:px-10 lg:text-lg" />
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-16">
                    <h2 className={`${gothamMedium.className} text-xl lg:text-3xl font-semibold text-center max-w-4xl mx-auto`}>Radix: Your global payment solution for<br className='hidden lg:inline-flex' /> seamless enrolment, control, payment, and scaling.</h2>

                </div>
            </section>
        </>
    )
}
