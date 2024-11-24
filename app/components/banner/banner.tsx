import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner({ children, url, alt, imageClass, themeProps }: {
    children?: React.ReactNode;
    url: string;
    alt: string;
    imageClass?: string[];
    themeProps?: {mode: 'desktop' | 'mobile', theme: 'light' | 'dark'};
}) {
    const mode = themeProps ? themeProps.mode : 'desktop';
    const theme = themeProps ? themeProps.theme : 'light';
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;
    
    const classes = imageClass?.reduce((acc, cur) => {
        return acc + `${styles[cur]}`;
    }, ``);

    return (
        <div className={`${styles['banner']} ${styles[mode]} ${styles[theme]}`}>
            <Image className={`${styles['image']} ${classes}`} src={url} alt={alt} fill/>
            {children}
        </div>
    );
}