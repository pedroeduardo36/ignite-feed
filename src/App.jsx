import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro Andrade"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic velit minima dignissimos ducimus iure a! Asperiores, error! Nam, saepe eaque reiciendis corporis distinctio nulla similique aliquam ipsam alias molestias."
          />
        </main>
      </div>
    </div>
  );
}
