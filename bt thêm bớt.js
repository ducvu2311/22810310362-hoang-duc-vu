import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>{this.state.counter}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleIncrease}>
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleDecrease}>
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
