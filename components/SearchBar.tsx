import { View, Image, TextInput } from 'react-native'
import { icons } from '@/constants/icons';

interface Props {
    placeholder: string;
    value?: string;
    onPress?: () => void;
    onChangeText?: (text:string) => void;
}

const SearchBar = ({placeholder, value, onChangeText, onPress}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200
     rounded-full px-5 py-4'>
      <Image source={icons.search}  className='w-5 h-5'
      resizeMode='contain' tintColor="#ab8bff"/>
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className='flex-1 ml-2 text-white'
        placeholderTextColor="#a8b5db"
      />
    </View>
  )
}

export default SearchBar;