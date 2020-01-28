import React from 'react';
import { ScrollView, Text, View} from 'react-native';
import style from './style'
import axios          from 'axios'
import idx from 'idx'
import * as Animatable  from 'react-native-animatable'

const Repo = function Repo(props){
  const {navigation} = props
  const repo = idx(navigation, _ => _.state.params.repo)
  
  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  
  return <ScrollView style={style.container}>
    <Animatable.View animation='fadeIn'>
      <Text style={style.body}>Watchers: {kFormatter(repo.watchers)}</Text>
      <Text style={style.body}>Stars: {kFormatter(repo.stargazers_count)}</Text>
      <Text style={style.body}>Language: {repo.language}</Text>
      <View style={style.description}>
        <Text>Description: {idx(repo, _ => _.description)}</Text>
      </View>
    </Animatable.View>
  </ScrollView>
}

Repo.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name', 'Repo')
});

export default Repo


