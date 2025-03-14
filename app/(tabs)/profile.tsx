import React from 'react';
import { Linking, Platform } from 'react-native';

import UserIcon from '@/assets/images/user-icon.png';
import {
  ProfileAvatar,
  ScreenContainer,
  SettingsList,
  UserInfo,
} from '@/components/ui';
import { SettingItem } from '@/types';
import styled from 'styled-components/native';

const userData = {
  isOnline: true,
  firstName: 'Andrii',
  lastName: 'Babushko',
  group: 'ВТ-21-1',
};

const SETTINGS: SettingItem[] = [
  { id: '1', title: 'Change Theme' },
  { id: '2', title: 'Logout' },
];

export default function Profile() {
  const openPhoneThemeSettings = async () => {
    try {
      if (Platform.OS === 'android') {
        await Linking.openSettings();
      } else if (Platform.OS === 'ios') {
        const canOpen = await Linking.canOpenURL('App-Prefs:root=DISPLAY');
        if (canOpen) {
          await Linking.openURL('App-Prefs:root=DISPLAY');
        } else {
          await Linking.openURL('App-Prefs:root=General');
        }
      }
    } catch (error) {
      console.warn('Cannot open settings:', error);
    }
  };

  const handlePressSetting = (id: string) => {
    if (id === '1') {
      openPhoneThemeSettings();
    } else if (id === '2') {
      console.log('Logout pressed');
    }
  };

  return (
    <ScreenContainer>
      <ProfileContainer>
        <ProfileAvatar source={UserIcon} isOnline={userData.isOnline} />

        <UserInfo
          firstName={userData.firstName}
          lastName={userData.lastName}
          group={userData.group}
        />

        <SettingsList items={SETTINGS} onPressItem={handlePressSetting} />
      </ProfileContainer>
    </ScreenContainer>
  );
}

const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1d2133;
  padding: 20px;
`;
