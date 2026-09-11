import React from 'react';
import { ProductCategoryCard, ProductCategoryData } from './ProductCategoryCard';

interface Props {
  categories: ProductCategoryData[];
  onSelectCategory: (category: ProductCategoryData) => void;
}

export const ProductCategoryGrid: React.FC<Props> = ({ categories, onSelectCategory }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '56px',
      }}
    >
      {categories.map((cat) => (
        <ProductCategoryCard
          key={cat.id}
          category={cat}
          onClick={() => onSelectCategory(cat)}
        />
      ))}
    </div>
  );
};
