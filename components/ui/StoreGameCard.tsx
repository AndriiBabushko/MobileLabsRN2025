import React from 'react';
import styled from 'styled-components/native';
import GamePoster from '@/assets/images/game-poster.png';
import { Game } from '@/types';

interface Props {
  item: Game;
}

export function StoreGameCard({ item }: Props) {
  return (
    <GameCard>
      <Cover source={GamePoster} />
      <GameInfo>
        <GameTitle>{item.title}</GameTitle>
        <GamePlatform>{item.platform}</GamePlatform>
      </GameInfo>
      <PriceSection>
        {/* Discount */}
        {item.discount ? (
          <Badge style={{ backgroundColor: '#22d07a', marginBottom: 4 }}>
            <BadgeText>{item.discount}</BadgeText>
          </Badge>
        ) : null}
        {/* Old Price */}
        {item.oldPrice ? (
          <Badge
            style={{
              backgroundColor: '#ff5555',
              marginBottom: 4,
              marginTop: 2,
            }}
          >
            <BadgeText style={{ textDecorationLine: 'line-through' }}>
              {item.oldPrice}
            </BadgeText>
          </Badge>
        ) : null}
        {/* New Price */}
        <Badge style={{ backgroundColor: '#2f3445' }}>
          <BadgeText>{item.newPrice}</BadgeText>
        </Badge>
      </PriceSection>
    </GameCard>
  );
}

const GameCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #2f3445;
  margin: 4px 20px;
  padding: 12px;
  border-radius: 20px;
`;

const Cover = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-right: 12px;
`;

const GameInfo = styled.View`
  flex: 1;
`;

const GameTitle = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
`;

const GamePlatform = styled.Text`
  color: #9ea3b0;
  font-size: 13px;
  margin-top: 2px;
`;

const PriceSection = styled.View`
  align-items: flex-end;
  justify-content: center;
`;

const Badge = styled.View`
  border-radius: 4px;
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
`;

const BadgeText = styled.Text`
  color: #fff;
  font-weight: 700;
`;
