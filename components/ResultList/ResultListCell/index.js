import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import idx from 'idx'

import style from './style'

export const ResultListCell = function ResultListCell(props){
const {result, navigation} = props

function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function onPress(){
   idx(navigation, _ => _.push('Repo', {repo: result, name: result.name}))
}

  return <TouchableHighlight onPress={onPress} style={style.container}>
    <View style={style.container}>
      <Text style={style.title}>{result.owner.login}/{result.name}</Text>
      <Text numberOfLines={1}>{idx(result, _ => _.description)}</Text>
      <Text>Stars: {kFormatter(result.stargazers_count)}</Text>
      <Text>Language: {result.language}</Text>
    </View>
  </TouchableHighlight>
}