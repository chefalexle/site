import Link from 'next/link';
import styles from './sidebar.module.css';

export default function Sidebar({ children, menu, themeProps }: {
    children?: React.ReactNode;
    menu: menuItem[];
    themeProps?: {mode: 'desktop' | 'mobile', theme: 'light' | 'dark'};
}) {
    const mode = themeProps ? themeProps.mode : 'desktop';
    const theme = themeProps ? themeProps.theme : 'light';
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;

    const menuList = menu.map(menuItem => {
        return (
            <div className={`${styles['link-container']}`}>
                <Link href={menuItem.href}>{menuItem.label}</Link>
            </div>
        );
    });

    return (
        <div className={`${styles['sidebar']}`}>
            {menuList}
        </div>
    );
}

type menuItem = {
    label: string;
    href: string;
}