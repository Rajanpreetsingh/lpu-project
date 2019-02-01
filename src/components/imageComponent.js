import React from "react";
import { TouchableOpacity,Text,Dimensions,View} from "react-native";
const {height,width} = Dimensions.get('window')
export default  ImageComponent = (props) => {
return(
  
<TouchableOpacity style={{
                        flex: 0.5,
                        marginHorizontal: 16,
                        borderColor: '#4AC2E2',
                        height: height/640*120,
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: 'center',
                        marginVertical:16,
                        alignItems: 'center', backgroundColor: 'white'
                    }}
                    onPress = {() => null}>
                        <Text style={{
                            color: '#4AC2E2',
                            lineHeight: 48, letterSpacing: 0.9, fontSize: 40,
                            fontFamily: 'Colfax-Medium'
                        }}>
                            {props.date.date}
                        </Text>
                        <View style={{height:2,backgroundColor:'#4AC2E2',width:20}}></View>
                        <Text style={ {
                            color: '#4AC2E2',
                            lineHeight: 23, letterSpacing: 0.9, fontSize: 18,
                            fontWeight:'normal',
                            fontFamily: 'Colfax-Medium'
                        }}>
                           {props.title.title}
                        </Text>
                        
 </TouchableOpacity>
                    
                    
);
}