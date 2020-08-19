import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './styles';

export default function Checklist() {
  const [isItemValido, setIsItemValido] = useState(false);

  const route = useRoute();

  const [activeStep, setActiveStep] = useState(0);

  const frota = route.params.frota;

  const [error, setError] = useState(false);

  useEffect(() => {
    setActiveStep(0);
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

  async function onNextStep() {
    if (!isItemValido) {
      setIsItemValido(true);
    } else {
      setIsItemValido(false);
    }
  }

  return (
    <View style={Styles.container}>
      <ScrollView>
        <ProgressSteps
          progressBarColor="#029B11"
          activeStepIconBorderColor="#029B11"
          activeLabelColor="#029B11"
          completedProgressBarColor="#029B11"
          completedStepIconColor="#029B11"
          removeBtnRow={true}
          activeStep={activeStep}>
          <ProgressStep removeBtnRow label={itemsFicticios[0].title}>
            <Text>{itemsFicticios[0].description}</Text>
            <TouchableOpacity
              onPress={() => {
                setActiveStep(1);
              }}>
              <Feather name="arrow-right" size={40} color="#029B11" />
            </TouchableOpacity>
          </ProgressStep>

          <ProgressStep removeBtnRow label={itemsFicticios[1].title}>
            <Text>{itemsFicticios[1].description}</Text>
            <TouchableOpacity
              onPress={() => {
                setActiveStep(2);
              }}>
              <Feather name="arrow-right" size={40} color="#029B11" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveStep(0);
                console.log(activeStep);
              }}>
              <Feather name="arrow-left" size={40} color="#029B11" />
            </TouchableOpacity>
          </ProgressStep>

          <ProgressStep label={itemsFicticios[2].title}>
            <Text>{itemsFicticios[2].description}</Text>
          </ProgressStep>

          <ProgressStep label="Finalizar">
            <Text>Finalizado</Text>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}

const styleBtn = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#029B11',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
