import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'

export default function Sermon() {
    return (
        <div className="flex flex-col items-center">
            <h1 className={styles.title}>Sermon Playlist</h1>

            <ReactPlayer
                url={"https://youtube.com/embed/videoseries?list=UUkvII64ZVHjt2FJF8-kASjA&amp;showinfo=0"}
                controls="true"
                width="75%"
            />

        </div >
    )
}