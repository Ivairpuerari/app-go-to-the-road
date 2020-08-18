import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import Styles from './styles';

export default function Checklist() {
  const [isItemValido, setIsItemValido] = useState(false);

  const route = useRoute();

  const frota = route.params.frota;

  const [error, setError] = useState(false);

  const itemsFicticios = [
    {
      id: 1,
      title: 'Mercadoria Carregada',
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
      title: 'Caminhão Finalizado',
      description: 'Caminhão da frota pronto para seguir viagem.',
    },
  ];

  async function onNextStep() {
    if (!isItemValido) {
      setIsItemValido(true);
    } else {
      setIsItemValido(false);
    }
  }

  return (
    <View style={Styles.container}>
      <ProgressSteps>
        <View style={Styles.container}>
          <ProgressStep label="Baú Vazio" onNext={onNextStep} errors={error}>
            <Text>This is the content within step 2!</Text>
          </ProgressStep>
        </View>
        <View style={Styles.container}>
          <ProgressStep label="Baú Carregado">
            <Text>This is the content within step 2!</Text>
          </ProgressStep>
        </View>
        <View style={Styles.container}>
          <ProgressStep label="Carga Pronta">
            <Text>This is the content within step 3!</Text>
          </ProgressStep>
        </View>
        <View style={Styles.container}>
          <ProgressStep label="Finalizar">
            <Text>This is the content within step 3!</Text>
          </ProgressStep>
        </View>
      </ProgressSteps>
    </View>
  );
}
