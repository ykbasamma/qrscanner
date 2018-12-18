import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Qrscanner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Scanner page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Qrscanner;
