import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ['Mercadoria Pronta', 'Baú Lacrado', 'Documentação entregue'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

export default function Checklist() {
  const route = useRoute();

  const [currentPosition, setCurrentPosition] = useState(0);

  const frota = route.params.frota;

  useEffect(() => {
    setCurrentPosition(0);
  }, []);

  const itemsFicticios = [
    {
      id: 1,
      title: 'Mercadoria Pronta',
      description:
        'Estado da mercadoria incluido no Baú do caminhão que compoe está frota.',
    },
    {
      id: 2,
      title: 'Baú Lacrado',
      description: 'Caminhão da frota com Baú Lacrado.',
    },
    {
      id: 3,
      title: 'Documentação entregue',
      description:
        'Caminhão da frota pronto para seguir viagem com documentação entregue ao motorista.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 20, left: 90, top: -40}}>
        Security level
      </Text>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});
