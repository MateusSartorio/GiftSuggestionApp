import React, {useState} from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity, StyleSheet, Clipboard} from 'react-native';
import {State} from 'react-native-gesture-handler';

const messageBackground = require('../assets/backgroundMessage.png');
var alreadyGenerated = false;

export default Message = ({route, navigation}) => {

  const [value, setValue] = useState(0);

  const {friendName} = route.params;

  const randomMessages = ['',
                        `Felicidades${friendName}! Para sempre estará em meu coração!`,
                        `Que a sua vida seja sempre uma soma de vitórias. Felicidades${friendName}!`,
                        `Parabéns${friendName}! Uma pessoa maravilhosa como você merece tudo de bom na vida!`,
                        `Desejo que você tenha sempre muita saúde, paz, amor e sucesso em sua vida. Felicidades sempre${friendName}!`,
                        `Que o seu dia seja cheio de grandes alegrias do começo ao fim e que o amor, carinho e felicidade deste dia permaneçam sempre com você! Felicidades${friendName}!`,
                        `Parabéns${friendName}! Que o tempo seja sempre o seu melhor parceiro, trazendo equilíbrio e sabedoria que lhe darão a receita ideal para viver a vida, aproveitando o melhor que ela tem a oferecer.`,
                        `Que a esperança, a alegria de viver, a paz e a saúde sejam dádivas renovadas em sua vida hoje e que se estendam por todo o ano. Felicidades${friendName}!`,
                        `Parabéns${friendName}! Muita paz, saúde e sucesso em sua vida.`,
                        `Tenho muito orgulho de você. Parabéns${friendName} e nunca deixe de ser essa pessoa maravilhosa.`,
                        `Parabéns${friendName}! Que seu dia seja recheado de boas surpresas e que Deus ilumine seus caminhos.`,
                        `Te desejo um dia lindo, cheio de diversão e muita alegria junto das pessoas que você ama. Que Deus te guie sempre. Felicidades${friendName}!`,
                        `Que a felicidade seja constante em sua vida e que nunca te falte amor no coração e esperança em seus dias. Tudo de bom${friendName}!`,
                        `Desejo a você um ano cheio de amor e alegria. Tudo de bom${friendName}.`,
                        `Para a pessoa mais encantadora do mundo, um beijinho muito especial. Tudo de bom${friendName}!`,
                        `Que Deus esteja sempre ao seu lado, guiando seus passos e te orientando pelo caminho certo. Felicidades${friendName}!`,
                        `Parabéns! Que Deus te ilumine, te guie e te proteja em todos os dias da sua vida. Felicidades${friendName}!`,
                        `Parabéns${friendName}! Uma pessoa maravilhosa como você merece tudo de incrível na vida.`,
                        `Que o brilho de tua vida busque no céu a essência da luz da vitória para espalhar em teu caminho otimismo, esperança, compreensão, coragem e determinação para continuar a vencer. Tudo de bom${friendName}.`,
                        `Tudo de bom${friendName}! Que a felicidade acompanhe sempre você em todos os dias da sua vida.`,
                        `Que não faltem sorrisos no seu rosto, samba no coração e paz na mente. Felcidades${friendName}!`        
                        ];

  

  const generateMessage = () => {setValue(Math.floor((Math.random() * (randomMessages.length - 1) )) + 1); alreadyGenerated = true };

  const copyText = () => Clipboard.setString(randomMessages[value]);

  if(alreadyGenerated == false)
    generateMessage();

  return (
    

      <ImageBackground source = {messageBackground} style = {styles.background}>

        <Text style = {styles.text}>Sua mensagem:</Text>

        <Text style = {styles.message}>{randomMessages[value]}</Text>
    
       <TouchableOpacity style = {styles.copy} onPress = {copyText} >
          <Text style = {styles.buttonText}>Copiar</Text>
       </TouchableOpacity>


      </ImageBackground>

        
    
        
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    justifyContent: 'flex-start',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    left: 25,
    top: 110
  },
  message: {
      justifyContent: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 25,
      marginTop: 170,
      marginBottom: 20,
      marginLeft: 45,
      marginRight: 35,
    },
    copy: {
      width: 100,
      height: 50,
      textAlign: 'center',
      backgroundColor: '#871b3f',
      paddingTop: 10,
      borderRadius: 10,
      position: 'absolute',
      bottom: 35,
    },
    buttonText: {
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    }
});
