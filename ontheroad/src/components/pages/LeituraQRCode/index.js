import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

export default function HomeScreen() {
  const [frota, setFrota] = useState('');

  async function loadFrota() {
    setFrota('');
  }

  useEffect(() => {
    loadFrota();
  }, []);

  const navigation = useNavigation();

  function navigateToChecklist() {
    console.log(' route ');
    navigation.navigate('Checklist', {frota});
  }

  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach((barcode) => {
      if (barcode.type === 'QR_CODE') {
        setFrota(barcode.data.toString());
        console.log(frota);
        navigateToChecklist();
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Ler QR-Code</Text>
        <Text style={styles.description}>
          Posicione a câmera sobre o QR-Code do veiculo e inicie o check-list de
          liberação!
        </Text>

        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.camera}
          onGoogleVisionBarcodesDetected={barcodeRecognized}
        />
      </View>
    </View>
  );
}
