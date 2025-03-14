import styled from 'styled-components/native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

interface ProfileAvatarProps {
  source: ImageSourcePropType;
  isOnline?: boolean;
}

export default function ProfileAvatar({
  source,
  isOnline,
}: ProfileAvatarProps) {
  return (
    <AvatarContainer>
      <Avatar source={source} />
      {isOnline && <OnlineDot />}
    </AvatarContainer>
  );
}

const AvatarContainer = styled.View`
  position: relative;
  margin-bottom: 12px;
`;

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const OnlineDot = styled.View`
  position: absolute;
  right: 4px;
  bottom: 0;
  width: 16px;
  height: 16px;
  background-color: #22d07a;
  border-radius: 8px;
  border-width: 2px;
  border-color: #1d2133;
`;
