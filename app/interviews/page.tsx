import Banner from "../components/banner/banner";
import Image from "next/image";
import Link from "next/link";
import Gallery from "../components/gallery/gallery";
import { Metadata } from "next";

import styles from './interviews.module.css';

export const metadata: Metadata = {
    title: 'Chef Alex Le | Interviews',
}

export default function Page() {

    return (
        <>
            <section className={`${styles['banner-section']}`}>
                <Banner url='/images/interviews/dining.webp' alt='Lyon, France'>
                    <div className={`banner-container`}>
                        <div className={`title`}>
                            <h1>Interviews</h1>
                        </div>
                    </div>
                </Banner>
            </section>


            <section className={`${styles['intro']} section`}>
                <div className={`${styles['intro-main']} main`}>

                    <div className={`${styles['lines-div']}`}>
                        <div className={`${styles['lines']}`}></div>
                        <h1>Top 10 Interview Tips</h1>
                        <div className={`${styles['lines']}`}></div>
                    </div>
                    
                    
                    <ol>
                        <li>Tell real stories</li>
                        <li>Be genuine, honest</li>
                        <li>Be confident, have your own needs and make them clear</li>
                        <li>Show up to your interview early</li>
                        <li>Dress business casual, ironed shirt (take a shower)</li>
                        <li>Research the business and ask questions based on what you found</li>
                        <li>Print out enough r&eacute;sum&eacute;s for each interviewer</li>
                        <li>Have good eye contact and focus on each interviewer</li>
                        <li>Don't lie on your r&eacute;sum&eacute;, be able to support all you points</li>
                        <li>If you're caught off guard, relax and take a moment to think</li>
                    </ol>

                </div>
            </section>

            <section className={`${styles['intro']} section`}>
                <div className={`${styles['intro-main']} main`}>

                    <div className={`${styles['lines-div']}`}>
                        <div className={`${styles['lines']}`}></div>
                        <h1>10 Interview Q&As</h1>
                        <div className={`${styles['lines']}`}></div>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>1. Describe a time when you took initiative when no one else would</p>
                        <p className={`${styles['a']}`}>One day at work we had two events going on as well as a la carte orders. I was making salads for the two parties as usual, but I found out that nobody was doing the pasta course for the second party. I asked the chef what was in the pasta sauce which I made along with cooking the pasta. I did this while making the salads for the first party and was able to send out salads for party 1, pasta for party 2, and then salads for party 2 all on my own.</p>
                    </div>

                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>2. What goal did you have at your job and how did you achieve it?</p>
                        <p className={`${styles['a']}`}>My goal at my current job is to learn everything I can and master it. I started off on garde manger and 3 months into my job the chef began training me on the sauté station making things like pasta, risotto, hot appetizers. My next step after being fully trained and proficient on the pans is to learn the grill.</p>
                    </div>

                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>3. Tell me a time you dealt with a conflict with another person</p>
                        <p className={`${styles['a']}`}>When one of the servers who was in charge of an event talked to me about how he wasn’t happy with the amount of time it took for the food to go out, I first made sure not to get emotionally or personally invested in the situation. I talked in an understanding but stern tone and made it clear I was on their team and wanting to find a solution together. I pointed out how I was dealing with many different things and that I wasn’t informed early enough about when to begin preparing their dishes, and included comments about how I could have been faster by getting help from others.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>4. What is your greatness weakness?</p>
                        <p className={`${styles['a']}`}>My greatest weakness is that I always try to do too much. I’m confident in my ability to step up and handle what’s needed but sometimes I take on more than I should. For instance, during service whether I’m on the line or handling events. I’m inclined to assist others when they need a hand. A lot of the time I can pick up the pace and afford to help them without disrupting my own tasks. Lately I’ve been more inclined to say no to people asking for help when I have my own tasks to prioritize.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>5. Give an example of how you used critical thinking to solve a problem</p>
                        <p className={`${styles['a']}`}>One night when I was working on the saute station we had a lot of orders come in at once. I had only begun working that station and it wasn’t second nature to me. I first looked at all the orders and identified what was the main priority. In this case it was a French onion soup as it was a standalone order, so just started moving on it so I wasn’t just standing around. Most of the other orders were mains which I had to make pastas for but each one also had steaks that would take time, so I knew I didn’t have to start with those yet. As I did the French onion, I took that time to plan out what to do next based on the orders that came in.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>6. Describe how you took a leadership role</p>
                        <p className={`${styles['a']}`}>Recently at work we’ve picked up two new, young cooks. During events I’ve taken it upon myself to train them and give them advice. We recently did an event of 180 but only had tables to setup 60 plates. I had one of the new cooks help me plate all the desserts but also told him how we had to cycle through each layer of plates and how we would consolidate with front of house to get all 180 plates out as quickly as possible. First we did 60 plates and put them on trays and stored them in a fridge. We did another 60 plates, and I told him how we would wait until the servers took those plates so we could do the plates stacked below them. And by the time the servers got through those plates and the ones in the fridge, we had prepared the final 60 desserts.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>7. What is your greatest strength?</p>
                        <p className={`${styles['a']}`}>My greatest strength is that I work hard and constantly try to improve. I think critically about my own performance and use reason and logic to understand how I can improve. I don’t think anyone becomes great at anything overnight. It takes years of practice and learning. I don’t worry about the mistakes I make, I only think about what I could have done better and remember for next time.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>8. Why are you looking for a new job?</p>
                        <p className={`${styles['a']}`}>I’ve learned as much as I could for me previous job and I’m looking for a new set of challenges. I think I’ve spent the optimal amount of time to learn as much as possible from that job without overstaying and stagnating.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>9. What do you want to accomplish here?</p>
                        <p className={`${styles['a']}`}>I’m looking to take on more responsibilities. I know that as a hotel you hand large parties often so I want to take my knowledge in serving banquets to the next level.</p>
                    </div>
                    
                    <div className={`${styles['qa']}`}>
                        <p className={`${styles['q']}`}>10.	What is your favourite thing about your old job?</p>
                        <p className={`${styles['a']}`}>My favourite part about my old job was how the chef there allowed me to grow and develop. Any task in the kitchen he would be willing to give me the chance to learn and gave me freedom in implementing my own ideas. The chef trusted me and gave me a lot of responsibility despite my short time there and I was very grateful for that.</p>
                    </div>

                </div>
            </section>
        </>
    )
}