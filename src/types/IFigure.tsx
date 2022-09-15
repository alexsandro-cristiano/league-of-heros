interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

interface Image {
  url: string;
}

export interface Figure {
  id: number;
  name: string;
  powerstats: Powerstats;
  image: Image;
}
