import React from 'react'
import { gothamMedium } from '../layout'
import ButtonLink from '../shared/components/ButtonLink'
import FeaturedImage from './components/FeaturedImage';
import DisplayCard, { CardProp } from './components/DisplayCard';
import { ServicingInfo } from './localData/servicing-info';

export default function Landing() {

    const servincing_l1: CardProp[] = new ServicingInfo().l1Data();
    const servincing_l2: CardProp[] = new ServicingInfo().l2Data();
    
    return (
        <>

            {/* <section className='bg-black text-white lg:min-h-[500px] relative'> */}
            <section className='bg-black text-white relative'>

                <FeaturedImage />

                {/* <div className="container flex flex-col relative z-20   lg:min-h-[580px]"> */}
                <div className="container flex flex-col relative z-20   lg:min-h-[38rem]">
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
                <div className="container pt-20 pb-16">
                    <h2 className={`${gothamMedium.className} text-xl lg:text-3xl font-semibold text-center max-w-4xl mx-auto`}>Radix: Your global payment solution for<br className='hidden lg:inline-flex' /> seamless enrolment, control, payment, and scaling.</h2>
                    <div className="my-10"></div>
                    <div className='flex flex-col gap-y-6 lg:gap-y-10'>
                        <div className="grid grid-cols-12 items-stretch gap-4 lg:gap-8">
                            {
                                servincing_l1.map(((card: CardProp, index: number) => {
                                    return <div key={index} className='col-span-12 lg:col-span-4'>
                                        {/* const {title, description, featuredImage} = {card} */}
                                        <DisplayCard title={card.title} description={card.description} featuredImage={card.featuredImage} group={card.group} />
                                    </div>
                                }

                                ))
                            }
                        </div>

                        <div className="grid grid-cols-12 gap-4 lg:gap-8">
                            {
                                servincing_l2.map(((card: CardProp, index: number) => {
                                    return <div key={index} className='col-span-12 lg:col-span-6'>
                                        {/* const {title, description, featuredImage} = {card} */}
                                        <DisplayCard title={card.title} description={card.description} featuredImage={card.featuredImage} group={card.group} />
                                    </div>
                                }

                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
