import { StyleSheet, Text, View , TouchableOpacity, TextInput} from 'react-native';
import {useEffect, useState} from 'react';

export default function App() {

  const [contador, setContador] = useState(0);
  function atualizarContador(){
    setContador(contador + 1);
  }

  const [nome,setNome] = useState("Daniel e Rafael")
  function atualizarNome(texto) {
    setNome(texto)
  }

  const [segundos, setSegundos] = useState(0);

  useEffect(() =>{
    function addSegundos() {
      setInterval(() => setSegundos(segundo=>segundo+1),1000)
    }

    addSegundos();

  },[])

  return (
    <View style={styles.container}>

      <TouchableOpacity
      onPress = {atualizarContador}

      style = {{width:'85%',
      backgroundColor:"pink",
      alignItems: 'center',
      justifyContent: 'center',
      height:60
      }}>

      <Text style = {{color:'white',fontSize:30}}>Clicar</Text>
      </TouchableOpacity>

      <Text style={{fontSize:25,marginEnd:10}}>
        Você clicou {contador} vezes!
      </Text>

      <Text style = {{color:'black',fontSize:20,marginTop:20}}>Preencha o input com seu nome</Text>

      <TextInput style={{
        width:'80%',
        backgroundColor:'gray'
      }}
      onChangeText = {(texto) => atualizarNome(texto)}>
      </TextInput>
      <Text style = {{fontSize:20,marginTop:20}}>{nome}</Text>
      <Text style = {{fontSize:20,marginTop:20}}>Já se passaram {segundos} segundos!</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
