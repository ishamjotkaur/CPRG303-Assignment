import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';

export default function App() {
  return (
    /* Profile Details and Header Section -- Ishamjot Kaur*/
    <View style={styles.container1}>
    <View style={styles.container}>
    <Image source={require('./assets/Image/left-chevron.png')} 
       style={styles.leftChevronImage} />
       <View style={styles.headerContainer}>
      <Text style={styles.header}>Group Profile</Text>
      <Text style={styles.ProfileName}>ootd_everyday</Text>
      </View>
      <StatusBar style="auto" />
       <Image source={require('./assets/Image/post.png')} 
       style={styles.postImage} />
      </View>
      <View style={styles.ProfileSection}>
      <Image
      source={require('./assets/Image/OOTD-Profile.jpg')} 
      style={styles.png}
      />
      <View style={styles.ProfileDetails}>
      <View style={styles.profileContainer}>
      <Text style={styles.ProfileInfo1}> 53 </Text>
      <Text style={styles.ProfileInfo2}> Posts </Text>
      </View>
      <View style={styles.profileContainer}>
      <Text style={styles.ProfileInfo1}> 12 </Text>
      <Text style={styles.ProfileInfo2}> Members</Text>
      </View>
      <View style={styles.profileContainer}>
      <Text style={styles.ProfileInfo1}> 1</Text>
      <Text style={styles.ProfileInfo2}> Admins</Text>
      </View>
    </View>
    </View>
      <View style={styles.Description}>
      <Text style={styles.Name}>OOTD Everyday</Text>
      <Text style={styles.Bio1}>Fit check! 👕</Text>
      <Text style={styles.Bio2}>You know we'll hype you up.</Text>
    </View>
    
    {/*Grid Section and Member Subscription Section -- Romanpreet Kaur*/}
      {/* Members Button Section */}
      <View style={styles.membersButtonContainer}>
  <TouchableOpacity style={styles.customButton} onPress={() => alert('Member')}>
    <Text style={styles.customButtonText}>Member<Image
            source={require('./assets/Image/arrow.png')} 
            style={styles.arrowImage} 
          /></Text>

  </TouchableOpacity>
</View>


{/* Scrollable Images Section */}

<ScrollView
        style={styles.imageScrollContainer}
        contentContainerStyle={styles.imageContentContainer}
      >
        <Image
          source={require('./assets/Image/cute.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/eating.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/girl.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/kid.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/cute.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/eating.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/skateboard.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/sunglasses.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/woman.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/cute.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/skateboard.jpg')}
          style={styles.gridImage}
        />
        <Image
          source={require('./assets/Image/sunglasses.jpg')}
          style={styles.gridImage}
        />
      </ScrollView>
     
    {/*Alert Button and Footer Section* -- Sahilpreet Singh*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 53,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
 container1:{
     flex:1,
     backgroundColor: '#fff',  
 },
 headerContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 96,
 },
  header: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  ProfileName: {
    fontSize: 13,
    color: '#808080',
  },
  png: {
    width:90,
    height:90,
    borderRadius: 70,
    borderWidth:3,
    borderColor: '#d62976',
    marginRight: 16,
    marginBottom: 1,
  },
  Description: {
    marginTop: 10,
    paddingHorizontal: 16,
    alignContent: 'center',
  },
  Name: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 0,
    
  },
  Bio1: {
    fontSize: 12,
    color: '#000',
    marginLeft: 1,
    textAlign: 'left',
  },
  Bio2: {
    fontSize: 12,
    color: '#000',
    marginLeft: 1,
    textAlign: 'left',
  },
  ProfileDetails:{
    flex:1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  ProfileSection:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 22,
    paddingHorizontal: 10,
  },
  ProfileInfo1:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  ProfileInfo2:{
    fontSize: 13,
  },
  profileContainer:{
    alignItems: 'center',
    marginHorizontal: 20,
  },
  leftChevronImage:{
    width:25,
    height:25,   
  },
  postImage:{
    width:25,
    height:25,
  },
  // Members Button Section
  arrowImage: {
    width: 25,
    height: 10,
    marginRight: 5,

  },
  membersButtonContainer: {
   paddingHorizontal: 20,
   paddingVertical: 12,    
  },
    customButton: {
      backgroundColor: 'white',        
      borderRadius: 3,  
      paddingVertical: 6,
      paddingHorizontal: 20,        
      borderWidth: 0.5,           
      borderColor: '#000',      
    },
  
    customButtonText: {
      color: '#000',            
      fontSize: 14,             
      fontWeight: 'bold',       
      textAlign: 'center',      
    },
  
  // Scrollable Image Section Styles
  imageScrollContainer: {
    marginVertical: 10,
  },
  imageContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width: '33%',  
    height: 130,   
    marginBottom: 2,
  },
});
