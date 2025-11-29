import React, { FC, useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';

// Components
import SearchBar from '@/src/components/SearchBar';
import ProductItem from '@/src/components/ItemsSlider/ItemCard';
import AppLayout from '@/src/layouts/AppLayout';
import Header from '@/src/components/Header';

import { products, Product } from '@/src/api/products';
import { RootStackParamList } from '@/src/navigation/types';

import { styles } from './styles';

type SearchRoute = RouteProp<RootStackParamList, 'Search'>;

interface Props {
  route: SearchRoute;
}

const SearchScreen: FC<Props> = ({ route }) => {
  const initial = route.params?.initialQuery ?? '';

  const [query, setQuery] = useState<string>(initial);
  const [results, setResults] = useState<Product[]>([]);

  const search = (text: string): void => {
    const filtered = products.filter(p => p.title.toLowerCase().includes(text.toLowerCase()));
    setResults(filtered);
  };

  useEffect(() => {
    if (initial.length > 0) {
      search(initial);
    }
  }, [initial]);

  return (
    <View style={styles.container}>
      <Header
        title="Пошук"
        isSearchIncluded
        searchValue={query}
        onSearchChange={text => {
          setQuery(text);
          search(text);
        }}
        onSearchSubmit={search}
      />

      <FlatList
        data={results}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            title={item.title}
            image={item.image}
            badge={item.badge}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        )}
      />
    </View>
  );
};

export default SearchScreen;
