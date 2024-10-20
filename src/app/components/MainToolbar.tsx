'use client'

import React, { useEffect, useRef, useState } from 'react';
import brandLogo from "../public/images/brand-logo.svg";
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import ButtonLink from './ButtonLink';
import NavLink from './NavLink';
import MobileMenuToggler from './MobileMenuToggler';
import MobileMenu from './MobileMenu';
import { Provider } from 'react-redux';
import store from '../store';

export default function MainToolbar() {
    return (
        <header>
            {/* <nav className={`main-navbar ${bgColor} sticky top-0 z-50 w-full`} ref={toolbar}> */}
            <nav className='bg-black'>
                <div className="container">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <Provider store={store}>
                                <MobileMenuToggler />
                            </Provider>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:justify-start">
                            <div className="flex flex-shrink-0 items-center h-20 w-40">
                                {/* <Image className="h-8 w-auto" src={brandLogo} alt="Your Company" /> */}
                                <Link href="/">
                                    <Image className="h-20 w-auto" src={brandLogo} alt="Radix brand logo" priority />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-8 sm:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-theme-clr-primary" --> */}
                                    {/* <Link href="/pricing" className={(path.startsWith('/pricing') ? 'text-theme-clr-primary' : 'text-white') + (` rounded-md px-2 xl:px-10 py-2 text-xs font-medium hover:text-theme-clr-primary`)} aria-current={path.startsWith('/pricing') && "page"}>Pricing</Link> */}
                                    <NavLink url="/pricing" title="Pricing" />
                                    <NavLink url="/documentation" title="Documentation" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <a href="#" className="hidden sm:block rounded-md px-2 xl:px-10 py-2 text-xs font-medium text-white hover:text-theme-clr-primary">Terms of Service</a>
                            <a href="#" className="hidden sm:block rounded-md px-2 xl:px-10 py-2 text-xs font-medium text-white hover:text-theme-clr-primary">Contact</a>

                            <ButtonLink link="#" label="Merchant Login" isInverse={true} classNames="hidden sm:block" />
                            {/* <a href="#" className="hidden sm:block rounded-md px-4 py-2 text-xs font-medium text-white border border-theme-clr-primary">Merchant Login</a> */}
                            <span className="mx-2"></span>
                            <ButtonLink link="#" label="Get Started" />
                            {/* <a href="#" className="rounded-md px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-theme-clr-primary to-theme-clr-primary-deep"></a> */}

                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                        <Provider store={store}>
                            <MobileMenu />
                        </Provider>
            </nav>
        </header>
    )
}