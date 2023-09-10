import Dexie from 'dexie';

export const db = new Dexie('ShopNookApp');
db.version(1).stores({
  items: '++id, title, img_url, descr, category, price, count, totalPrice',
});