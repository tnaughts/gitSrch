import React, {useState, useEffect, useRef} from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  FlatList 
}                         from 'react-native';
import axios              from 'axios'
import idx                from 'idx'
import {ResultListCell}   from './ResultListCell'
import style              from './style'
import * as Animatable  from 'react-native-animatable'

export const ResultList = function ResultList(props){
  const { results, navigation, fetchMore } = props
  const searchListRef = useRef(null);
  
  function scrollToTop(){
    idx(searchListRef, _ => _.current.scrollToIndex({index: 0}))
  }
  
  useEffect(
    function resetList(){
      scrollToTop()
    },
    [results]
  )
  
  function handleFetchMore(){
    if(fetchMore){
      fetchMore()
    }
  }
  
  function renderItem({item: result}){
    return <View style={style.cell}>
      <ResultListCell 
        onEndReached={handleFetchMore}
        navigation={navigation}
        result={result}/>
    </View>
  }
  
  return <Animatable.View style={style.container} animation='fadeIn'>
    <FlatList
      ref={searchListRef}
      data={results}
      renderItem={renderItem}
      initialNumToRender={30}
      windowSize={3}
      keyExtractor={(item) => item.id.toString()}/>
  </Animatable.View>
}