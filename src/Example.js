import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import RavenStateProvider, { useRavenState, useRavenStateUpdate } from './RavenStateProvider';

const ExampleComponent = () => {
  const RavenState = useRavenState();
  const updateRavenState = useRavenStateUpdate();

  const handleButtonClick = () => {
    updateRavenState({ message: 'New message from Raven state x!' });
  };

   const handleInputChange = (text) => {
    updateRavenState({ message: text });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 15,
      }}
    >
       <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
        onChangeText={handleInputChange}
        value={RavenState.message}
      />
      <Text style={{ marginTop: 15, }}>Message from Raven state: {RavenState.message}</Text>
      <TouchableOpacity onPress={handleButtonClick}
        style={{
          backgroundColor: 'coral',
          padding: 15,
          marginTop: 15,
        }}
      >
        <Text style={{ textAlign: 'center'}}>Update Raven State</Text>
      </TouchableOpacity>
    </View>
  );
};

const ExampleRavenStateComponent = () => {
  return (
    <RavenStateProvider>
      <ExampleComponent />
    </RavenStateProvider>
  );
};

export default ExampleRavenStateComponent;
