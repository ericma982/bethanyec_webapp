import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Hero() {
    return (
        <div className="relative max-width-full h-2/4 w-full m-12">
            <Image
                src="/images/IMG_1867.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}