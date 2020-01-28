import { StyleSheet }         from 'react-native'
import {fonts} from '../../styles/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  title: {
    ...fonts.styles.bodyBold
  }
})