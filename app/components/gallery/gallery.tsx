import Image from 'next/image';
import Link from 'next/link';
import styles from './gallery.module.css';

export default function Gallery({ children, galleryList, grid=false, themeProps, direction, justify }: {
    children?: React.ReactNode;
    galleryList: cardData[];
    grid?: boolean;
    direction?: 'row' | 'column';
    themeProps?: {mode: 'desktop' | 'mobile', theme: 'light' | 'dark'};
    justify?: 'between';
}) {
    const mode = themeProps ? themeProps.mode : 'desktop';
    const theme = themeProps ? themeProps.theme : 'light';
    const themeStyles = `${styles[mode]} ${styles[theme]} ${mode} ${theme}`;

    let className = grid ? `${styles['grid']}` : `${styles['gallery']}`;
    if (direction) className += ` ${styles[direction]}`;
    if (justify) className += ` ${styles[justify]}`;

    const gallery = galleryList.reduce<JSX.Element[]>((acc, cur, index) => {
        acc.push(<GalleryCard data={cur} index={index}></GalleryCard>);
        return acc;
    }, []);

    return (
        <div className={className}>
            {gallery}
        </div>
    );
}

type cardData = {
    id: string;
    imageURL: string;
    alt: string;
    title?: string;
    info?: string | React.ReactNode;
    loc?: string;
    href?: string;
    hrefLabel?: string;
    position?: string;
    fit?: string;
}

function GalleryCard({ data, index, displayClass } : {
    data: cardData;
    index: number;
    displayClass?: string;
}) {
    const url = data.imageURL;
    const alt = data.alt;

    const className = displayClass ? `${styles['gallery-card']} ${styles[displayClass]}` : `${styles['gallery-card']}`;
    const imageClass = data.fit ? `${styles['image']} ${styles[data.fit]}` : `${styles['image']}`;

    return (
        <div className={className}>
            <div id={data.id} className={`${styles['gallery-image']}`}>
                <Image className={imageClass} fill src={url} alt={alt}/>
            </div>
            <div className={`${styles['gallery-text']}`}>
                { data.title
                    ? <h3>{data.title}</h3>
                    : null
                }
                <div className={`${styles['info']}`}>
                    { data.info
                        ? typeof data.info === 'string' ? <p>{data.info}</p> : data.info
                        : null
                    }
                    { data.href
                        ? <Link className={`${styles['read-more']}`} href={data.href ? data.href : '/'}>{data.hrefLabel ? data.hrefLabel : 'Read more'}</Link>
                        : null
                    }
                </div>
                <p className={`${styles['loc']}`}>{data.loc}</p>
            </div>
        </div>
    );
};