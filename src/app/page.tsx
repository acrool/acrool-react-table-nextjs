import styles from "./page.module.css";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className={styles.main}>


      <div className={styles.center}>
        <Table
            title={{
              name:   {text: 'Title', col: 140},
              desc:   {text: 'Text', col: true},
            }}
            data={[
              {id: 1, field: {name: 'Image Chiu', desc: 'this is a frontend coder'}},
              {id: 2, field: {name: 'Gary Chien', desc: 'this is a backend coder'}},
            ]}
        />
      </div>


    </main>
  );
}
