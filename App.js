import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const { width, height } = Dimensions.get('window')
import ButtonGradient from './components/layout/ButtonGradient';

export default function App() {

  const SvgTop = (props) => {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={360}
        height={283}
        fill="none"
        {...props}
      >
        <Path
          fill="url(#a)"
          fillRule="evenodd"
          d="M360 0H0v240.531a30.002 30.002 0 0 1 17.143-19.871l150.5-64.753a30.007 30.007 0 0 1 23.714 0l150.5 64.753A30 30 0 0 1 360 248.217V0Zm0 275.43a30.08 30.08 0 0 1-.963 7.57H360v-7.57Z"
          clipRule="evenodd"
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={180}
            x2={180}
            y1={0}
            y2={283}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.41} stopColor="#2B3A6C" />
            <Stop offset={0.72} stopColor="#3B6B83" />
            <Stop offset={1} stopColor="#345C7C" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hola</Text>
        <Text style={styles.subtitulo}>Inicia sesión para continuar</Text>
        <TextInput 
          placeholder='Usuario'
          style={styles.textInput}
        />
        <TextInput 
          placeholder='Contraseña'
          style={styles.textInput}
        />
        <Text style={styles.forgotPassword}>Recuperar Contraseña</Text>
        <ButtonGradient />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray'
  },
  textInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  }
});
