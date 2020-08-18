import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  containerText: {
    paddingHorizontal: 24,
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#009a17',
  },

  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 20,
  },

  title: {
    fontSize: 17,
    marginBottom: 5,
    marginTop: 10,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 14,
    marginBottom: 10,
    color: '#737380',
  },

  camera: {
    flex: 1,
    width: '100%',
  },
  checklist: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  checklistTitle: {
    fontSize: 14,
    color: '#13131a',
    fontWeight: 'bold',
  },
  checklistDescricao: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  checklistFoto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checklistLista: {
    marginTop: 32,
  },
  checklistButtonText: {
    color: '#009a17',
    fontSize: 15,
    fontWeight: 'bold',
  },
  action: {
    marginTop: 15,
    marginBottom: 8,
    marginLeft: '30%',
    backgroundColor: '#009a17',
    borderRadius: 8,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
