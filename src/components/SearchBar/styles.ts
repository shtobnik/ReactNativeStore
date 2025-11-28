import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 44,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    marginHorizontal: 8,
  },

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qrButton: {
    marginLeft: 8,
  },
});
