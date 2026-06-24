import { Header } from "./components/Header";
import { PokeCard } from "./components/PokeCard";
import { SideNav } from "./components/SideNav";

import { useState } from "react";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);


  return (
    <>
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
      <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

