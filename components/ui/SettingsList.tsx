import { FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styled from 'styled-components/native';
import React from 'react';
import { SettingItem } from '@/types';

interface SettingsListProps {
  items: SettingItem[];
  onPressItem: (id: string) => void;
}

export default function SettingsList({
  items,
  onPressItem,
}: SettingsListProps) {
  return (
    <SettingsCard>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressItem(item.id)}>
            <SettingRow>
              <SettingText>{item.title}</SettingText>
              <FontAwesome name="chevron-right" size={16} color="#9ea3b0" />
            </SettingRow>
          </TouchableOpacity>
        )}
      />
    </SettingsCard>
  );
}

const SettingsCard = styled.View`
  width: 100%;
  background-color: #2f3445;
  border-radius: 12px;
  padding: 8px 0;
`;

const SettingRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #3b3f54;
`;

const SettingText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
