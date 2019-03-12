import { StyleSheet } from 'react-native'
import { Colors,Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection + 50,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  callout:{
    ...ApplicationStyles.primaryHeading,  
    color:Colors.snow,
    width:Metrics.images.logo,
    marginTop: Metrics.doubleSection + 50,
  },
  ctaContainer: {
    backgroundColor:Colors.Ginger,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top:0,
  }
})
