import { StyleSheet } from 'react-native';

const primaryColor = '#765548';
const primaryLightColor = '#a98274';
const primaryDarkColor = '#4b3c20';
const secondaryColor = '#757575';
const secondaryLightColor = '#a4a4a4';
const secondaryDarkColor = '#494949';
const primaryTextColor = '#ffffff';
const secondaryTextColor = '#ffffff';
const dndTextColor = "#58170D";
export const styles = StyleSheet.create({


  // List Printing
  listContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    backgroundColor: secondaryDarkColor,
    borderTopWidth: 1,
  },
  ImagePrimary: {
    marginLeft: 8,
    marginRight: 8,
  },
  initiateName: {
    flexGrow: 7,
    flex: 1,
    backgroundColor: primaryLightColor,
    flexDirection: 'row',
    height: 40,
    height: 'auto',
    textAlignVertical: 'center',
    overflow: 'hidden',
    fontSize: 20,
    color: 'black',
    fontFamily: 'ScalySans',
    paddingLeft: 5,

  },
  initiateHighLight: {
    backgroundColor: '#fff2',
    elevation: 10,
  },

  initiateImage: {
    flex: 0,
    flexGrow: 1
  },
  initiateRoll: {
    backgroundColor: secondaryDarkColor,
    flex: 0,
    flexGrow: 1,
    color: primaryTextColor,
    textAlign: 'center',
    fontSize: 16,
    alignItems: 'center',
  },
  initiateDropdown: {
    flexDirection: 'row',
    backgroundColor: secondaryColor,
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 2,
  },
  dropdownText: {
    fontFamily: 'ScalySansItalic',
    fontSize: 16,
  },
  // End List Printing

  //Header styles
  headerContainer: {
    display: 'flex',
    flexDirection: "row",
    alignContent: 'flex-start',
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#4b3c2034",
    flex: 0,
    height: 60,
    backgroundColor: primaryColor,
    elevation: 5
  },

  headerButton: {
    margin: 0,
    backgroundColor: secondaryColor,
    alignContent: 'center',
  },
  headerText: {
    flexGrow: 2,
    backgroundColor: primaryColor,
    color: dndTextColor,
    textShadowColor: primaryDarkColor,
    textShadowOffset: {
      width: 2,
      height: 2
    },
    fontSize: 36,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'MrEavesSmallCaps',
  },


  //RADIOBUTTONS
  radioButton: {
    backgroundColor: secondaryDarkColor,
    height: 50,
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  radioChosen: {
    backgroundColor: secondaryColor,
    height: 50,
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  radioFirst: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  radioLast: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  // END RADIOBUTTONS



  //MODAL STYLES
  modalBase: {
    flex: 1,
    backgroundColor: "#00000090",
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  modalTmplPlugin: {
    flexDirection: 'column',
    padding: 0,
    justifyContent: 'space-between'
  },
  modalTitle: {
    backgroundColor: secondaryLightColor,
    fontSize: 20,
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontWeight: 'bold',
  },
  modalDescription: {
    padding: 16
  },
  modalTextInput: {
    fontSize: 20,
    textAlignVertical: 'bottom',
    fontWeight: 'bold'
  },
  modalTextInputContainer: {
    flex: 4,
    borderWidth: 0,
  },
  modalNumberInput: {
    flex: 1,
    right: 0,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    fontSize: 20

  },
  modalRadioContainer: {
    display: 'flex',
    alignContent: 'center',
    padding: 16
  },

  modalAddCharacter: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    marginTop: 10,
  },
  modalAddButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    height: 40,
  },
  ButtonPrimary: {
    padding: 16,
    backgroundColor: secondaryColor,
    marginLeft: 8,
    borderRadius: 8,
    borderColor: secondaryLightColor
  },
  ButtonSecondary: {
    padding: 16,
    marginLeft: 8,
    borderRadius: 8,
  },
  ButtonRoll: {
    backgroundColor: primaryColor,
    height: '100%',
    alignContent: 'center',
  },

  ButtonText: {
    fontSize: 16,
    fontFamily: 'ScalySansCaps',
    color: primaryTextColor,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center'
  },

  ButtonTextSecondary: {
    color: secondaryColor
  },


  //DRAWER
  drawerContainer: {
    flex: 1,
    //backgroundColor: secondaryColor,
  },
  drawerHeaderContainer: {
    height: 100,
    backgroundColor: secondaryLightColor
  },

  //home
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: secondaryLightColor
  },

  rollButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    fontSize: 24,
    textShadowColor: primaryDarkColor,
    textShadowOffset: {
      width: 2,
      height: 2
    },
    color: dndTextColor,
    fontFamily:'ScalySansCaps',
  },



})
