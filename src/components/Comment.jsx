import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="http://github.com/pedroeduardo36.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Andrade</strong>
              <time
                title="publicado 10 de julho às 10:53"
                dateTime="2022-07-10  11:53:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={20}/>
            </button>
          </header>

          <p>Muito Pedro, parabéns!</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
