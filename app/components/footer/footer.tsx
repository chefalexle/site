import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer({ footerMenu, themeProps, info, logo }: {
    footerMenu?: footerCategory[];
    info?: footerInfo;
    themeProps?: {mode: 'desktop' | 'mobile', theme: 'light' | 'dark'} | null;
    logo: logo;
}) {
    const mode = themeProps ? themeProps.mode : 'desktop';
    const theme = themeProps ? themeProps.theme : 'light';
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;

    // top footer menu categories and links
    const menu = footerMenu?.map((category, index) => {
        const links = category.links.map((link, linkIndex) => {
            return (
                <Link className={`${styles['footer-link']} ${theme}`} href={link.href} key={linkIndex}>
                    {link.label}
                </Link>
            );
        });

        return (
            <div className={`${styles['footer-category']} ${themeStyles} ${category}`} key={index}>
                <h3>{category.title}</h3>
                {links}
            </div>
        );
    });

    // bottom footer info (privacy policy, terms & conditions, etc.)
    let infoMenu: JSX.Element[] = [];
    info?.footerLinks.forEach((link, index) => {
        const linkElement = (
            <Link className={`${styles['info-link']} clean ${themeStyles}`} href={link.href} key={index}>
                {link.label}
            </Link> 
        );
        const seperator = <p className={`${styles['menu-seperator']}`} key={`seperator${index}`}>|</p>;

        info.footerLinks.length !== index + 1 && mode !== 'mobile' ? infoMenu.push(linkElement, seperator)
                                                                   : infoMenu.push(linkElement);
    });

    return (
        <footer id='footer' className={`${styles['footer-container']} ${themeStyles}`}>

            <div className={`${styles['contact-container']}`}>
                <div className={`${styles['contact']}`}>
                    <div className={`${styles['contact-left']}`}>
                        <h1>Contact Me</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="orange" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </div>
                    <div className={`${styles['contact-right']}`}>
                        <h3>Email: bao.alex.le@gmail.com</h3>
                        <h3>Phone: 613 371-2299</h3>
                        <div className={`${styles['socials-container']}`}>
                            <div className={`${styles['social']} ${styles['insta']}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="currentWidth" height="currentHeight" fill="currentColor" className={`${styles['svg']}`} viewBox="0 0 16 16">
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </div>
                            <div className={`${styles['social']} ${styles['x']}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="currentWidth" height="currentHeight" fill="currentColor" className={`${styles['svg']}`} viewBox="0 0 16 16">
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                            </div>
                            <div className={`${styles['social']} ${styles['linkedin']}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="currentWidth" height="currentHeight" fill="currentColor" className={`${styles['svg']}`} viewBox="0 0 16 16">
                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*
            <div className={`${styles['footer-menu']} ${themeStyles}`}>
                <div className={`${styles['menu-container']} ${themeStyles}`}>
                    <div className={`${styles['contact']} ${styles['footer-menu-col']}`}>
                        <h3>Contact Me</h3>
                        <div className={`${styles['contact-items']}`}>
                            <p>bao.alex.le@gmail.com</p>
                            <p className={`${styles['mid']}`}>Phone: 613 371-2299</p>
                        </div>
                    </div>
                    <Link href='/' className={`${styles['footer-logo']}`}>
                        <Image src={logo.url} width={logo.width} height={logo.height} alt={logo.alt}/>
                    </Link>
                    <div className={`${styles['hours']} ${styles['footer-menu-col']}`}>
                        <h3>Onsite Hours</h3>
                        <div className={`${styles['hours-list']}`}>
                            <div>
                                <p>May, Jun, Sep, Oct</p>
                                <p>9am - 6pm</p>
                            </div>
                            <div className={`${styles['mid-hour']}`}>
                                <p>Jul, Aug</p>
                                <p>7am-8pm</p>
                            </div>
                            <div>
                                <p>Nov, Dev, Jan</p>
                                <p>Email/Facebook Only</p>
                            </div>
                            <div>
                                <p>Feb, Mar, Apr</p>
                                <p>Phone, Email, Facebook</p>
                            </div>
                        </div>
                        <div className={`${styles['socials']}`}>
                            <Link href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={`bi bi-facebook ${styles['facebook']}`} viewBox="0 0 16 16">
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </Link>
                            <Link href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={`bi bi-twitter ${styles['twitter']}`} viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </Link>
                            <Link href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={`bi bi-instagram ${styles['instagram']}`} viewBox="0 0 16 16">
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            */}
            <div className={`${styles['footer-info']} ${themeStyles}`}></div>
        </footer>
    );
}

type footerLink = {
    label: string;
    href: string;
}

type footerCategory = {
    title: string;
    links: footerLink[];
}

type footerInfo = {
    copyright: string;
    footerLinks: footerLink[];
}

type logo = {
    url: string;
    width: number;
    height: number;
    alt: string;
}