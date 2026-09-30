```jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import PlantCard from '../components/PlantCard';
import './ProductListingPage.css';

import snakePlantImg from '../assets/snake-plant.jpg';
import spiderPlantImg from '../assets/spider-plant.jpg';
import lavenderImg from '../assets/lavender.jpg';
import rosemaryImg from '../assets/rosemary.jpg';
import fiddleLeafFigImg from '../assets/fiddle-leaf-fig.jpg';
import aloeVeraImg from '../assets/aloe-vera.jpg';

import Header from '../components/Header';

// Plant products are divided into three categories.
// Each category contains at least six unique plants.
const plants = [
  // Air Purifying Plants
  {
    id: 1,
    category: 'Air Purifying',
    name: 'Snake Plant',
    price: 15,
    thumbnail: snakePlantImg,
  },
  {
    id: 2,
    category: 'Air Purifying',
    name: 'Spider Plant',
    price: 12,
    thumbnail: spiderPlantImg,
  },
  {
    id: 3,
    category: 'Air Purifying',
    name: 'Peace Lily',
    price: 18,
    thumbnail:
      'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500',
  },
  {
    id: 4,
    category: 'Air Purifying',
    name: 'Boston Fern',
    price: 16,
    thumbnail:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500',
  },
  {
    id: 5,
    category: 'Air Purifying',
    name: 'Rubber Plant',
    price: 22,
    thumbnail:
      'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=500',
  },
  {
    id: 6,
    category: 'Air Purifying',
    name: 'Areca Palm',
    price: 25,
    thumbnail:
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500',
  },

  // Aromatic Plants
  {
    id: 7,
    category: 'Aromatic',
    name: 'Lavender',
    price: 10,
    thumbnail: lavenderImg,
  },
  {
    id: 8,
    category: 'Aromatic',
    name: 'Rosemary',
    price: 8,
    thumbnail: rosemaryImg,
  },
  {
    id: 9,
    category: 'Aromatic',
    name: 'Basil',
    price: 9,
    thumbnail:
      'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=500',
  },
  {
    id: 10,
    category: 'Aromatic',
    name: 'Mint',
    price: 7,
    thumbnail:
      'https://images.unsplash.com/photo-1628430044260-7c2e6c3c3b3b?w=500',
  },
  {
    id: 11,
    category: 'Aromatic',
    name: 'Thyme',
    price: 8,
    thumbnail:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500',
  },
  {
    id: 12,
    category: 'Aromatic',
    name: 'Oregano',
    price: 9,
    thumbnail:
      'https://images.unsplash.com/photo-1610557892470-ae9e6e9f1d5d?w=500',
  },

  // Ornamental Plants
  {
    id: 13,
    category: 'Ornamental',
    name: 'Fiddle Leaf Fig',
    price: 20,
    thumbnail: fiddleLeafFigImg,
  },
  {
    id: 14,
    category: 'Ornamental',
    name: 'Aloe Vera',
    price: 18,
    thumbnail: aloeVeraImg,
  },
  {
    id: 15,
    category: 'Ornamental',
    name: 'Monstera',
    price: 24,
    thumbnail:
      'https://images.unsplash.com/photo-1614594575920-a7a2f9c0f0b0?w=500',
  },
  {
    id: 16,
    category: 'Ornamental',
    name: 'Calathea',
    price: 21,
    thumbnail:
      'https://images.unsplash.com/photo-1600411832986-5a4477aa73b4?w=500',
  },
  {
    id: 17,
    category: 'Ornamental',
    name: 'ZZ Plant',
    price: 19,
    thumbnail:
      'https://images.unsplash.com/photo-1617191518000-4a1d5b0d3b2e?w=500',
  },
  {
    id: 18,
    category: 'Ornamental',
    name: 'Chinese Evergreen',
    price: 17,
    thumbnail:
      'https://images.unsplash.com/photo-1597055181300-7a8f3c7a6f3d?w=500',
  },
];

const categories = [
  'Air Purifying',
  'Aromatic',
  'Ornamental',
];

const ProductListingPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-listing-page">
      <Header />

      <div className="products">
        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section className="plant-category" key={category}>
              <h2>{category} Plants</h2>

              <div className="plant-cards">
                {categoryPlants.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onAddToCart={() => addToCart(plant)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
```
