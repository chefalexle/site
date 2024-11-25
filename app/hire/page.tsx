import Banner from "../components/banner/banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import styles from './hire.module.css';

export const metadata: Metadata = {
    title: 'Chef Alex Le | Hire Me',
}

export default function Page() {

    return (
        <>
            <section className={`${styles['banner-section']}`}>
                <Banner url='/site/images/hire/kitchen.webp' alt='hire me kitchen'>
                    <div className={`banner-container`}>
                        <div className={`title`}>
                            <h1>Hire Me</h1>
                        </div>
                    </div>
                </Banner>
            </section>

            <section className={`${styles['intro']} section`}>
                <h1 className={`${styles['intro-title']}`}>R&eacute;sum&eacute;</h1>
                <div className={`${styles['resume-container']} next-img-container`}>
                    <Image className={`${styles['resume']} next-img-contain next-img-center`} src='/site/images/hire/resume.jpg' alt='Alex Le Resume' fill></Image>
                </div>
            </section>
            
            <section className={`${styles['intro']} section`}>
                <h1 className={`${styles['intro-title']}`}>Sample Cover Letter</h1>
                <div className={`${styles['resume-container']} next-img-container`}>
                    <Image className={`${styles['resume']} next-img-contain next-img-center`} src='/site/images/hire/cover.jpg' alt='Alex Le Resume' fill></Image>
                </div>
            </section>
            
            <section className={`${styles['intro']} section`}>
                <h1 className={`${styles['intro-title']}`}>Sample Thank You Letter</h1>
                <div className={`${styles['resume-container']} next-img-container`}>
                    <Image className={`${styles['resume']} next-img-contain next-img-center`} src='/site/images/hire/ty.jpg' alt='Alex Le Resume' fill></Image>
                </div>
            </section>
        </>
    )
}