import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { ScreenContainer, ScreenHeader } from '@/components/ui';
import { CommunityFilterRow, CommunityPostCard } from '@/components/ui';
import { FilterType, Post } from '@/types';

const FILTERS: FilterType[] = ['All', 'Screenshots', 'Artwork', 'Workshop'];

const POSTS: Post[] = [
  {
    id: '1',
    user: 'Eurogamer',
    tag: 'NEWS',
    time: 'yesterday · 2:20 pm',
    title: 'Kingdom Come Deliverance',
    snippet:
      'Florida tourist attraction sues Fortnite, seeks removal of in-game castle. Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games...',
    likes: 324,
    comments: 12,
  },
  {
    id: '2',
    user: 'RockPaperShotgun',
    tag: 'GUIDE',
    time: '2 hours ago',
    title: 'Best PC Indie Games',
    snippet:
      'Check out the best underrated PC indie games you should play this year. We run through hidden gems across multiple genres...',
    likes: 128,
    comments: 30,
  },
];

export default function Community() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filteredPosts = POSTS;

  return (
    <ScreenContainer>
      <ScreenHeader title="Community" />

      <SubheaderContainer>
        <SubheaderTitle>
          Community and official content for all games and software
        </SubheaderTitle>
      </SubheaderContainer>

      <CommunityFilterRow
        filters={FILTERS}
        selectedFilter={selectedFilter}
        onSelectFilter={(filter) => setSelectedFilter(filter)}
      />

      {/* 4) Posts */}
      <FeedContainer>
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CommunityPostCard post={item} />}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </FeedContainer>
    </ScreenContainer>
  );
}

const SubheaderContainer = styled.View`
  padding: 0 16px;
  background-color: #1d2133;
`;

const SubheaderTitle = styled.Text`
  color: #9ea3b0;
  font-size: 14px;
  line-height: 20px;
`;

const FeedContainer = styled.View`
  flex: 1;
  background-color: #1d2133;
  padding: 0 16px;
`;
