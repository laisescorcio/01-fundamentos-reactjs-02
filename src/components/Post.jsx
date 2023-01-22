import { format, formatDistanceToNow } from 'date-fns' // Biblioteca para formatar Data e Hora
import ptBR from 'date-fns/locale/pt-BR' // para formatar Data e Hora
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
export function Post({ author, publishedAt }) {

// DATA E HORA
    // formatar data em extenso, exemplo: 20 de janeiro às 20:00h
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale: ptBR
    })

    // compara a data de publicação com a data atual e adiciona o sufix 'há', exemplo: há 8 dias
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
// DATA E HORA



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    { publishedDateRelativeToNow }
                </time>
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

