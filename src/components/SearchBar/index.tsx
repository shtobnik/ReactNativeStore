// React & RN
import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

// Components
import { SearchIcon, MicIcon, QrCodeIcon } from '@/src/components/IconButtons';

// Styles
import { styles } from './styles';

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  showMic?: boolean;
  showQr?: boolean;
  onChangeText?: (text: string) => void;
  onSubmit?: (text: string) => void;
  onMicPress?: () => void;
  onQrPress?: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  placeholder = 'Я шукаю...',
  showMic = true,
  showQr = true,
  onMicPress,
  onQrPress,
  onChangeText,
  onSubmit,
}) => {
  const [localValue, setLocalValue] = useState<string>('');

  // 🟦 Якщо прийшов зовнішній value → оновлюємо localValue
  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const handleChange = (text: string): void => {
    setLocalValue(text);
    onChangeText?.(text);
  };

  const handleSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>): void => {
    onSubmit?.(e.nativeEvent.text);
  };

  return (
    <View style={styles.searchContainer}>
      <SearchIcon focused={false} color="#9CA3AF" size={18} />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value !== undefined ? value : localValue}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />

      <View style={styles.rightIcons}>
        {showMic && <MicIcon focused={false} color="#9CA3AF" size={26} />}
        {showQr && <QrCodeIcon focused={false} color="#9CA3AF" size={26} />}
      </View>
    </View>
  );
};

export default SearchBar;
