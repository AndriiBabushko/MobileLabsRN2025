import styled from 'styled-components/native';
import React from 'react';

interface UserInfoProps {
  firstName: string;
  lastName: string;
  group: string;
}

export default function UserInfo({
  firstName,
  lastName,
  group,
}: UserInfoProps) {
  return (
    <>
      <UserName>
        {firstName} {lastName}
      </UserName>
      <UserGroup>{group}</UserGroup>
    </>
  );
}

const UserName = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const UserGroup = styled.Text`
  color: #9ea3b0;
  font-size: 14px;
  margin-bottom: 24px;
`;
