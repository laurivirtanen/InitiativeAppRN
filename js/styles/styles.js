import { StyleSheet } from 'react-native';

const primaryColor = '#765548';
const primaryLightColor = '#a98274';
const primaryDarkColor = '#4b3c20';
const secondaryColor = '#757575';
const secondaryLightColor = '#a4a4a4';
const secondaryDarkColor = '#494949';
const primaryTextColor = '#ffffff';
const secondaryTextColor = '#ffffff';

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
    color:secondaryTextColor,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  initiateImage:{
    flex:0,
    flexGrow: 1
  },
  initiateRoll: {
    backgroundColor: secondaryDarkColor,
    flexGrow: 1,
    color:secondaryTextColor,
    textAlign:'center',
    alignItems:'center',
  },
  initiateDropdown: {
    flexDirection: 'row',
    backgroundColor: secondaryColor,
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 2,
    borderBottomWidth: 1
  },
  /* initiateKill: {
    flex: 1
  }, */
  // End List Printing

  //Header styles
  headerContainer:{
    display: 'flex',
    flexDirection: "row",
    alignContent: 'flex-start',
    justifyContent: "space-between",
    borderBottomWidth:3,
    flex:0,
    backgroundColor:primaryColor,
  },
  
  headerButton:{
    margin: 0,
    backgroundColor: secondaryColor,
    alignContent:'center',
  },
  headerText:{
    flexGrow:2,
    backgroundColor: primaryColor,
    color: primaryTextColor,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },


  //RADIOBUTTONS
  radioButton: {
    backgroundColor: "#f00",
    height: 50,
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  radioChosen: {
    backgroundColor: "#ff0",
    height: 50,
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  // END RADIOBUTTONS



  //MODAL STYLES
  modalBase:{
    flex:1,
    backgroundColor:"#00000090",
  },
  modalContainer:{
    backgroundColor: '#ffffff',
    borderRadius: 8, 
    height: 300, 
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
    color: primaryTextColor,
    fontSize: 20,
    textAlignVertical: 'bottom',
    fontWeight: 'bold'
  },
  modalTextInputContainer:{
    flex:4,
    borderWidth: 0,
    backgroundColor: secondaryLightColor
  },
  modalNumberInput:{
    flex: 1,
    right: 0,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    color: primaryTextColor,
    fontSize: 20
    
  },
  modalRadioContainer:{
    display:'flex',
    alignContent:'center',
  },

  modalAddCharacter:{
    flexDirection:'row',
    marginTop:20,
  },
  modalAddButton:{ 
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
  ButtonText: {
    color: primaryTextColor
  },
  ButtonTextSecondary: {
    color: secondaryColor
  },

  //DRAWER
  drawerContainer:{
    flex: 1,
    //backgroundColor: secondaryColor,
  },
  drawerHeaderContainer:{
    height: 100,
    backgroundColor: secondaryColor
  },

  //home
  rollContainer:{
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:primaryColor
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: secondaryLightColor
  }






})
