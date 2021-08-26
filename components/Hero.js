import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Hero() {
    return (
        <>
            <div className="relative max-width-full h-1/2 w-full m-12">
                <Image
                    src="/images/IMG_1867.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <h1 className={styles.title}>
                {"Welcome to Bethany English Congregation"}
            </h1>

            <p className={styles.description}>
                {"We're glad you're here."}
            </p>
        </>

    )
}