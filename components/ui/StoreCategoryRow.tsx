import React from 'react';
import styled from 'styled-components/native';
import { Category } from '@/types';

interface Props {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
}

export function StoreCategoryRow({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <CategoryRow>
      {categories.map((cat) => {
        const active = cat === selectedCategory;
        return (
          <CategoryButton
            key={cat}
            onPress={() => onSelectCategory(cat)}
            style={{ backgroundColor: active ? '#3B3F54' : '#2F3445' }}
          >
            <CategoryButtonText style={{ opacity: active ? 1 : 0.7 }}>
              {cat}
            </CategoryButtonText>
          </CategoryButton>
        );
      })}
    </CategoryRow>
  );
}

const CategoryRow = styled.View`
  flex-direction: row;
  padding: 0 16px;
  margin-bottom: 10px;
`;

const CategoryButton = styled.TouchableOpacity`
  border-radius: 16px;
  padding: 6px 16px;
  margin-right: 8px;
`;

const CategoryButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;
