import styled from 'styled-components/native';
import React from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (id: string) => void;
}

export default function TabBar({ tabs, activeTab, onTabPress }: TabBarProps) {
  return (
    <TabContainer>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <TabButton
            key={tab.id}
            active={isActive}
            onPress={() => onTabPress(tab.id)}
          >
            <TabButtonText active={isActive}>{tab.label}</TabButtonText>
          </TabButton>
        );
      })}
    </TabContainer>
  );
}

const TabContainer = styled.View`
  flex-direction: row;
  background-color: #1d2133;
  padding: 0 16px;
  margin-bottom: 16px;
`;

interface TabProps {
  active: boolean;
}

const TabButton = styled.TouchableOpacity<TabProps>`
  flex: 1;
  padding: 10px 0;
  margin-right: 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props: TabProps) =>
    props.active ? '#2F3445' : 'transparent'};
`;

const TabButtonText = styled.Text<TabProps>`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  opacity: ${(props: TabProps) => (props.active ? 1 : 0.7)};
  text-align: center;
`;
