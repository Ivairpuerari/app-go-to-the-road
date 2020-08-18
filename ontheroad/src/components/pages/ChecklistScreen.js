import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../assets/styles';

export default function ChecklistScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const frota = route.params.frota;

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
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

    setItems(itemsFicticios);
  }

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToItem() {
    const item = 'Tire fotos';
    navigation.navigate('Item', {item});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={40} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>{frota}</Text>
      </View>
      <View style={styles.containerText}>
        <FlatList
          data={items}
          style={styles.checklistLista}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item: item}) => (
            <View style={styles.checklist}>
              <Text style={styles.checklistTitle}>Item + {item.id} </Text>
              <Text style={styles.checklistDescricao}>{item.description}</Text>

              <TouchableOpacity
                style={styles.checklistFoto}
                onPress={navigateToItem(item.description)}>
                <Text style={styles.checklistButtonText}>Abrir câmera</Text>
                <Feather name="arrow-right" size={16} color="#009a17" />
              </TouchableOpacity>
            </View>
          )}
        />
        <View>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
