import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/pedroeduardo36.png"
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Andrade</strong>
            <span>Front end developer</span>
          </div>
        </div>

        <time
          title="publicado 10 de julho às 10:53"
          dateTime="2022-07-10  11:53:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galera</p>

        <p>Passando pra dizer que </p>

        <p>
          Estou vivendo algo muito melhor que meus sonhos, por conhecer a garota mais incrível
          do mundo!
        </p>

        <p>
          <a href="">Júlia, Eu te amo! 💜</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

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
  );
}
