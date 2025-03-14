import React from 'react';
import styled from 'styled-components/native';
import { FilterType } from '@/types';

interface CommunityFilterRowProps {
  filters: FilterType[];
  selectedFilter: FilterType;
  onSelectFilter: (filter: FilterType) => void;
}

export default function CommunityFilterRow({
  filters,
  selectedFilter,
  onSelectFilter,
}: CommunityFilterRowProps) {
  return (
    <FilterRow horizontal showsHorizontalScrollIndicator={false}>
      {filters.map((filter) => {
        const active = filter === selectedFilter;
        return (
          <FilterButton
            key={filter}
            onPress={() => onSelectFilter(filter)}
            style={{ backgroundColor: active ? '#3B3F54' : '#2F3445' }}
          >
            <FilterButtonText style={{ opacity: active ? 1 : 0.7 }}>
              {filter}
            </FilterButtonText>
          </FilterButton>
        );
      })}
    </FilterRow>
  );
}

const FilterRow = styled.ScrollView`
  background-color: #1d2133;
  padding: 8px 16px;
  flex-grow: 0;
`;

const FilterButton = styled.TouchableOpacity`
  border-radius: 16px;
  padding: 6px 16px;
  margin-right: 8px;
`;

const FilterButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
