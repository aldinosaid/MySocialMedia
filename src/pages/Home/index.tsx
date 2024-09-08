import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from '../../assets/Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../../assets/Styles';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

function SignUp(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView style={{backgroundColor: '#EEEDEB'}}>
        <View style={styles.postWrapper}>
            <View style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center'
            }}>
                <Image source={{uri: 'https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg'}} style={Styles.profileImage}/>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: "#11111"
                    }}>What's on your mind?</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Posts
            profileImage="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
            username="Marchila Uno"
            latestUpdate="2 hours ago"
            postContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            imageContent="https://www.blibli.com/friends-backend/wp-content/uploads/2023/10/B900642-Cover-apa-itu-staycation-1.jpg"
        />
        <Posts
            profileImage="https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/428680501_3561914314070013_9126411785350456980_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFnQLXnMGlKjGtJJWBGeWqxgnivPAqivUaCeK88CqK9RhdtS-MPiHrnrX1MzSUh15s4fbcq1Vvd6FSCzoDJ10Cg&_nc_ohc=5BeAHOUwHnIQ7kNvgGwvId0&_nc_ht=scontent-cgk2-1.xx&oh=00_AYCvUEXu1C4kB32mhKxEGoQK36dM3SBm5jgsQKvnYy98mQ&oe=66C040EF"
            username="Aldino Said"
            latestUpdate="1 hours ago"
            postContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            imageContent="https://scontent-cgk2-1.xx.fbcdn.net/v/t1.6435-9/58542935_2232784350316356_5510032321635418112_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeENtFpLmvwWLo_LCoaEqbzfgdm3ZDTTB3OB2bdkNNMHcwcgRjxJxU9Rop9Rol1C_DqUQoC7a74LH1pyhl93YnIZ&_nc_ohc=JacPuK4ULroQ7kNvgFtuIIh&_nc_ht=scontent-cgk2-1.xx&oh=00_AYAqqqOix9Tc00S80SpLHm-q-Urainuu8Or9uYAVRuxOmw&oe=66E1E2B8"
        />
        <Posts
            profileImage="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_24-11-20_J7KEDLQ6_3.jpeg_standard-copy.jpg"
            username="Andika galih"
            latestUpdate="0 minutes ago"
            postContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            imageContent="https://v1.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/ini-dia-alasan-staycation-di-indonesia-aja-jadi-tren-liburan-di-masa-adaptasi-kebiasaan-baru/2.jpg"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const Posts = (props) => {
    return (
        <View style={Styles.postWrapper}>
            <View style={Styles.profileWrapper}>
                <Image source={{uri: props.profileImage}} style={Styles.profileImage}/>
                <View style={Styles.postDetailWrapper}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 18,
                    }}>{props.username}</Text>
                    <Text style={{
                        fontSize: 12
                    }}>{props.latestUpdate}</Text>
                </View>
            </View>
            <View style={Styles.contentWrapper}>
                <Text style={Styles.snippetContent}>
                    {props.postContent}
                </Text>
            </View>
            <Image source={{uri: props.imageContent}} style={Styles.imageContent}/>
            <View style={[Styles.column, {
                gap: 16
            }]}>
                <View style={[Styles.row, {
                    justifyContent: 'space-between',
                    marginTop: 10
                }]}>
                    <View style={[Styles.row, Styles.gap4]}>
                        <AntDesign name="like2" size={15} />
                        <Text style={{
                            fontSize: 12
                        }}>20 Likes</Text>
                    </View>
                    <View style={Styles.row}>
                        <Text style={{
                            fontSize: 12
                        }}>20 Comments .</Text>
                        <Text style={{
                            fontSize: 12
                        }}>4 Shares</Text>
                    </View>
                </View>
                <View style={[Styles.row,{
                    justifyContent: 'space-around',
                }]}>
                    <View style={[Styles.row, Styles.gap4]}>
                        <AntDesign name="like2" size={20} />
                        <Text>Like</Text>
                    </View>
                    <View style={[Styles.row, Styles.gap4]}>
                        <FontAwesome5 name="comment-alt" size={20} />
                        <Text>Comments</Text>
                    </View>
                    <View style={[Styles.row, Styles.gap4]}>
                        <FontAwesome5 name="share" size={20} />
                        <Text>Share</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SignUp;
