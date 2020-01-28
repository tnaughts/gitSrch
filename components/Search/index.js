import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import style from './style'
import axios          from 'axios'
import idx from 'idx'
import {ResultList} from '../ResultList'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const API_URL = 'https://api.github.com/search/repositories?q='

export const Search = function Search(props){
  const [value, onChangeText] = useState('Search GitHub');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false)
  const [data, setData] = useState([])
  const {navigation} = props
  
  const textInput = useRef(null);
  useEffect(  
    function updateFocus(){
      if(searchFocus){
        textInput.focus()
      }else {

      }
    },
    [searchFocus]
  )
  
  function changeText(text){
    onChangeText(text)
  }
  
  function handlePress(){
    searchGithub()
    handleBlur()
  }
  
  function handleBlur(){
    setSearchFocus(false)
  }
  
  
  function searchGithub(){
    setIsError(false);
    setIsLoading(true);
    const queryString = API_URL + value.replace(/ /g, '+')  

      axios.get(queryString)
      .then((res) => {
        setData(res.data)
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true)
        setIsLoading(false);
      })
  }
  
  function renderResults(){
    const items = idx(data, _ => _.items)
    if(isLoading){
      return <View style={style.loading}>
      <ActivityIndicator size="large" color='white' />
      </View>
    }
    if(items){
      return <ResultList navigation={navigation} results={items}/>
    }
    if(isError){
      return <View style={style.loading}>
        <Text style={style.error}>Error reaching server please try again</Text>
      </View>
    }
    return null
  }
  
  return <View style={style.container}>
  <KeyboardAwareScrollView>
  <View>
    <View style={style.searchBarContainer}> 
      <View style={style.searchBar}>
          <TextInput
          ref={textInput}
          value={value}
          blur={handleBlur}
          onChangeText={changeText}
          style={style.input}
          enablesReturnKeyAutomatically
          maxLength={200}
          clearButtonMode={'always'}
          underlineColorAndroid={'transparent'}/>
        </View>
        <TouchableHighlight
          style={style.searchButton}
          onPress={handlePress}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
        {renderResults()}
      </View>
      </KeyboardAwareScrollView>
    </View>
  
}