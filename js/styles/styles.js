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
    alignItems: 'center',
    flexGrow: 4,
    overflow: 'hidden',
    margin: 'auto',
    flex: 1,
  },
  initiateImage:{
    height: 40,
    width: 40,
  },
  initiateRoll: {
    backgroundColor: '#FFD600',
    width: 50,
    justifyContent:'center',
    alignItems:'center',
    margin: 'auto'
  },
  initiateDropdown: {
    flexDirection: 'row',
    backgroundColor: 'hotpink',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 2
  },
    // List Printing

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
    //RADIOBUTTONS



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
    modalTextInput:{
      flex:4,
    },
    modalNumberInput:{
      flex: 1,
      textAlign: 'center'
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
