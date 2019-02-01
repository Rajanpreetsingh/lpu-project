
import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, ScrollView, ImageBackground, StatusBar, TouchableOpacity, Image, Dimensions, View } from 'react-native';
import ImageComponent from '../components/imageComponent';
import List from '../components/list'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as doAction from '../store/nasa/duck'
import FastImage from 'react-native-fast-image';
import { Images } from '../assets/images'
import { responsiveHeight, responsiveWidth } from '../assets/constants'
const { height, width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/AntDesign'

export default class SubScreen extends Component {

    render() {
        console.log(this.props.navigation.state.params.image, 'image url')
        const dateFromApi = new Date(this.props.navigation.state.params.date);
        const month = ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][dateFromApi.getMonth()];
        const str = dateFromApi.getUTCDate() + ' ' + month;
        console.log(str)
        return (
            <ImageBackground style={{ height: height, width: width }}
                source={Images.mainScreenImage} >
                <ScrollView>
                    <View style={{ height: responsiveHeight(5) }}></View>
                    <TouchableOpacity style={styles.banner} onPress={() => this.props.navigation.navigate('MainScreen')}>
                        <Icon name={'arrowleft'} color={'white'} size={28} />
                    </TouchableOpacity>
                    <View style={{ height: responsiveHeight(40) }}></View>
                    <View style={{ paddingHorizontal: responsiveWidth(5) }}>
                        <View style={{ flexDirection: 'row' }} >

                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', width: width / 1.5 }}>{this.props.navigation.state.params.title}</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', textAlign: 'right', width: width / 4 }}>{str}</Text>
                            </View>
                        </View>
                        <View style={{ height: responsiveHeight(3) }}></View>
                        <Text style={{ color: 'white' }}>{this.props.navigation.state.params.explanation}</Text>
                    </View>
                    <StatusBar
                        translucent
                        backgroundColor="transparent"
                    />
                </ScrollView>
            </ImageBackground>
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
        textAlign: 'center'
    },
    banner: {
        flexDirection: 'row',
        color: 'white',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
});
