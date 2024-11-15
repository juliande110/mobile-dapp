import { StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'

interface FocusedProps {
    backgroundColor: string
    barStyle: 'light-content' | 'dark-content'
    translucent: boolean
}

const FocusedStatusBar = (props : FocusedProps) => {
    
    const isFocused = useIsFocused()
    
    return isFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FocusedStatusBar