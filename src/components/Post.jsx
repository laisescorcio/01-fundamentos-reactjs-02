import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
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
                <p>Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                    <a href="">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

