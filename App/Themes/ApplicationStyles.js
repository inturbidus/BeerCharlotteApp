import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  primaryHeading:{
    ...Fonts.style.primaryHeader,
    color:Colors.onyx,
  },
  secondaryHeading:{
    ...Fonts.style.secondaryHeader,
    color:Colors.onyx,
  },
  sectionHeader:{
    ...Fonts.style.sectionHeader,
    color:Colors.licorice
  },
  subTitle:{
    ...Fonts.style.subTitle,
    color:Colors.slate
  },
  cardTitle:{
    ...Fonts.style.cardTitle,
    color:Colors.licorice
  },
  cardCopy:{
    ...Fonts.style.cardCopy,
    color:Colors.slate
  },
  bodyCopy: {
    ...Fonts.style.body,
    color:Colors.slate
  },
  messageTimeStamp:{
    ...Fonts.style.messageTimeStamp,
    color:Colors.shadow
  }
  
}

export default ApplicationStyles