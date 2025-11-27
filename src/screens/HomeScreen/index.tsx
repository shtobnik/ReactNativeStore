import React, { FC } from 'react';
import { Platform } from 'react-native';

import AppLayout from '@/src/layouts/AppLayout';
import AppScrollView from '@/src/components/ui/AppScrollView';
import AppText from '@/src/components/ui/AppText';

import HeaderIOS from '@/src/components/Home/HeaderIOS';
import ActionBanner from '@/src/components/Home/ActionBanner';

export const HomeScreen: FC = () => {
  return (
    <AppLayout>
      <AppScrollView>
        {Platform.select({
          ios: <HeaderIOS />,
        })}

        <ActionBanner />

        <AppText>HomeScreen</AppText>
      </AppScrollView>
    </AppLayout>
  );
};

export default HomeScreen;
