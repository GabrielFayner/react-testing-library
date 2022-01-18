import React, { useState } from "react";
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="App">
      {selectedPokemon && <div>Seu Pokemon: {selectedPokemon}</div>}
      <Dropdown
        title="Selecione seu Pokémon inicial"
        options={["Pikachu", "Charizard", "Rayquasa"]}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
