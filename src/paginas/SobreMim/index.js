import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Lucas!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto Lucas"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver
        por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou no Centro Universitário Augusto
        Motta (UNISUAM), quando comecei a faculdade. 
      </p>

      <p className={styles.paragrafo}>
        Eu aprendi lógica de programação e o básico de várias linguagens por contra
        própria, como Python, JavaScript, CSS, mas sem aprofundar muito em cada uma delas.
      </p>

      <p className={styles.paragrafo}>
        Tive a oportunidade de ser contemplado pela alura e ganhei uma bolsa
        onde eu poderia estudar Fron-End ou Back-End. 
      </p>

      <p className={styles.paragrafo}>E cá estou eu estudando o Front-End hoje.</p>
    </PostModelo>
  );
}
