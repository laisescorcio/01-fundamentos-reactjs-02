import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://avatars.githubusercontent.com/u/61030205?v=4" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Laís Escorcio</strong>
                        <span>Tech Lead</span>
                    </div>
                </div>

                <time dateTime="2023-05-11 08:13:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉 <a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="">#rocketseat </a>
                </p>
            </div>

            {/* <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea />
            </form> */}
        </article>
    )
}

