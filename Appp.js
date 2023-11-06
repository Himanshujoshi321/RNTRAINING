import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Appp = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerStyle: {backgroundColor: 'cyan'},
        headerTitleStyle: {fontsize: 60},
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NextPage" component={NextPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [checked, setChecked] = React.useState('first');

  const handleLogin = () => {
    if (username === 'HIMANSHU' && password === '123') {
      navigation.navigate('NextPage', {username, password});
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };
  const data = [
    {label: 'Nainital', value: 1},
    {label: 'Ramnagar', value: 2},
    {label: 'Haldwani', value: 3},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <View Style={styles.btn}>
        <Text>MALE</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />

        <Text>FEMALE</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
      <View style={styles.dropdown}>
        <Dropdown
          selectedTextStyle={{color: 'black'}}
          inputSearchStyle={{color: 'red'}}
          placeholder="CITY"
          data={data}
          labelField="label1"
          valueField="value"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const NextPage = ({route}) => {
  const {username, password} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome,{username}
        to the Next Page!
      </Text>
      <Text style={styles.title}>YOUR PASSWORD IS : {password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 50,
    backgroundColor: 'darkorange',
    borderRadius: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 40,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 15,
  },
  btn: {
    flexDirection: 'row',
    flex: 1,
    color: 'red',
  },
  dropdown: {
    color: 'red',
  },
});

export default Appp;
