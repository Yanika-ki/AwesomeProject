/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { 
  SafeAreaView, Text, TextInput, View
} from 'react-native';
import { Input, Button , Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import firestore from '@react-native-firebase/firestore';

//สร้าง component
const App: () => Node = () => {

  firestore().collection('Users').doc('ABC').get().then((user) => {
    console.log(user)
  });
  return (
    <SafeAreaView>
      <View style = {{ borderWidth:1, padding: 10,flexDirection: 'column'}}>
      <Text style={{ fontSize:20 , textAlign:'center'}}>
        Yanika Kingmata
        </Text>
      <Input placeholder = 'Hint'/>
      <TextInput 
        style = {{backgroundColor : '#DDDDDD'}}
        keyboardType = 'phone-pad'
        ></TextInput>
      <Button
        title="Outline button"
        type="outline"
      />
      <Button
        icon={
        <Icon
        name="arrow-right"
        size={15}
        color="white"
        />
        }
        iconRight
        title="Button with icon component"
      />
    </View>
    <View>
      <Image 
      source={{ uri: 'https://i.pinimg.com/originals/14/2d/7a/142d7a8f3d8bae84bfb773099f5a3723.jpg'}}
      style= {{ width:200,height:200}}
      />
    </View>
    <View>
      <Image 
      source={{ uri: 'https://i.pinimg.com/originals/14/2d/7a/142d7a8f3d8bae84bfb773099f5a3723.jpg'}}
      style= {{ width:200,height:200}}
      />
    </View>
    <View>
      <Image 
      source={{ uri: 'https://i.pinimg.com/originals/14/2d/7a/142d7a8f3d8bae84bfb773099f5a3723.jpg'}}
      style= {{ width:200,height:200}}
      />
    </View>
    </SafeAreaView>
    
  );
};

export default App;
