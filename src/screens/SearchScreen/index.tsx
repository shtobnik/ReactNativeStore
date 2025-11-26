// src/screens/Search/SearchScreen.tsx
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Styles
import { globalStyles } from '@/src/styles/globalStyles';
import { styles } from './styles';

// Types
import type { SearchScreenProps } from '../../navigation/types';

const SearchScreen = (_props: SearchScreenProps) => {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]} edges={['top']}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
