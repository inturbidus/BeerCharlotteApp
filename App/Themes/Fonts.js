const type = {
  base: 'Helvetica',
  secondary: 'Arial'
}

const size = {
  primary:30,
  secondary:24,
  sectionHeader:18,
  subTitle: 18,
  cardTitle: 15,
  cardSubtitle:10,
  cardCopy: 15,
  body:14,
  timeStamp:12,
  button:14,
  buttonDark:14,
  
}
const weight = {
  bold : '700',
  regular:'400',
  light: '300'
}

const style = {
  primaryHeader: {
    fontFamily: type.base,
    fontWeight: weight.bold,
    fontSize: size.primary
  },
  secondaryHeader: {
    fontWeight: weight.bold,
    fontSize: size.secondary
  },
  sectionHeader: {
    fontFamily: type.base,
    fontSize: size.sectionHeader,
    fontWeight:weight.bold
  },
  subTitle: {
    fontFamily: type.base,
    fontSize: size.subTitle,
    fontWeight: weight.regular
  },
  cardTitle: {
    fontFamily: type.base,
    fontSize: size.cardTitle,
    fontWeight: weight.bold,
  },
  cardSubtitle:{
    fontFamily: type.secondary,
    fontSize: size.cardSubtitle,
    fontSize: weight.regular
  },
  cardCopy: {
    fontFamily:type.base,
    fontSize: size.cardCopy,
    fontWeight: weight.light,
  },
  body:{
    fontFamily:type.base,
    fontSize: size.body,
    fontWeight: weight.light,
  },
  messageTimeStamp:{
    fontFamily:type.base,
    fontSize:size.timeStamp,
    fontWeight:weight.light
  },
  button:{
    fontFamily:type.secondary,
    fontSize:size.button,
    fontWeight:weight.light,
  },
  buttonDark:{
    fontFamily:type.secondary,
    fontSize:size.buttonDark,
    fontWeight:weight.light,
  }
}

export default {
  type,
  size,
  style
}
