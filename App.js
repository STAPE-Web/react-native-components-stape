import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Alert from './components/Alert';
import Button from './components/Button';
import Contact from './components/Contact';
import DropDown from './components/DropDown';
import Input from './components/Input';
import Modal from './components/Modal';
import Nav from './components/Nav';
import Post from './components/Post';
import Text from './components/Text';
import Textarea from './components/Textarea';
import { CogIcon } from 'react-native-heroicons/outline'
import Search from './components/Search';
import BackGround from './components/BackGround';

export default function App() {

  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [textarea, setTextarea] = useState('')
  const [modal, setModal] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const open = () => {
    console.log(true);
  }

  const obj = [
    {
      id: 1,
      name: 'one',
      active: true,
    },
    {
      id: 2,
      name: 'two',
    },
    {
      id: 3,
      name: 'three',
    },
    {
      id: 4,
      name: 'four',
    },
    {
      id: 5,
      name: 'five',
    },
    {
      id: 6,
      name: 'six',
    },
  ]
  const icons = [
    { id: 1, icon: CogIcon, width: 50, height: 50, onClick: () => { open() } },
    { id: 2, icon: CogIcon, width: 50, height: 50, onClick: () => { open() } },
    { id: 3, icon: CogIcon, width: 50, height: 50, onClick: () => { open() } },
    { id: 4, icon: CogIcon, width: 50, height: 50, onClick: () => { open() } },]

  return (
    <View style={styles.container}>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#130022',
    padding: '10px',
  },
  text: {
    color: '#fff'
  }
});


// #130022