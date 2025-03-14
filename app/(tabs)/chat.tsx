// app/(tabs)/chat.tsx
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import {
  ScreenContainer,
  ScreenHeader,
  TabBar,
  ChatRow,
} from '@/components/ui';
import { ChatItem } from '@/types';

const CHAT_DATA: ChatItem[] = [
  {
    id: '1',
    username: 'Mark Dyson',
    avatar:
      'https://i.pinimg.com/736x/59/49/c0/5949c006e568394a2ddd56143ed94c25.jpg',
    status: 'online',
    snippet: "I'm already starting to play",
    date: '14 Jun',
    unreadCount: 1,
  },
  {
    id: '2',
    username: 'Mark Dyson',
    avatar:
      'https://i.pinimg.com/736x/59/49/c0/5949c006e568394a2ddd56143ed94c25.jpg',
    status: 'online',
    snippet: 'You: Ok',
    date: '14 Jun',
  },
  {
    id: '3',
    username: 'Player123',
    avatar:
      'https://i.pinimg.com/736x/59/49/c0/5949c006e568394a2ddd56143ed94c25.jpg',
    status: 'offline',
    snippet: 'You: Ok',
    date: '14 Jun',
  },
];

type TabType = 'open' | 'friends';

export default function Chat() {
  const [activeTab, setActiveTab] = useState<TabType>('open');

  const chatItems = CHAT_DATA;

  return (
    <ScreenContainer>
      <ScreenHeader title="Chat" />

      <TabBar
        tabs={[
          { id: 'open', label: 'Open chats' },
          { id: 'friends', label: 'My friends' },
        ]}
        activeTab={activeTab}
        onTabPress={(id) => setActiveTab(id as TabType)}
      />

      <ListContainer>
        <FlatList
          data={chatItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow item={item} />}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </ListContainer>
    </ScreenContainer>
  );
}

const ListContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;
