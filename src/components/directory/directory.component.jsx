import DirectoryItemComponent from '../directory-item/directory-itm.component';

import { DirectoryContainer } from './directory.style';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://m.media-amazon.com/images/I/81f1K0YN90L._UX569_.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://5.imimg.com/data5/HM/ZA/IY/SELLER-84868583/men-sneakers-shoes-500x500.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://images.meesho.com/images/products/17898117/fbdc9_512.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/shoot-4-1613046369.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItemComponent key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

