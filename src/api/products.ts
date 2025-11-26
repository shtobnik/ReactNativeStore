// Це тимчасовий мок поки немає бекенда

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Nike Air Max 270',
    price: 180,
    image:
      'https://yesoriginal.com.ua/media/cache/catalog/products/e1/2b/a3/90188247-0-670x705_-jpg-84.webp',
  },
  {
    id: '2',
    title: 'Apple AirPods Pro',
    price: 249,
    image: 'https://images.prom.ua/4559284252_w1280_h640_4559284252.jpg',
  },
  {
    id: '3',
    title: 'Samsung Galaxy Watch',
    price: 299,
    image: 'https://content.rozetka.com.ua/goods/images/big/449499662.jpg',
  },
];
