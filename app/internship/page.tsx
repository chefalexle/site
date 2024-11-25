import Banner from "../components/banner/banner";
import Image from "next/image";
import Link from "next/link";
import Gallery from "../components/gallery/gallery";
import { Metadata } from "next";

import styles from './internship.module.css';

export const metadata: Metadata = {
    title: 'Chef Alex Le | Internship',
}

export default function Page() {

    return (
        <>
            <section className={`${styles['banner-section']}`}>
                <Banner url='/site/images/internship/dining.jpg' alt='Lyon, France'>
                    <div className={`banner-container`}>
                        <div className={`title`}>
                            <h1>Internship</h1>
                        </div>
                    </div>
                </Banner>
            </section>


            <section className={`${styles['intro']} section`}>
                <div className={`${styles['intro-main']} main`}>

                    <div className={`${styles['lines-div']}`}>
                        <div className={`${styles['lines']}`}></div>
                        <h1>My Internship Plan</h1>
                        <div className={`${styles['lines']}`}></div>
                    </div>

                    <p className={`${styles['p']}`}>For my upcoming internship in January of 2024, I am looking to learn and apply new skills in a fresh environment. I would like to test myself in a high volume, high quality &agrave; la carte restaurant or further explore my experience as a banquet cook at a hotel. Ideally my place of internship will:</p>

                    <ul>
                        <li>Teach me new practical cooking techniques</li>
                        <li>Allow me to apply such techniques in a demanding environment</li>
                        <li>Give me an insight into aspects of kitchen management</li>
                    </ul>


                </div>
            </section>

            
            <section className={`${styles['intro']} section`}>
                <div className={`${styles['intro-main']} main`}>
                    
                    <div className={`${styles['lines-div']}`}>
                        <div className={`${styles['lines']}`}></div>
                        <h1>Locations of Interest</h1>
                        <div className={`${styles['lines']}`}></div>
                    </div>

                    <p className={`${styles['p']}`}>Just like anyone with high aspirations I would take any chance to work at the apex of my chosen career, and if I was offered an internship at a michelin starred restaurant or globally recognized hotel I would take the offer in a heartbeat. However, as ambitious as I may be, I have learned through experience to temper my expectations and be grateful at any given opportunity.</p>
                        
                    <p className={`${styles['p']}`}>With nothing but 3 semesters of culinary school and less than a year of experience, there is so much for me to learn that practically anywhere I go I will have much to learn. With that being said, if it were completely up to me here are some of the places I would be interested in interning.</p>

                    
                    <div className={`${styles['gallery-container']}`}>
                        <Gallery galleryList={internData} grid={true}></Gallery>
                    </div>
                </div>
            </section>
        </>
    )
}

const internData = [
    {
        id:'alo',
        imageURL: '/site/images/internship/locations/alo.jpg',
        alt: 'alo',
        title: 'Alo',
        loc: 'Toronto, ON'
    },
    {
        id:'ritz',
        imageURL: '/site/images/internship/locations/ritz.webp',
        alt: 'ritz',
        title: 'The Ritz-Carlton',
        loc: 'Toronto, ON'
    },
    {
        id:'yokai',
        imageURL: '/site/images/internship/locations/yokai.png',
        alt: 'yokai',
        title: 'Yokai Izakaya',
        loc: 'Woodbridge, ON'
    },
    {
        id:'edulis',
        imageURL: '/site/images/internship/locations/edulis.jpg',
        alt: 'edulis',
        title: 'Edulis',
        loc: 'Toronto, ON'
    },
    {
        id:'scadda',
        imageURL: '/site/images/internship/locations/scadda.jpg',
        alt: 'scadda',
        title: 'Scaddabush',
        loc: 'Mississauga, ON'
    },
    {
        id:'royal',
        imageURL: '/site/images/internship/locations/royal.jpg',
        alt: 'royal',
        title: 'Fairmont Royal York',
        loc: 'Toronto, ON'
    },
]