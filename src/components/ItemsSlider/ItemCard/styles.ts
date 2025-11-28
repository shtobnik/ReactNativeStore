import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 160,
    padding: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#393836',
    borderStyle: 'solid',
    overflow: 'hidden',
  },

  badge: {
    backgroundColor: '#FFB84C',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 6,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },

  imageContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    marginBottom: 8,
  },

  image: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    marginBottom: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 8,
  },

  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1,
  },

  oldPrice: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8A898C',
    textDecorationLine: 'line-through',
  },

  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E15161',
  },

  discount: {
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: '#FFB84C',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: '#000',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
});
