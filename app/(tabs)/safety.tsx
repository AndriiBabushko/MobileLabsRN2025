import React, { useState } from 'react';

import {
  ScreenContainer,
  ScreenHeader,
  TabBar,
  SettingsList,
  SteamGuardCode,
  GuardInfo,
} from '@/components/ui';
import { SettingItem } from '@/types';

type TabType = 'guard' | 'confirmations';

const SETTINGS: SettingItem[] = [
  { id: '1', title: 'Remove Authenticator' },
  { id: '2', title: 'My Recovery Code' },
  { id: '3', title: 'Help' },
];

export default function Safety() {
  const [activeTab, setActiveTab] = useState<TabType>('guard');

  return (
    <ScreenContainer>
      <ScreenHeader title="Safety" />

      <TabBar
        tabs={[
          { id: 'guard', label: 'Guard' },
          { id: 'confirmations', label: 'Confirmations' },
        ]}
        activeTab={activeTab}
        onTabPress={(id) => setActiveTab(id as TabType)}
      />

      <SteamGuardCode
        userLabel="Logged in as player"
        code="N5KCV"
        progress={0.6}
      />

      <GuardInfo />

      <SettingsList
        items={SETTINGS}
        onPressItem={(id) => {
          console.log(`Pressed setting ID: ${id}`);
        }}
      />
    </ScreenContainer>
  );
}
