import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({


  // List Printing
  listContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    //borderBottomWidth: initiate.showDetail? 0 : 1,
  },
  initiateName: {
    backgroundColor: '#DD2C00',
    flexDirection: 'row',
    height: 40,
    padding: 'auto',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    flexGrow: 4,
    overflow: 'hidden',
    margin: 'auto',
    flex: 1,
  },
  initiateImage:{
    flexGrow: 1,
  },
  initiateRoll: {
    backgroundColor: '#FFD600',
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center',
    margin: 0,
    padding:0,
  },
  initiateDropdown: {
    flexDirection: 'row',
    backgroundColor: 'hotpink',
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
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerButton:{
    width: 60,
    margin: 0,
    backgroundColor: 'red',
  },
  headerButtonText:{
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
    backgroundColor: "#fff",
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
  }






})
