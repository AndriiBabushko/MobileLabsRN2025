import styled from 'styled-components/native';
import React from 'react';

interface SteamGuardCodeProps {
  userLabel: string;
  code: string;
  progress: number; // 0.0 - 1.0
}

export default function SteamGuardCode({
  userLabel,
  code,
  progress,
}: SteamGuardCodeProps) {
  const pct = Math.min(Math.max(progress, 0), 1) * 100;
  return (
    <TopSection>
      <Subtitle>{userLabel}</Subtitle>
      <BigCode>{code}</BigCode>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${pct}%` }} />
      </ProgressBarContainer>
    </TopSection>
  );
}

const TopSection = styled.View`
  align-items: center;
  padding: 20px;
  background-color: #23263b;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 16px;
`;

const Subtitle = styled.Text`
  color: #9ea3b0;
  font-size: 14px;
  margin-bottom: 8px;
`;

const BigCode = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ProgressBarContainer = styled.View`
  width: 80%;
  height: 6px;
  border-radius: 3px;
  background-color: #2f3445;
  overflow: hidden;
  margin-top: 4px;
`;

const ProgressBar = styled.View`
  height: 100%;
  background-color: #22d07a;
`;
