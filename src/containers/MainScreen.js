
import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Dimensions, View } from 'react-native';
import ImageComponent from '../components/imageComponent';
import List from '../components/list'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as doAction from '../store/nasa/duck'
import { SUCCESS } from '../store/nasa/constants';
import { responsiveHeight, responsiveWidth } from '../assets/constants'
import { Images } from '../assets/images';

const { height, width } = Dimensions.get('window')
class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            data: [
            ]
        }
    }

    componentWillMount() {
        this.props.doUserComplete()
    }

    renderItem = ({ item }) => {
        const dateFromApi = new Date(item.date);
        const month = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][dateFromApi.getMonth()];
        const str = dateFromApi.getUTCDate() + ' ' + month;
        return (

            <TouchableOpacity style={{
                flex: 0.5,
                marginHorizontal: 8,
                height: height / 640 * 180,
                justifyContent: 'center',
                marginVertical: 8,
                alignItems: 'center'
            }}
                onPress={() => this.props.navigation.navigate('SubScreen',
                    { title: item.title, image: item.url, explanation: item.explanation, date: item.date })}>

                <ImageBackground
                    resizeMode={'contain'}
                    style={{ height: height / 4, width: width / 2.2 }}
                    source={Images.mainScreenImage}>
                    <View style={{ height: responsiveHeight(5) }} />
                    <Text style={{
                        color: 'white',
                        lineHeight: 23, letterSpacing: 0.9, fontSize: 10,
                        fontWeight: 'normal',
                        textAlign: 'right',
                        right: 5,
                        fontFamily: 'Colfax-Medium'
                    }}>
                        {str}
                    </Text>
                    <View style={{ height: responsiveHeight(8) }} />
                    <Text style={{
                        color: 'white', letterSpacing: 0.9, fontSize: 12, textAlign: 'center',
                        fontFamily: 'Colfax-Medium'
                    }}>
                        {item.title}
                    </Text>

                </ImageBackground>
            </TouchableOpacity>
        )
    }
    render() {
        console.log(this.props, 'proppssss')
        const practiceArray = this.props.userStore.user;
        console.log(practiceArray, 'practice array')
        const reverseArray = this.props.userStore.user.reverse();
        console.log(reverseArray, '@@@@@@@@@@@@@@')
        return (
            <ScrollView >
                <View style={{ height: 20 }}></View>
                <Text style={[styles.welcome, { left: 10 }]}>Astronomy Picture Of The Day</Text>
                {/* <List 
                data={this.state.data}
                numColumns={2}
                style={{flex:1}}
                renderItem={(item,index)=> this.renderItem(item,index)}/> */}

                <FlatList
                    data={this.props.userStore.user}
                    numColumns={2}
                    renderItem={(item, index) => this.renderItem(item, index)}
                    style={{ flex: 1, marginHorizontal: 1 }}
                />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold'
    }
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...doAction
    }, dispatch);
};


const mapStateToProps = ({
    userStore
}) => ({
    userStore
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)