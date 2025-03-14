import React from 'react';
import styled from 'styled-components/native';
import GamePoster from '@/assets/images/game-poster.png';
import { FeaturedGame } from '@/types';

interface Props {
  item: FeaturedGame;
}

export default function StoreFeaturedCarousel({ item }: Props) {
  return (
    <FeaturedCard>
      <FeaturedImageBackground source={GamePoster} resizeMode="cover">
        <DarkOverlay />
        <FeaturedContent>
          <FeaturedTitle>{item.title}</FeaturedTitle>
          <FeaturedSubtitle>{item.subtitle}</FeaturedSubtitle>
          <Row>
            {item.discount ? (
              <Badge style={{ backgroundColor: '#22d07a' }}>
                <BadgeText>{item.discount}</BadgeText>
              </Badge>
            ) : null}
            {item.oldPrice ? (
              <Badge style={{ backgroundColor: '#ff5555', marginLeft: 6 }}>
                <BadgeText style={{ textDecorationLine: 'line-through' }}>
                  {item.oldPrice}
                </BadgeText>
              </Badge>
            ) : null}
            {item.newPrice ? (
              <Badge style={{ backgroundColor: '#2f3445', marginLeft: 6 }}>
                <BadgeText>{item.newPrice}</BadgeText>
              </Badge>
            ) : null}
          </Row>
        </FeaturedContent>
      </FeaturedImageBackground>
    </FeaturedCard>
  );
}

const FeaturedCard = styled.View`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
`;

const FeaturedImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

const DarkOverlay = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FeaturedContent = styled.View`
  padding: 16px;
`;

const FeaturedTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 4px;
`;

const FeaturedSubtitle = styled.Text`
  font-size: 13px;
  color: #9ea3b0;
  margin-bottom: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
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
