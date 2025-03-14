import React from 'react';

import { Text } from '@/components/common';
import { TextProps } from '@/types';

export default function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
