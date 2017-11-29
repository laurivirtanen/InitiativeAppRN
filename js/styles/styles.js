import { StyleSheet } from 'react-native';

const Yellow = '#FFD600';
const primaryColor = '#ff6f00';
const primarycolorLightColor = '#ffa040';
const primarycolorDarkColor = '#c43e00';
const secondaryColor = '#8d6e63';
const secondaryLightColor = '#be9c91';
const secondaryDarkColor = '#5f4339';
const primaryTextColor = '#000000';
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
    //borderBottomWidth: initiate.showDetail? 0 : 1,
  },
  initiateName: {
    flexGrow: 7,
    flex: 1,
    backgroundColor: primarycolorDarkColor,
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
  initiateHighLight:{
    fontSize:30,
    height: 50,
    backgroundColor: '#fff2'
  },

  initiateImage:{
    flex:0,
    flexGrow: 1,
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
    backgroundColor: secondaryLightColor,
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 2
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
    backgroundColor:primarycolorLightColor,
  },
  
  headerButton:{
    margin: 0,
    backgroundColor: secondaryColor,
    alignContent:'center',
  },
  headerButtonText:{
    flexGrow:1,
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 2,
    textAlignVertical: 'center',
  },
  headerText:{
    flexGrow:2,
    backgroundColor: primarycolorLightColor,
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
    backgroundColor: secondaryDarkColor,
    borderRadius: 8, 
    height: 300, 
    margin: 16, 
    padding: 16,
  },
  modalTextInputContainer:{
    flex:4,
    borderWidth: 0,
  },
  modalNumberInput:{
    flex: 1,
    right: 0,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    color: secondaryTextColor,
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

  //DRAWER
  drawerContainer:{
    flex: 1,
    backgroundColor: secondaryColor,
  },

  //home
  rollContainer:{
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:primarycolorLightColor
  },






})
