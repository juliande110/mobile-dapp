import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

interface ButtonProps {
    imgUrl: any;
    right?: number;
    top?: number | undefined;
    left?: number;
    handlePress?: () => void;
}

export const CircleButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={{width: 40, height: 40, backgroundColor: COLORS.white, position: "absolute", borderRadius: SIZES.extraLarge, alignItems: "center", justifyContent: "center", ...SHADOWS.light, ...props}} onPress={props.handlePress}>
        <Image source={props.imgUrl} resizeMode="contain" style={{width: 24, height: 24}} />
    </TouchableOpacity>
  )
}

interface RectButtonProps {
    minWidth?: number;
    fontSize?: number;
    handlePress?: () => void; 
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props } : RectButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};


