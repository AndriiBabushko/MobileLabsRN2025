import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  title: string;
}

export default function ScreenHeader({ title }: IProps) {
  return (
    <HeaderBar>
      <Row>
        <FontAwesome
          name="steam"
          size={24}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <HeaderTitle>{title}</HeaderTitle>
      </Row>
      <FontAwesome name="search" size={20} color="#fff" />
    </HeaderBar>
  );
}

const HeaderBar = styled.View`
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1d2133;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
