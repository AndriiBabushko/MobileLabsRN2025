import { Text as DefaultText } from 'react-native';
import { ThemeProps } from './ThemeProps';

export type TextProps = ThemeProps & DefaultText['props'];
