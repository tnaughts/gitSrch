
import { StyleSheet }         from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
    input: {
    color:   'black',
    paddingHorizontal: 10,
    paddingVertical:   5,
  },
  searchBar: {
    borderRadius:    3,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',

  },
  searchButton: {
    paddingHorizontal: 10,
    paddingVertical:   5,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
})