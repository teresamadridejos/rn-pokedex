export type PokeTypes =
  | "normal"
  | "fighting"
  | "flying"
  | "ground"
  | "poison"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export const background: { [key in PokeTypes]: string } = {
  normal: "#77b14e",
  fighting: "#884eb1",
  flying: "#aed095",
  ground: "#95cbd0",
  poison: "#b14e90",
  rock: "#c5e817",
  bug: "#a495d0",
  ghost: "#27e1ce",
  steel: "#a495d0",
  fire: "#d6ec78",
  water: "#f1749e",
  grass: "#8bd7d1",
  electric: "#F9CF30",
  psychic: "#45edc3",
  ice: "#9AD6DF",
  dragon: "#4e77b1",
  dark: "#f1749e",
  fairy: "#b14e4e",
  unknown: "#526677",
  shadow: "#edd145",
};