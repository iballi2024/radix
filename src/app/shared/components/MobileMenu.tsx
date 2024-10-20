import React from 'react'
import { useSelector } from 'react-redux'

export default function MobileMenu() {
    const isMobileNavOpen = useSelector((state: any) => state.UI.isMobileNavOpen);
    return (
        <>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-theme-clr-primary" --> */}
            {
                isMobileNavOpen && <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-theme-clr-primary">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-theme-clr-primary">Projects</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-theme-clr-primary">Calendar</a>
                    </div>
                </div>
            }

        </>
    )
}
