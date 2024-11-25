import Banner from './components/banner/banner';
import Gallery from './components/gallery/gallery';
import Testimonials from './components/testimonials/testimonials';
import SimpleGallery from './components/psGallery/psGallery';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';
import { lexend, robotoFlex, noto } from './fonts';

import styles from './home.module.css';
import './global.css';

export const metadata: Metadata = {
    title: 'Chef Alex Le',
}

export default function Page() {
    
    return (
        <>
            <section className={`${styles['banner-section']}`}>
                <Banner url='/site/images/home/terrace.jpg' alt='Dining room at my workplace Terrace on the Green'>
                    <div className={`${styles['banner-container']}`}>
                        <div className={`${styles['portrait-container']} next-img-container shadow`}>
                            <Image className={`${styles['portrait-img']} next-img-cover next-img-center`} src='/site/images/home/portrait.jpg' alt='Self Portrait' fill></Image>
                        </div>
                        <div className={`${styles['title']}`}>
                            <h1>Alex Le</h1>
                            <p>Line Cook, Banquet Cook, Humber Polytechnic Culinary Management</p>
                        </div>
                    </div>
                </Banner>
            </section>


            <section className={`${styles['intro']} section`}>
                <div className={`${styles['intro-main']} main`}>

                    <div className={`${styles['lines-div']}`}>
                        <div className={`${styles['lines']}`}></div>
                        <h1>My Journey (so far)</h1>
                        <div className={`${styles['lines']}`}></div>
                    </div>

                    <p>As a mature student with a desire to learn as much as I can, I am eager to test myself 
                        in a challenging and demanding environment. Eventually I want to have the skills 
                        to freely express myself through food. 
                    </p>

                </div>
            </section>


            <section className={`${styles['totg']} section`}>
                <div className={`${styles['totg-main']} main`}>
                    <div className={`${styles['exp-flex']} flex`}>

                        <div className={`${styles['exp-img-container']} next-img-container shadow`}>
                            <Image className={`${styles['exp-img']} next-img-cover next-img-center`} src='/site/images/home/totg.webp' alt='totg logo' fill></Image>
                        </div>

                        <div className={`${styles['exp-text']} flex col`}>

                            <h3 className={lexend.className}>Terrace on the Green</h3>
                            <p className={`${styles['location']}`}>Brampton, ON</p>
                            <h4 className={robotoFlex.className}>Line & Banquet Cook, May 2024 - Present</h4>
                            
                            <p>After making a complete change in careers and pursuing the culinary field, one of my biggest questions was whether I could even find a job; and, if I did, would it be one where I could actually grow and gain meaningful experience from? I could not have asked for a better introduction to the field than Terrace on the Green. </p>

                            <p>Many of the opportunities I was given I would not have expected in the first few months of entering the field. The experiences and responsibilities I was given I am sure will prepare me for finding success in this difficult industry.</p>

                            <ul>
                                <li>&Agrave; la carte, parties & banquets (up to 400 people)</li>
                                <li>Garde manger, saut&eacute;, desserts, pizza, plating</li>
                                <li>Prepping, butchery, baking, charcuterie & fruit boards, dressings</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>


            <section className={`${styles['humber']} section`}>
                <div className={`${styles['humber-main']} main`}>
                    <div className={`${styles['exp-flex']} flex`}>

                        <div className={`${styles['exp-img-container']} next-img-container shadow`}>
                            <Image className={`${styles['exp-img']} next-img-cover next-img-center`} src='/site/images/home/humberlogo.png' alt='humber college logo' fill></Image>
                        </div>

                        <div className={`${styles['exp-text']} flex col`}>

                            <h3 className={lexend.className}>Humber Polytechnic</h3>
                            <p className={`${styles['location']}`}>Etobicoke, ON</p>
                            <h4 className={robotoFlex.className}>Culinary Management, September 2023 - Present</h4>

                            <p>Returning to school after such a long time was humbling. I did not know what to expect; but, I felt optimistic, like I had begun a new chapter in my life.</p>

                            <p>At Humber I was pushed by all the phenomenal chefs, each steeped in decades of experience and accomplishments. The most valuable thing when it comes to learning is having mentors who can pass on their invaluable knowledge.</p>

                            <p>On my 2 weeks study abroad in Italy and France I went on the trip of dreams for any aspiring cook. We visited some of the homes and production facilities of some of the most famous products in the world: Parmigiano Reggiano, balsamic vinegar, Parma ham, buffalo mozzarella.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles['uo']} section`}>
                <div className={`${styles['uo-main']} main`}>
                    <div className={`${styles['exp-flex']} flex`}>

                        <div className={`${styles['exp-img-container']} next-img-container shadow`}>
                            <Image className={`${styles['exp-img']} next-img-cover next-img-center`} src='/site/images/home/uottawa.png' alt='humber college logo' fill></Image>
                        </div>

                        <div className={`${styles['exp-text']} flex col`}>

                            <h3 className={lexend.className}>University of Ottawa</h3>
                            <p className={`${styles['location']}`}>Ottawa, ON</p>
                            <h4 className={robotoFlex.className}>Software Engineering, September 2015 - April 2017</h4>
                            
                            <p>Moving to Ottawa to live on my own and go to school was the most important developmental period of my life. I learned to feed myself, handle all of my own chores, and generally how to be a responsible, functioning adult.</p>

                            <p>Engineering school was difficult but I always excelled at mathematics, science, and problem solving. After a few years of being in this program, however, I realized that I wanted to do something else with my life, but wasn't sure what yet.</p> 

                            <p>So I left school and did some in-between jobs, and even continued software development independently creating websites for small businesses. The website was developed by me from the ground up, and is running from my home server!</p>

                            <p>Despite changing my focus to culinary arts, I don't think that what I learned in software development has gone to waste. In fact, I believe it will be one of the key things that will set me apart and make me a unique chef.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles['info']} section dark`}>
                <div className={`${styles['info-main']} main`}>

                    <div className={`${styles['info-title-container']}`}>
                        <div className={`${styles['lines']} ${styles['white-lines']}`}></div>
                        <h1 className={`${styles['info-title']} ${noto.className}`}>Learn more about me</h1>
                        <div className={`${styles['lines']} ${styles['white-lines']}`}></div>
                    </div>

                    <div className={`${styles['nav-grid']}`}>
                        <div className={`${styles['nav-item']}`}>
                            <div className={`${styles['nav-title-container']}`}>
                                <h2 className={`${styles['nav-title']}`}>R&eacute;sum&eacute;</h2>
                                <div className={`${styles['res-icon']}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28"  height="28" fill="green" className="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                    </svg>
                                </div>
                            </div>
                            <p>View my complete history of employment, education, and   certifications.</p>
                            <Link className={`book-button`} href='/hire'>
                                See My R&eacute;sum&eacute;
                            </Link>
                        </div>

                        <div className={`${styles['nav-item']}`}>
                            <div className={`${styles['nav-title-container']}`}>
                                <h2 className={`${styles['nav-title']}`}>Portfolio</h2>
                                <div className={`${styles['res-icon']}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28"  height="28" fill="yellow" className="bi bi-folder" viewBox="0 0 16 16">
  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>
                                    </svg>
                                </div>
                            </div>
                            <p>See my creations, as well as my adventures and experiences abroad.</p>
                            <Link className={`book-button`} href='/portfolio'>
                                See My Portfolio
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}