import { View, Text,SafeAreaView, FlatList } from 'react-native'
import React, {useState} from "react";
import {COLORS, NFTData} from '../constants'  
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {

  const [nftData, setNFTData] = useState(NFTData)

  const handleSearch = (text: string) => {
    if(!text.length) return setNFTData(NFTData)
    const filteredData = NFTData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    setNFTData(filteredData)
  } 

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
        <FlatList
          data={nftData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          renderItem={({item}) => <NFTCard item={item} />}
        />
        </View>
        <View style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}>
          <View style={{height: 300, backgroundColor: COLORS.primary}} />
          <View style={{height: 300,flex: 1, backgroundColor: COLORS.white}} />
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Home