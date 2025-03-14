import React from 'react';

import { Text as DefaultText } from 'react-native';

import { TextProps } from '@/types';
import { useThemeColor } from '@/hooks';

export default function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}
