import Banner from "../components/banner/banner";
import Image from "next/image";
import Link from "next/link";
import Gallery from "../components/gallery/gallery";
import { Metadata } from "next";

import styles from './portfolio.module.css';

export const metadata: Metadata = {
    title: 'Chef Alex Le | Portfolio',
}

export default function Page() {

    return (
        <>
            <section className={`${styles['banner-section']}`}>
                <Banner url='/images/portfolio/tray.jpg' alt='Lyon, France'>
                    <div className={`banner-container`}>
                        <div className={`title`}>
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                </Banner>
            </section>


            <section className={`${styles['intro']} section`}>
                <div className={`${styles['intro-main']} main`}>

                    <div className={`${styles['lines-div']}`}>
                        <div className={`${styles['lines']}`}></div>
                        <h1>My Creations</h1>
                        <div className={`${styles['lines']}`}></div>
                    </div>

                    <p>Here are a few of the things I've made on my culinary journey.</p>

                </div>
            </section>


            <section className={`${styles['creations']} section`}>
                <div className={`${styles['creations-main']} main`}>
                    <div className={`${styles['gallery-container']}`}>
                        <Gallery galleryList={galleryData} grid={true}></Gallery>
                    </div>
                </div>
            </section>

            <section className={`${styles['abroad-banner-section']}`}>
                <Banner url='/images/portfolio/portfolio.jpg' alt='Lyon, France'>
                    <div className={`banner-container`}>
                        <div className={`title`}>
                            <h1>Italy & France Study Abroad</h1>
                            <h2 className={`${styles['abroad-h2']}`}>Food, production facilities, wineries, historic sites</h2>
                        </div>
                    </div>
                </Banner>
            </section>

            
            <section className={`${styles['creations']} section`}>
                <div className={`${styles['creations-main']} main`}>
                    <div className={`${styles['gallery-container']}`}>
                        <Gallery galleryList={abroadData} grid={true}></Gallery>
                    </div>
                </div>
            </section>
        </>
    )
}

const galleryData = [
    {
        id:'salmon',
        imageURL: '/images/portfolio/creations/encroute.jpg',
        alt: 'Salmon en croute',
        title: 'Salmon en Cro\xFBte',
        info: 'Russian salad, snap pea coulis',
        loc: 'Humber Polytechnic - Etobicoke, ON'
    },
    {
        id:'beets',
        imageURL: '/images/portfolio/creations/beets.jpg',
        alt: 'Golden Beet Carpaccio',
        title: 'Golden Beet Carpaccio',
        info: 'Sherry vinaigrette, roasted pecans, goat cheese',
        loc: 'Humber Polytechnic - Etobicoke, ON'
    },
    {
        id:'mullet',
        imageURL: '/images/portfolio/creations/mullet.jpg',
        alt: 'Red Mullet with Potato Scales',
        title: 'Seared Red Mullet',
        info: 'Potato scales, orange rosemary sauce, veal jus',
        loc: 'Institut Paul Bocuse - Lyon, FR'
    },
    {
        id:'truffle',
        imageURL: '/images/portfolio/creations/truffle.jpg',
        alt: 'Truffle Linguine',
        title: 'Truffle Linguine',
        info: 'Cremini mushrooms, parmigiano reggiano',
        loc: 'Terrace on the Green - Brampton, ON'
    },
    {
        id:'mussels',
        imageURL: '/images/portfolio/creations/mussel.jpg',
        alt: 'mussels',
        title: 'Steamed Mussels',
        info: 'Fennel pernod broth, vegetable julienne, dill',
        loc: 'Humber Polytechnic - Etobicoke, ON'
    },
    {
        id:'wonton',
        imageURL: '/images/portfolio/creations/wonton.jpg',
        alt: 'wonton',
        title: 'Wonton Noodle Soup',
        info: 'Egg noodle, shiitake mushroom, bok choy',
        loc: 'Home - Brampton, ON'
    },
]

const abroadData = [
    {
        id:'seabass',
        imageURL: '/images/portfolio/abroad/seabass.jpg',
        alt: 'Roasted seabass',
        title: 'Roasted Sea Bass',
        info: 'Pomme pur\xE9e, cherry tomato',
        loc: 'Rome, IT'
    },
    {
        id:'mozz',
        imageURL: '/images/portfolio/abroad/mozz.jpg',
        alt: 'Tomato Mozzarella',
        title: 'Cherry Tomato Buffalo Mozzarella',
        info: 'Fried basil, toasted breadcrumb',
        loc: 'Grosseto, IT'
    },
    {
        id:'Parm',
        imageURL: '/images/portfolio/abroad/parma.jpg',
        alt: 'Parm Factory',
        title: 'Parmigiano Reggiano Facility',
        loc: 'Parma, IT'
    },
    {
        id:'ham',
        imageURL: '/images/portfolio/abroad/ham.jpg',
        alt: 'Parma Ham Facility',
        title: 'Parma Ham Facility',
        loc: 'Parma, IT'
    },
    {
        id:'banfi',
        imageURL: '/images/portfolio/abroad/banfi.jpg',
        alt: 'banfi',
        title: 'Castello Banfi Winery',
        loc: 'Montalcino, IT'
    },
    {
        id:'balsamic',
        imageURL: '/images/portfolio/abroad/balsamic.jpg',
        alt: 'balsamic',
        title: 'Balsamic Vinegar of Modena',
        info: 'Aged 25 years',
        loc: 'Modena, IT'
    },
    {
        id:'cathedral',
        imageURL: '/images/portfolio/abroad/florence.jpg',
        alt: 'Florence Cathedral',
        title: 'Florence Cathedral',
        loc: 'Florence, IT'
    },
    {
        id:'fountain',
        imageURL: '/images/portfolio/abroad/fountain.jpg',
        alt: 'Trevi Fountain',
        title: 'Trevi Fountain',
        loc: 'Rome, IT'
    },
]