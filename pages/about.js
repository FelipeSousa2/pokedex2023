import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Com o auge dos jogos Pokémon Red e Pokémon Green, lançados no ano de
        1996 no Japão, não demorou muito para que sua versão animada fosse
        lançada e aumentada ainda mais a febre da franquia dos monstrinhos de
        bolso pelo mundo. Estreado em 1997, a série de anime Pocket Monsters (ou
        Pokémon: A Série, no ocidente) atualmente conta com mais de mil
        episódios divididos em 23 temporadas e 7 séries principais: Pokémon,
        Geração Avançada, Diamante e Pérola, Preto e Branco (Best Whishes, no
        Japão), XY, Sol e Lua, e Jornadas (chamada simplesmente de Pocket
        Monsters, no Japão). Durante todos esses anos a história segue o garoto
        de 10 anos, Ash Ketchum, e seu parceiro Pikachu na sua jornada para se
        tornar um Mestre Pokémon.
      </p>
      <Image
        src="/images/pikachu.png"
        width={370}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
