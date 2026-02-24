let informacoesCards = [
  {
    url: 'https://blog.sanavita.com.br/wp-content/uploads/2019/12/Imagem-Maca-1-1024x683_Easy-Resize.com_-1140x760-1.jpg',
    titulo: 'Maçã Frescas',
    subtitulo: 'Rica em vitamina C e vitaminas do complexo B.',
  },
  {
    url: 'https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/12/%E2%9C%85-BANNER-MYTH-61-2.png',
    titulo: 'Banana Naturais',
    subtitulo: 'Ricas em potássio e energia para o seu dia.',
  },
  {
    url: 'https://fsp.usp.br/eccco/wp-content/uploads/2022/09/sviatoslav-huzii-I497Uc8xWXQ-unsplash-scaled-e1664885131928-1200x951.jpg',
    titulo: 'Morangos Premium',
    subtitulo: 'Colhidos no ponto certo para você.',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9f8xw7lzBWZgGXWFC9D6SWhh-knhUcyGZrA&s',
    titulo: 'Manga Doce',
    subtitulo: 'Direto do pé para sua mesa.',
  },
];

let somar = (a, b) => {
  return a + b + subtrair(a, b);
};

let subtrair = (a, b) => {
  return a - b;
};

export default informacoesCards;
// export { informacoesCards, somar };
