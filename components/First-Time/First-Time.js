import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FirstTime() {
    return (
        <div className="container mx-12 flex flex-col items-center">
            <h1 className={styles.title}>First Time?</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Blandit porta accumsan
                nunc ac amet vitae. Mi vitae, arcu
                scelerisque cursus feugiat euismod eu
                elit tempor. Vitae vitae posuere ut
                semper rutrum. Nisl scelerisque sed
                aliquet mi amet.</p>
            <Link href="/first-time"><button className="bg-blue-400 hover:bg-blue-300 border p-4">Visit Us!</button></Link>
        </div >
    )
}