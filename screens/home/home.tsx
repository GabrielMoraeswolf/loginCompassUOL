import {  Text, View,FlatList,Pressable,SafeAreaView} from 'react-native';
import styles from './index'
import React, { useState } from 'react';


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


export default HomeScreen;