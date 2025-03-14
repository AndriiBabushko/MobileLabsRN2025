import styled from 'styled-components/native';
import React from 'react';

export default function GuardInfo() {
  return (
    <InfoContainer>
      <InfoText>
        You’ll enter your code each time you enter your password to sign in to
        your Steam account.
      </InfoText>
      <TipText>
        Tip: If you don’t share your PC, you can select “Remember my password”
        when you sign in to the PC client to enter your password and
        authenticator code less often.
      </TipText>
    </InfoContainer>
  );
}

const InfoContainer = styled.View`
  padding: 0 16px;
  margin-bottom: 16px;
`;

const InfoText = styled.Text`
  color: #d0d0d0;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`;

const TipText = styled.Text`
  color: #48a3f0;
  font-size: 13px;
  line-height: 18px;
`;
