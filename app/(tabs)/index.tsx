import React, { useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-reanimated-carousel';

import {
  ScreenContainer,
  ScreenHeader,
  StoreCategoryRow,
  StoreFeaturedCarousel,
  StoreGameCard,
} from '@/components/ui';
import { Game, FeaturedGame, Category } from '@/types';

const { width: screenWidth } = Dimensions.get('window');

const FEATURED_GAMES: FeaturedGame[] = [
  {
    id: '101',
    title: 'Dead by Daylight',
    subtitle: 'Recommended by your friend, Player',
    discount: '-70%',
    oldPrice: '$18',
    newPrice: '$5',
  },
  {
    id: '102',
    title: 'Elden Ring',
    subtitle: 'New from FromSoftware',
    discount: '-30%',
    oldPrice: '$60',
    newPrice: '$42',
  },
  {
    id: '103',
    title: 'Cyberpunk 2077',
    subtitle: 'Open-world action RPG',
    discount: '-50%',
    oldPrice: '$60',
    newPrice: '$30',
  },
];

const CATEGORIES: Category[] = ['Top Sellers', 'Free to play', 'Early Access'];

const GAMES_BY_CATEGORY = {
  'Top Sellers': [
    {
      id: '1',
      title: 'Grand Theft Auto V',
      platform: 'Windows',
      discount: '-50%',
      oldPrice: '$20',
      newPrice: '$10',
    },
    {
      id: '2',
      title: 'Battlefield 4™',
      platform: 'Windows',
      discount: '',
      oldPrice: '',
      newPrice: '$35',
    },
    {
      id: '3',
      title: 'Factorio',
      platform: 'Windows, Mac',
      discount: '',
      oldPrice: '',
      newPrice: '$7',
    },
    {
      id: '4',
      title: 'Horizon Zero Dawn',
      platform: 'Windows',
      discount: '',
      oldPrice: '',
      newPrice: '$38',
    },
  ],
  'Free to play': [
    {
      id: '5',
      title: 'Dota 2',
      platform: 'Windows, Mac',
      discount: '',
      oldPrice: '',
      newPrice: 'FREE',
    },
    {
      id: '6',
      title: 'Apex Legends',
      platform: 'Windows',
      discount: '',
      oldPrice: '',
      newPrice: 'FREE',
    },
  ],
  'Early Access': [
    {
      id: '7',
      title: 'Baldur’s Gate 3',
      platform: 'Windows, Mac',
      discount: '-10%',
      oldPrice: '$60',
      newPrice: '$54',
    },
  ],
};

export default function StoreScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('Top Sellers');

  const gamesToDisplay = GAMES_BY_CATEGORY[selectedCategory];

  // Render the item in the <StoreFeaturedCarousel>
  const renderFeaturedItem = (item: FeaturedGame) => (
    <StoreFeaturedCarousel item={item} />
  );

  // Render each game in the list
  const renderGameItem = ({ item }: { item: Game }) => (
    <StoreGameCard item={item} />
  );

  return (
    <ScreenContainer>
      {/* 1) Header */}
      <ScreenHeader title="Store" />

      {/* 2) Featured Carousel */}
      <CarouselContainer>
        <Carousel
          width={screenWidth}
          height={220}
          data={FEATURED_GAMES}
          renderItem={({ item }) => renderFeaturedItem(item)}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          pagingEnabled
          snapEnabled
        />
      </CarouselContainer>

      {/* 3) Category Row */}
      <StoreCategoryRow
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 4) Game List */}
      <SectionTitle>Games</SectionTitle>
      <FlatList
        data={gamesToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderGameItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </ScreenContainer>
  );
}

/* -------------- STYLES -------------- */
const CarouselContainer = styled.View`
  margin-top: 12px;
`;

const SectionTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-left: 16px;
  margin-bottom: 6px;
`;
