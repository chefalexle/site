import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; 
import styles from './navbar.module.css';

export default function Navbar({ menuItems, themeProps, logo }: {
    menuItems: menuItem[];
    themeProps?: {mode: 'desktop' | 'mobile', theme: 'light' | 'dark'} | null;
    logo: logo;
}) {
    const mode = themeProps ? themeProps.mode : 'desktop';
    const theme = themeProps ? themeProps.theme : 'light';
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;
    const [showMenu, toggleMenu] = useState(false);

    function handleToggleMenu() {
        toggleMenu(!showMenu);
    }

    let menu: JSX.Element;
    if (mode === 'mobile') {
        menu = (
            <>
                <div className={`${styles['nav-bar']}`}>
                    <div className={`${styles['menu-button']}`} onClick={handleToggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                </div>
                {
                    showMenu 
                    ? <Menu mode={mode} theme={theme} menuItems={menuItems}></Menu>
                    : <></>
                }
            </>
        );
    } else {
        menu = (
            <>
                <Menu mode={mode} theme={theme} menuItems={menuItems}></Menu>
            </>
        );
    }

    return (
        <nav className={`${styles['nav']} ${themeStyles}`}>
            <div className={`${styles['nav-container']}`}>
                {menu}
            </div>
        </nav>
    );
}

type logo = {
    url: string;
    width: number;
    height: number;
    alt: string;
}

type menuItem = {
    label: string;
    href: string;
    dropdown?: menuItem[];
};

type menuProps = {
    mode: 'mobile' | 'desktop';
    theme: 'light' | 'dark';
    menuItems: menuItem[];
};

function Menu({mode, theme, menuItems}: menuProps) {
    let menu: JSX.Element;
    let menuList: JSX.Element[] = [];
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;

    menuItems.forEach((menuItem, index) => {
        const label = menuItem.label;
        const href  = menuItem.href;
        const menuItemSyle = `${styles['menu-item']} ${themeStyles}`;

        let menuItemElement: JSX.Element;
        if (!menuItem.dropdown || mode === 'mobile') {
            menuItemElement = (
                <Link className={menuItemSyle} href={href} key={index}>
                    {label}
                </Link>
            );
        } else {
            menuItemElement = (
                <DropdownMenu label={label} href={href} mode={mode} theme={theme} menuItems={menuItem.dropdown} key={index}/>
            );
        }

        const seperator = <p className={`${styles['menu-seperator']}`} key={`seperator${index}`}>|</p>;
        menuItems.length !== index + 1 && mode !== 'mobile' ? menuList.push(menuItemElement, seperator)
                                                            : menuList.push(menuItemElement);

    })

    menu = (
        <div className={`${styles['menu']} ${styles[mode]} ${styles[theme]} ${theme} ${mode}`}>
            {menuList}
        </div>
    );

    return menu;
}

function DropdownMenu({label, href, mode, theme, menuItems}: {
    label: string;
    href: string;
    mode: 'mobile' | 'desktop';
    theme: 'light' | 'dark';
    menuItems: menuItem[];
}) {
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;
    const menuItemSyle = `${styles['menu-item']} ${themeStyles}`;

    const dropdownMenu = menuItems.map((menuItem, index) => {
        const label = menuItem.label;
        const href  = menuItem.href;
        const dropdownItemSyle = `${styles['dropdown-item']} ${themeStyles}`;
        
        return (
            <Link className={dropdownItemSyle} href={href} key={index}>{label}</Link>
        );
    });

    return (
        <div className={`${styles['dropdown']}`}>
            <Link className={`${styles['dropdown-main']} ${menuItemSyle}`} href={href}>
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className={`bi bi-caret-down-fill`} viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </Link>
            <div className={`${styles['dropdown-items']}`}>
                {dropdownMenu}
            </div>
        </div>
    );
}