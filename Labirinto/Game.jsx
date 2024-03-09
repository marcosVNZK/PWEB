"use client";
import React, { useState, useEffect } from "react";
import "./StyleGame.css";
import Tabuleiro from "./Tabuleito";

export default function Game() {
  const getRandomPosition = () => {
    return [Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)];
  };

  const [playerPosition, setPlayerPosition] = useState([0, 0]);
  const [Objetivo, setObjetivo] = useState(getRandomPosition());
  const [moves, setMoves] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setPlayerPosition([playerPosition[0] - 1, playerPosition[1]]);
      setMoves(moves + 1);
    } else if (e.key === "ArrowDown") {
      setPlayerPosition([playerPosition[0] + 1, playerPosition[1]]);
      setMoves(moves + 1);
    } else if (e.key === "ArrowLeft") {
      setPlayerPosition([playerPosition[0], playerPosition[1] - 1]);
      setMoves(moves + 1);
    } else if (e.key === "ArrowRight") {
      setPlayerPosition([playerPosition[0], playerPosition[1] + 1]);
      setMoves(moves + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPosition, moves]);

  useEffect(() => {
    if (playerPosition[0] === Objetivo[0] && playerPosition[1] === Objetivo[1]) {
      alert("Você conseguiu!");
      setPlayerPosition(getRandomPosition());
      setObjetivo(getRandomPosition());
      setMoves(0);
    }
  }, [playerPosition, Objetivo]);

  return (
    <div className="game">
      <p className="contagem">Contagem:{moves}</p>
      <Tabuleiro jogador={playerPosition} objetivo={Objetivo} />
    </div>
  );
}
