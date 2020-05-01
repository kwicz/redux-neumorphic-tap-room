import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();
const id4 = v4();
const id5 = v4();
const id6 = v4();

export default masterKegList = {
  [id1]: {
    name: "Banana Belgium Ale",
    brand: "Solovewicz Brewing",
    description: "Fruity, but in a canine kind of way.",
    alcoholContent: "4%",
    price: 5,
    remainingPints: 0,
    key: id1,
    id: id1
  },
  [id2]: {
    name: "Sneaky Sasquatch Stout",
    brand: "Bigfoot Fermentorium",
    description: "Pungent.",
    alcoholContent: "8%",
    price: 11,
    remainingPints: 124,
    key: id2,
    id: id2
  },
  [id3]: {
    name: "Calvin & Hobbes Pale Ale",
    brand: "Watterson Werks",
    description: "Blonde with notes of childhood.",
    alcoholContent: "5%",
    price: 6,
    remainingPints: 124,
    key: id3,
    id: id3
  },
  [id4]: {
    name: "Goat Lords Cider",
    brand: "Wild Animal Werks",
    description: "Maaahhhhy favorite cider.",
    alcoholContent: "4%",
    price: 5,
    remainingPints: 124,
    key: id4,
    id: id4
  },
  [id5]: {
    name: "Dinosaur Double IPA",
    brand: "Limited Edition.  Try it before it goes exctinct.",
    description: "RAWR.",
    alcoholContent: "9%",
    price: 8,
    remainingPints: 124,
    key: id5,
    id: id5
  },
  [id6]: {
    name: "Mary Poppins Kombucha",
    brand: "Sister Suffragettes, inc.",
    description: "Nearly perfect in every way.",
    alcoholContent: "3%",
    price: 7,
    remainingPints: 124,
    key: id6,
    id: id6
  }
}