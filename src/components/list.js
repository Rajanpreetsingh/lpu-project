import React from "react";
import { FlatList} from "react-native";

// Top Header
export default  List = (props) => {
    return (
          <FlatList
            keyExtractor={(item, index) => index + (props.keyname ? props.keyname:'task')}
            data={props.data}
            numColumns={props.numColumns}
            renderItem={(item,index) => props.renderItem(item,index)}
            style={{ flex: 1, marginHorizontal: 8 }}
        />
    )
}