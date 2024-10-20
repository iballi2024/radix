import React from 'react'


interface Prop {
    link: string,
    label: string,
    classNames?: string,
    isInverse?: boolean,
}
export default function ButtonLink({ link, label, classNames, isInverse }: Prop) {
    return (
        <>
            <a href={link} className={(!isInverse ? "rounded-md px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-theme-clr-primary to-theme-clr-primary-deep"
                : "rounded-md px-4 py-2 text-xs font-medium text-white border border-theme-clr-primary") + (!classNames ? "" : ` ${classNames}`)}>{label}</a>
        </>
    )
}
