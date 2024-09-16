import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import styles from '../../assets/Styles';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const CreatePost = ({navigation}) => {
    const { height: screenHeight } = Dimensions.get("window");
    const [imageUri, setImageUri] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);

    const openGallery = async () => {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });
  
      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorCode) {
        console.log('ImagePicker Error: ', result.errorMessage);
      } else {
        const uri = result.assets[0].uri;
        setImageUri(uri);
        uploadImageToFirebase(uri);
      }
    };

    const uploadImageToFirebase = async (imageUri) => {
      if (!imageUri) {
        Alert.alert('Please select an image first!');
        return;
      }
  
      const filename = "posts/22/"+imageUri.substring(imageUri.lastIndexOf('/') + 1);
      const uploadUri = imageUri;
      const reference = storage().ref(filename);
  
      setUploading(true);
      setTransferred(0);
  
      const task = reference.putFile(uploadUri);
  
      // Set transferred state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        );
      });
  
      try {
        await task;
        const downloadURL = await reference.getDownloadURL();
        console.log('Download URL: ', downloadURL);
        // do anything if the uploaded.
      } catch (e) {
        console.error(e);
      }

      setUploading(false);
    };

  return (
    <View style={{
        flex: 1,
        gap: 1,
        backgroundColor: colors.gray
    }}>
        <View style={[Styles.row,{
            justifyContent: 'space-between',
            backgroundColor: colors.white,
            padding: 10
        }]}>
            <TouchableOpacity onPress={() => navigation.navigate("HOME")}>
                <Icon name="times" size={18}></Icon>
            </TouchableOpacity>
            <Text>Create Post</Text>
            <TouchableOpacity>
                <Text>Post</Text>
            </TouchableOpacity>
        </View>
        <View style={[Styles.postWrapper, {
            marginTop: 1,
            minHeight: screenHeight
        }]}>
            <View style={Styles.profileWrapper}>
                <Image source={{uri: 'https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg'}} style={Styles.profileImage}/>
                <View style={Styles.postDetailWrapper}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 18,
                    }}>Aldino Said</Text>
                </View>
            </View>
            <View style={[Styles.contentWrapper, {
                gap: 50
            }]}>
                <TextInput
                    placeholder="What's on your mind?"
                    placeholderTextColor="gray"
                    multiline={true}
                />
                {imageUri && <Image source={{ uri: imageUri }} style={Styles.imageContent} />}
                {uploading ? (
                  <Text>{transferred}% completed</Text>
                ) : (
                  downloadURL && <Text>Image uploaded! URL: {downloadURL}</Text>
                )}
                <View style={[Styles.row, {
                    justifyContent: 'space-between'
                }]}>
                    <TouchableOpacity>
                        <Ionicon name="image-outline" onPress={openGallery} size={30}/>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Ionicon name="image-outline" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicon name="image-outline" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicon name="image-outline" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicon name="image-outline" size={30}/>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    </View>
  )
}

export default CreatePost