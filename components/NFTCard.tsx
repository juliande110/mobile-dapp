import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {CircleButton, RectButton} from './CircleButton'
import {SubInfo, EthPrice, NFTTitle} from './SubInfo';
import {COLORS, SHADOWS, SIZES, assets} from '../constants'


interface NFTCardProps {
    item: {
        id: string;
        name: string;
        creator: string;
        price: number;
        description: string;
        image: any;
        bids: {
            id: string;
            name: string;
            price: number;
            image: any;
            date: string;
        }[]
    }
}

const NFTCard = (props : NFTCardProps) => {
    const navigation = useNavigation();

    const {item} = props;

  return (
    <View  style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
        <View style={{width: "100%", height: 250}}>
            <Image source={item.image} resizeMode="cover" style={{width: "100%", height: "100%", borderRadius: SIZES.font}} />
            <CircleButton imgUrl={assets.heart} right={10} top={10} handlePress={()=> null}/>
        </View>
        <SubInfo/>
        <View style={{width: "100%", padding: SIZES.font}}>
            <NFTTitle title={item.name} subTitle={item.creator} titleSize={SIZES.font} subTitleSize={SIZES.font}/>
            <View style={{marginTop: SIZES.font, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <EthPrice price={item.price.toString()}/>
                <RectButton minWidth={100} fontSize={SIZES.font}
                //ignore this line, it's just to make the button work
                // @ts-ignore
                handlePress={()=> navigation.navigate("Details", {item})}/>
            </View>
        </View>
    </View>
  )
}

export default NFTCard