import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },

  headerAndroid: {
    paddingVertical: 10,
  },

  leftBtn: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  rightBtn: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  title: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  icon: {
    width: 22,
    height: 22,
    tintColor: '#fff',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  searchBlock: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 12,
  },

  searchWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
});
