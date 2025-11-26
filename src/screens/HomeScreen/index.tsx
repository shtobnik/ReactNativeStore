import React from 'react';
import { ScrollView, Platform } from 'react-native';
import HeaderIOS from '@/src/components/Home/HeaderIOS';
import { HeaderAndroid } from '@/src/components/Home/HeaderAndroid';
// import { ActionBanner } from '@components/Home/ActionBanner';
// import { BigSlider } from '@components/Home/BigSlider';
// import { PromoCards } from '@components/Home/PromoCards';
// import { QuickActions } from '@components/Home/QuickActions';
// import { ProductSection } from '@components/Home/ProductSection';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Platform.OS === 'ios' ? <HeaderIOS /> : <HeaderAndroid />}

      {/* <ActionBanner />
      <BigSlider />
      <PromoCards />
      <QuickActions />

      <ProductSection title="Рекомендації на основі ваших переглядів" />
      <ProductSection title="Найкращі пропозиції" /> */}
    </ScrollView>
  );
};

export default HomeScreen;
