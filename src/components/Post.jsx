import { format, formatDistanceToNow } from 'date-fns' // Biblioteca para formatar Data e Hora
import ptBR from 'date-fns/locale/pt-BR' // para formatar Data e Hora
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
export function Post({ author, publishedAt, content }) {

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
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
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

