import styles from './testimonials.module.css';

export default function Testimonials({ testimonials }: {
    testimonials: testimonial[];
}) {
    const ratingList = testimonials.map(testimonial => {
        const rating = testimonial.rating > 5 ? 5 : testimonial.rating;
        const name = testimonial.name;
        const text = testimonial.text;

        const ratingString = '\u272A'.repeat(rating);

        return (
            <div className={`${styles['testimonial']}`}>
                <p className={`${styles['rating']}`}>{ratingString}</p>
                <div className={`${styles['text']}`}>
                    {text}
                </div>
                <p className={`${styles['name']}`}>-{name}</p>
            </div>
        );
    });

    return (
        <div className={`${styles['testimonials']}`}>
            {ratingList}
        </div>
    )
}

type testimonial = {
    rating: number;
    name: string;
    text: React.ReactNode;
}