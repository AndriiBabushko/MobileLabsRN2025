import React from 'react';
import styled from 'styled-components/native';
import { ChatItem } from '@/types';

interface ChatRowProps {
  item: ChatItem;
}

export function ChatRow({ item }: ChatRowProps) {
  return (
    <RowContainer>
      <AvatarContainer>
        <Avatar source={{ uri: item.avatar }} />
        {item.status === 'online' && <OnlineDot />}
      </AvatarContainer>

      <UserSection>
        <Row>
          <Username>{item.username}</Username>
          <DateText>• {item.date}</DateText>
        </Row>
        <Snippet numberOfLines={1}>{item.snippet}</Snippet>
      </UserSection>

      {/* Unread badge if unreadCount > 0 */}
      {item.unreadCount && item.unreadCount > 0 && (
        <UnreadBadge>
          <UnreadText>{item.unreadCount}</UnreadText>
        </UnreadBadge>
      )}
    </RowContainer>
  );
}

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #2f3445;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 10px;
`;

const AvatarContainer = styled.View`
  position: relative;
  margin-right: 12px;
`;

const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;

const OnlineDot = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  background-color: #22d07a;
  border-radius: 5px;
  border-width: 2px;
  border-color: #2f3445;
`;

const UserSection = styled.View`
  flex: 1;
  justify-content: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Username = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`;

const DateText = styled.Text`
  color: #9ea3b0;
  font-size: 12px;
  margin-left: 6px;
`;

const Snippet = styled.Text`
  color: #9ea3b0;
  font-size: 13px;
  margin-top: 2px;
`;

const UnreadBadge = styled.View`
  background-color: #4782da;
  border-radius: 10px;
  padding: 2px 6px;
  margin-left: 8px;
`;

const UnreadText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;
