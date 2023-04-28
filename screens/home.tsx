import { StyleSheet, Text, View,FlatList,Pressable,SafeAreaView} from 'react-native';
import { Colors } from '../styles/index';
import React, { useState } from 'react';
import{ NavProps } from '../types/navigation';

const Arry =[
  {id:'1',value:'1'},
  {id:'2',value:'2'},
  {id:'3',value:'3'},
  {id:'4',value:'4'},
  {id:'5',value:'5'},
  {id:'6',value:'6'},
  {id:'7',value:'7'},
  {id:'8',value:'8'},
];
 function Card(){
  return(
    <View style ={styles.card}>
      <Text></Text>
    </View>
  );
}

function HomeScreen() {   
  const [listItens,setListItens] = useState(Arry);
  return(
    <View style ={styles.container}>
      <FlatList 
        data={listItens}
        numColumns={2}
        renderItem={Card}
        keyExtractor={(item,index)=>index.toString()}
      />
    </View>
  );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom: 10,
    marginTop:50
  },
  card:{
    flex:1,
    backgroundColor: Colors.card,
    height:226,
    width:186,
    margin: 5,
    borderRadius:10,
  },
  title: {      
    color: Colors.primary,
    marginBottom: '25%',
    fontSize: 36
  },
});

export default HomeScreen;