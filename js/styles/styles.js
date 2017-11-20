import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({


  // List Printing
  listContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'stretch',
    borderWidth: 1,
    borderStyle: "solid",
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
    margin: 'auto',
  },
  initiateDropdown: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'hotpink',
    borderStyle: "solid",
    borderTopWidth: 0,
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 2
  },
    // List Printing

    //Header styles
    headerContainer:{
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      borderStyle: "solid",
      borderWidth: 1,
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
})
