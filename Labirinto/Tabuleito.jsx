import { useState } from "react";
import "./StyleTabuleiro.css";
import Celula from "./Celula";
import Personagem from "./Personagem";
import Objetivo from "../jogo/Objetivo";

export default function Tabuleiro({ jogador, objetivo }) {
  const num = 50;

  const initialArray = Array(num)
    .fill()
    .map(() => Array(num).fill("grass"));
  const [celula, setCelula] = useState(initialArray);

  const getRandomPosition = () => {
    return [Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)];
  };

  return (
    <div className="tabuleiro">
      {celula.map((linha, i) => {
        const tempo = linha.map((coluna, j) => {
          let bloco;
          if (i == jogador[0] && j == jogador[1]) {
            bloco = <Personagem />;
          } else {
            bloco = <Celula coords={[i, j]} />;
          }
          return bloco;
        });
        return <div className="linha">{tempo}</div>;
      })}
    </div>
  );
}
