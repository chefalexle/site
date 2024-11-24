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
            {/*
            }
            <div className={`${styles['header-bar']}`}>
                <div className={`${styles['header-bar-container']}`}>
                    <div className={`${styles['header-bar-contact']}`}>
                        <div className={`${styles['header-bar-contact-info']}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-telephone ${styles['telephone-icon']}`} viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p><a className={`${styles['phone-link']}`} href='tel:+19053423400'>905 342-3400</a></p>
                        </div>
                        <div className={`${styles['header-bar-contact-info']}`}>
                            {
                                /*
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-envelope ${styles['email-icon']}`} viewBox="0 0 16 16">
                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                                */
                            }
                            {/*
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-telephone ${styles['telephone-icon']}`} viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p><a className={`${styles['phone-link']}`} href='tel:+ 18006369836'>Toll Free: 1-800-636-9836</a></p>
                        </div>
                    </div>
                    <div>
                        <div className={`${styles['book']}`}>
                            <Link className={`${styles['license-button']}`} href='/reservation/cottages'>
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            */}

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