import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import {MaterialIcons} from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './styles';

export default function Checklist() {
  const labels = [
    'Cart',
    'Delivery Address',
    'Order Summary',
    'Payment Method',
    'Track',
  ];
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

  const getStepIndicatorIconConfig = ({position, stepStatus}) => {
    const iconConfig = {
      name: 'feed',
      color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
      size: 15,
    };
    switch (position) {
      case 0: {
        iconConfig.name = 'shopping-cart';
        break;
      }
      case 1: {
        iconConfig.name = 'location-on';
        break;
      }
      case 2: {
        iconConfig.name = 'assessment';
        break;
      }
      case 3: {
        iconConfig.name = 'payment';
        break;
      }
      case 4: {
        iconConfig.name = 'track-changes';
        break;
      }
      default: {
        break;
      }
    }
    return iconConfig;
  };

  const renderStepIndicator = (params) => (
    <MaterialIcons {...getStepIndicatorIconConfig(params)} />
  );

  const onStepPress = (position) => {
    setCurrentPosition(position);
  };

  return (
    <View style={Styles.container}>
      <ScrollView>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          onPress={onStepPress}
          renderStepIndicator={renderStepIndicator}
          labels={labels}
        />

        <TouchableOpacity onPress={onStepPress(currentPosition + 1)}>
          <Feather name="arrow-left" size={40} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
