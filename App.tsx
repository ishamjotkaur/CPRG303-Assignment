import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

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
});
