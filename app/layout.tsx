'use client'

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { montserrat, open_sans } from './fonts';

import styles from './layout.module.css';
import './global.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [themes, setThemes] = useState({mode: 'desktop' as 'desktop' | 'mobile', theme: 'light' as 'light' | 'dark'});
    const [width, setWidth] = useState({width: 800});

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    function handleResize() {
        const currentWidth = window.innerWidth;
        if (Math.abs(currentWidth - width.width) >= 10){
            if (currentWidth <= 810 && themes.mode === 'desktop') {
                const newThemes = themes;
                newThemes.mode = 'mobile';
                setThemes(newThemes);
                setThemes({mode: 'mobile', theme: themes.theme});
            } else if (currentWidth > 810 && themes.mode === 'mobile') {
                const newThemes = themes;
                newThemes.mode = 'desktop';
                setThemes(newThemes);
                setThemes({mode: 'desktop', theme: themes.theme});
            }
            const newWidth = width;
            newWidth.width = currentWidth;
            setWidth(newWidth);
        }
    }

    return (
      <html lang="en" className={montserrat.className}>
        <body>
            <Navbar menuItems={menu} themeProps={themes} logo={navLogo}></Navbar>
            <main>
                {children}
            </main>
            <Footer footerMenu={footerMenu} info={footerInfo} themeProps={themes} logo={footerLogo}></Footer>
        </body>
      </html>
    )
  }

  type menuItem = {
      label: string;
      href: string;
      dropdown?: menuItem[];
  };

  const menu: menuItem[] = [
    {label: 'Home', href: '/'},
    {label: 'Hire Me', href: '/hire'},
    {label: 'Portfolio', href: '/portfolio'},
    {label: 'Internship', href: '/internship'},
    {label: 'Interviews', href: '/interviews'},
];

const footerMenu = [
    {title: 'Reservations', links: [
        {label: 'Cottages', href: '/reservation'},
        {label: 'Boats & Watersport', href: '/reservation/boats'}
    ]},
    {title: 'Things To Do', links: [
        {label: 'Fishing', href: '/fishing'},
        {label: 'Activities', href: '/activites'},
        {label: 'Attractions', href: '/attractions'}
    ]},
    {title: 'Information', links: [
        {label: 'Cottages', href: '/wip'},
        {label: 'Boats', href: '/wip'},
        {label: 'RV Sites', href: '/wip'},
        {label: 'Tenting', href: '/wip'}
    ]},
    {title: 'Social Media', links: [
        {label: 'Facebook', href: '/wip'},
        {label: 'Twitter', href: '/wip'},
        {label: 'Instagram', href: '/wip'}
    ]}
];

const footerInfo = {
    copyright: '',
    footerLinks: [
        {label: '', href: '/information/terms-and-conditions'}
    ]
}

const navLogo = {
    url: '/images/logo-name.png',
    width: 256,
    height: 60,
    alt: 'Adventure Bay'
}
const footerLogo = {
    url: '/images/logo.png',
    width: 220,
    height: 160,
    alt: 'Adventure Bay'
}