import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from '@/src/navigation';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
