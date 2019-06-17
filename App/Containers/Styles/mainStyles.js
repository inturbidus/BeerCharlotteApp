import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/';



export default StyleSheet.create({
    ...ApplicationStyles.screen,
  container: {
      backgroundColor: "white"
  },

  sectionMain: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      
  },

  sectionCard: {
      borderRadius: 12,
      borderColor: '#ffffff',
      padding: 0,
  },


  sectionItemRight: {
      flexBasis: .5,
  },

  sectionImage: {
      borderRadius: 10,
      width: 350,
      height: 200,
  },

  sectionImageMap: {
      marginTop: 5,
      borderRadius: 10,
      width: 70,
      height: 70,
  },
    sectionHeader: {
      fontWeight: 'bold',
      fontSize: 16,
      textDecorationLine: 'underline',
      color:Colors.ginger,
      paddingTop: 5,
      paddingLeft: 5,
    },

    sectionDate: {
        fontSize: 14,
        paddingTop: 5,
        paddingLeft: 5,
        color:Colors.snow,
    },
  
    sectionText: {
      fontSize: 14,
      paddingTop: 5,
      paddingLeft: 5,
      color:Colors.snow,
  },

  })