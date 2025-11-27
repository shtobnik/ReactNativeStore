import React, { FC } from 'react';
import { ScrollView, Platform } from 'react-native';

import { styles } from './styles';

import AppLayout from '@/src/layouts/AppLayout';
import AppText from '@/src/components/ui/AppText';

import HeaderIOS from '@/src/components/Home/HeaderIOS';
import HeaderAndroid from '@/src/components/Home/HeaderAndroid';
import ActionBanner from '@/src/components/Home/ActionBanner';

const HomeScreen: FC = () => {
  return (
    <AppLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        style={styles.scrollView}
      >
        {Platform.select({
          ios: <HeaderIOS />,
          android: <HeaderAndroid />,
        })}

        <ActionBanner />

        <AppText style={styles.text}>HomeScreen</AppText>

        {/* Тут твої інші блоки */}
      </ScrollView>
    </AppLayout>
  );
};

export default HomeScreen;
