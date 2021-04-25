// function to returs a required random gift from computer memory
export default function getRandomGift() {
  const listGifts = [
    require('../assets/gifts/celular.jpg'),
    require('../assets/gifts/cesta.jpg'),
    require('../assets/gifts/fone.jpg'),
    require('../assets/gifts/malbec.jpg'),
    require('../assets/gifts/vinho.jpg'),
  ];

  const index = Math.floor(Math.random() * listGifts.length);

  return listGifts[index];
}