import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokedex}) {
  
  const cardList = pokedex.map((mon) => {
    return <PokemonCard key={mon.id} name={mon.name} hp={mon.hp} sprites={mon.sprites} />
  })

  
  return (
    <Card.Group itemsPerRow={6}>
      {cardList}
    </Card.Group>
  );
}

export default PokemonCollection;
