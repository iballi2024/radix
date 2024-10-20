'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Prop {
  url: string,
  title: string
}

export default function NavLink({ url, title }: Prop) {
  const path = usePathname();
  return (
    <Link href={url} className={(path.startsWith(url) ? 'text-theme-clr-primary' : 'text-white') + (` rounded-md px-2 xl:px-10 py-2 text-xs font-medium hover:text-theme-clr-primary`)} aria-current={path.startsWith(url) && "page"}>{title}</Link>
  )
}
