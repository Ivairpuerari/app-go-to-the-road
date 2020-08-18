import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {SliderBox} from 'react-native-image-slider-box';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../assets/styles';

export default function ItemScreen() {
  const navigation = useNavigation();

  const route = useRoute();

  const [preview, setPreview] = useState([]);

  const item = route.params.item;

  function navigateBack() {
    navigation.goBack();
  }

  async function handleSelectImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
      },
      (upload) => {
        if (upload.error) {
          console.log('ImagePicker Error: ', upload.error);
        } else {
          const source = {uri: upload.uri};

          setPreview([...preview, source]);

          console.log({preview});
        }
      },
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{item}</Text>
      </View>
      <View tyle={styles.containesrText}>
        <View>
          <TouchableOpacity style={styles.action} onPress={handleSelectImage}>
            <Feather name="camera" size={80} color="black" />
            <Feather name="trash" size={80} color="black" />
          </TouchableOpacity>
          <View>
            <SliderBox
              images={preview}
              sliderBoxHeight={400}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}
