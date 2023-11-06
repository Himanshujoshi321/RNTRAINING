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
  // const [checked, setChecked] = React.useState('first');
  const [city, setCity] = React.useState('');
  const [gender, setGender] = React.useState('');

  const handleLogin = () => {
    if (username === 'HIMANSHU' && password === '123') {
      navigation.navigate('NextPage', {username, password});
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
    navigation.navigate('NextPage', {
      city,
      gender,
    });
  };
  const data = [
    {label: 'Nainital', value: 'Nainital'},
    {label: 'Ramnagar', value: 'Ramnagar'},
    {label: 'Haldwani', value: 'Haldwani'},
  ];
  const genders = ['Male', 'Female'];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <View style={styles.dropdown}>
        <Dropdown
          style={styles.dropdown}
          placeholder="Select City"
          selectedTextStyle={{color: '#000'}}
          data={data}
          labelField="label"
          valueField="value"
          onChange={item => {
            setCity(item.value);
          }}
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
      <View style={styles.radio_container}>
        <Text style={styles.gender}>Gender:</Text>
        {genders.map((gen, index) => (
          <View key={index} style={styles.radioButton}>
            <RadioButton
              value={gen}
              status={gen === gender ? 'checked' : 'unchecked'}
              onPress={() => setGender(gen)}
            />
            <Text>{gen}</Text>
          </View>
        ))}
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const NextPage = ({route}) => {
  const {username, password, city, gender} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome,{username}
        to the Next Page!
      </Text>
      <Text style={styles.title}>YOUR PASSWORD IS : {password}</Text>
      <Text style={styles.title}>Your city is: {city}</Text>
      <Text style={styles.title}>Gender is: {gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  dropdown: {
    marginBottom: 10,
  },
  radio_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  gender: {
    fontSize: 18,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Appp;
