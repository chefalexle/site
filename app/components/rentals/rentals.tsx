import Image from 'next/image';
import Link from 'next/link';
import styles from './rentals.module.css';

export default function Rentals({ children, rentalList, themeProps, direction }: {
    children?: React.ReactNode;
    rentalList: rentalData[];
    direction?: 'row' | 'column';
    themeProps?: {mode: 'desktop' | 'mobile', theme: 'light' | 'dark'};
}) {
    const mode = themeProps ? themeProps.mode : 'desktop';
    const theme = themeProps ? themeProps.theme : 'light';
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;
    
    const rentals = rentalList.reduce<JSX.Element[]>((acc, cur, index) => {
        acc.push(<Rental data={cur} index={index}></Rental>);
        return acc;
    }, []);

    return (
        <div className={`${styles['rentals']}`}>
            {rentals}
        </div>
    );
}

type rentalData = {
    id: string;
    imageURL: string;
    alt: string;
    cottageName: string;
    prices: number[];
    pricing: string[];
    href?: string;
    hrefLabel?: string;
    position?: string;
    fit?: string;
}

function Rental({ data, index, displayClass } : {
    data: rentalData;
    index: number;
    displayClass?: string;
}) {
    const url = data.imageURL;
    const alt = data.alt;

    const className = displayClass ? `${styles['gallery-card']} ${styles[displayClass]}` : `${styles['gallery-card']}`;
    const imageClass = data.fit ? `${styles['image']} ${styles[data.fit]}` : `${styles['image']}`;

    const prices = data.prices.reduce<JSX.Element[]>((acc, cur, index) => {
        acc.push(
            <div className={`${styles['price-container']}`} key={index}>
                <h2 className={`${styles['price']}`}>${cur}</h2>
                <p className={`${styles['price']}`}> /{data.pricing[index]}</p>
            </div>
        );
        return acc;
    }, []);

    return (
        <div className={`${styles['rental-container']}`}>
            <div className={`${styles['rental-card']}`}>
                <div className={`${styles['rental-image']}`}>
                    <div className={`${styles['image-container']}`}>
                        <Image className={`${styles['image']}`}  fill src={url} alt={alt}/>
                    </div>
                </div>
                <div className={`${styles['rental-info']}`}>
                    <h3>{data.cottageName}</h3>
                    <div className={`${styles['prices']}`}>
                        {prices}
                    </div>
                </div>
            </div>
        </div>
    );
};