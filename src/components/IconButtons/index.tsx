import React from 'react';
import type { SvgProps } from 'react-native-svg';

import HomeSvg from '@assets/icons/home.svg';
import SearchSvg from '@assets/icons/search.svg';
import CartSvg from '@assets/icons/cart.svg';
import FavoritesSvg from '@assets/icons/favorites.svg';
import ProfileSvg from '@assets/icons/user.svg';
import MicSvg from '@assets/icons/mic.svg';
import QrCodeSvg from '@assets/icons/scan.svg';

export type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

// 🎯 Тепер фабрика приймає baseSize
const createIcon = (SvgComponent: React.FC<SvgProps>, width: number, height: number) => {
  return ({ color }: TabIconProps) => {
    return <SvgComponent width={width} height={height} color={color} />;
  };
};

// 👇 Окремий розмір для кожної іконки!
export const HomeIcon = createIcon(HomeSvg, 32, 32);
export const SearchIcon = createIcon(SearchSvg, 26, 26);
export const CartIcon = createIcon(CartSvg, 30, 30);
export const FavoritesIcon = createIcon(FavoritesSvg, 30, 30);
export const ProfileIcon = createIcon(ProfileSvg, 30, 30);
export const MicIcon = createIcon(MicSvg, 26, 26);
export const QrCodeIcon = createIcon(QrCodeSvg, 26, 26);
