import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {SliderBox} from 'react-native-image-slider-box';
import Feather from 'react-native-vector-icons/Feather';
import {Styles} from './styles';

export default function Item() {
  const [preview, setPreview] = useState([]);

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
    <View>
      <TouchableOpacity style={Styles.action} onPress={handleSelectImage}>
        <Feather name="camera" size={80} color="black" />
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
  );
}
