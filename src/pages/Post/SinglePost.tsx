import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../assets/Styles';
import colors from '../../assets/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const SinglePost = ({navigation}) => {
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
        
        //prefix comments/userid/postid/filename.jpg
        const filename = "comments/22/10/"+imageUri.substring(imageUri.lastIndexOf('/') + 1);
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
    <View style={[{
        justifyContent: 'space-between',
        backgroundColor: colors.gray,
        gap: 1
    }]}>
      <View style={{
        backgroundColor: colors.white,
        padding: 10
      }}>
        <TouchableOpacity onPress={() => navigation.navigate("HOME")}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: colors.white,
        minHeight: '60%',
        padding: 20
      }}>
        <View style={[Styles.row, {
            maxWidth: '84%',
            paddingTop: 10
        }]}>
            <Image source={{uri: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_24-11-20_J7KEDLQ6_3.jpeg_standard-copy.jpg'}} style={Styles.profileImage}/>
            <View style={{
                backgroundColor: colors.textGray,
                padding: 10,
                borderRadius: 10
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: colors.black
                }}>
                    Aldino Said
                </Text>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Text>
            </View>
        </View>
        <View style={[Styles.row, {
            maxWidth: '84%',
            paddingTop: 10
        }]}>
            <Image source={{uri: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_24-11-20_J7KEDLQ6_3.jpeg_standard-copy.jpg'}} style={Styles.profileImage}/>
            <View style={{
                backgroundColor: colors.textGray,
                padding: 10,
                borderRadius: 10
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: colors.black
                }}>
                    Aldino Said
                </Text>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Text>
            </View>
        </View>
        {/* <Ionicon name="image-outline" size={30}/>
        <Text>No comment found</Text> */}
      </View>
      <View style={{
        padding: 20,
        gap: 10,
        backgroundColor: colors.white
      }}>
          <TextInput
            style={[{
                maxHeight: 100,
                borderRadius: 10,
                padding: 10,
                backgroundColor: colors.textGray
            }]}
            placeholder='Comment as Aldino Said'
            multiline={true}
          />
          {imageUri && 
            <View style={{
                position: 'relative',
                width: 50
            }}>
                <TouchableOpacity style={{
                        position: 'absolute',
                        right: 0,
                        backgroundColor: colors.gray,
                        borderRadius: 50,
                        zIndex: 1000
                    }}
                    onPress={() => setImageUri(null)}
                >
                    <Ionicon name="close" size={20} color={colors.white}/>
                </TouchableOpacity>
                <Image source={{ uri: imageUri }} width={50} height={100}/>
            </View>
          }
          {uploading ? (
            <Text>{transferred}% completed</Text>
          ) : (
            downloadURL && <Text>Image uploaded! URL: {downloadURL}</Text>
          )}
          <View style={[Styles.row, {
            justifyContent: 'space-between'
          }]}>
            <TouchableOpacity onPress={openGallery}>
                <Ionicon name="camera-outline" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicon name="send" size={30}/>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default SinglePost

const styles = StyleSheet.create({})