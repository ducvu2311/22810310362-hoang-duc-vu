import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      backgroundColor: "#fff",
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <TitleComponent title="Change Background Color" color="black" />
        
        {/* Danh sách các nút đổi màu */}
        <ButtonComponent backgroundColor="green" message="Green selected!" onClick={this.handleButtonClick} colorChange="#32CD32" />
        <ButtonComponent backgroundColor="red" message="Red selected!" onClick={this.handleButtonClick} colorChange="#FF6347" />
        <ButtonComponent backgroundColor="blue" message="Blue selected!" onClick={this.handleButtonClick} colorChange="#1E90FF" />
        <ButtonComponent backgroundColor="yellow" message="Yellow selected!" onClick={this.handleButtonClick} colorChange="#FFD700" />
        <ButtonComponent backgroundColor="purple" message="Purple selected!" onClick={this.handleButtonClick} colorChange="#800080" />
        
        {/* Hiển thị thông báo khi chọn màu */}
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

// Component tiêu đề
class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

// Component nút bấm
class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
});

export default App;

