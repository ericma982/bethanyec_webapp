import styles from '../styles/Home.module.css'

export default function Sermon() {
    return (
        <div>
            <h1 className={styles.title}>Sermon Playlist</h1>

            <iframe id="youtube_video" width="426" height="240"
                src="https://youtube.com/embed/videoseries?list=UUkvII64ZVHjt2FJF8-kASjA&amp;showinfo=0"
                style={{ display: "block;", marginLeft: "auto;", marginRight: "auto;", maxWidth: "100%;" }}></iframe>

        </div >
    )
}