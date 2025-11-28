// React & RN
import React, { FC, useState } from 'react';
import { View } from 'react-native';

// API
import { products, Product } from '@/src/api/products';

// Components
import SearchBar from '@/src/components/SearchBar';
import SearchResults from '@/src/components/SearchResults';
import AppLayout from '@/src/layouts/AppLayout';

// Styles
import { styles } from './styles';

const SearchScreen: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = (text: string): void => {
    setQuery(text);

    if (text.trim().length === 0) {
      setResults([]);
      return;
    }

    const filtered = products.filter(p => p.title.toLowerCase().includes(text.toLowerCase()));

    setResults(filtered);
  };

  const handleSelect = (id: string): void => {
    console.log('Вибрано товар:', id);
    // Тут робимо навігацію:
    // navigation.navigate('Product', { productId: id });
  };

  return (
    <AppLayout>
      <SearchBar onChangeText={handleSearch} />

      <SearchResults results={results} onSelect={handleSelect} />
    </AppLayout>
  );
};

export default SearchScreen;
