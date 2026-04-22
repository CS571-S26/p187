// placeholder info for apartments (now with filter properties added)
const initialApartments = [
  {
    id: 1,
    name: "Sterling Hall",
    description: "This is where the lectures are held!",
    position: [43.07485030040818, -89.40508326978035],
    price: 1200,
    pets: false,
    parking: false,
    utilities: false,
    bedrooms: [1, 2], // 👈 multiple options
  },
  {
    id: 2,
    name: "Capitol",
    description: "The state Capitol building",
    position: [43.07478920055748, -89.38415535879386],
    price: 2000,
    pets: true,
    parking: true,
    utilities: true,
    bedrooms: [2, 3, 4],
  },
  {
    id: 3,
    name: "Camp Randall Stadium",
    description: "This is where opposing teams schedule easy games",
    position: [43.0702, -89.41303],
    price: 900,
    pets: true,
    parking: false,
    utilities: false,
    bedrooms: [1],
  },
];

export default initialApartments;