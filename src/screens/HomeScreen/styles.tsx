import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  content: {
    paddingHorizontal: 16,
  },

  promoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
});
