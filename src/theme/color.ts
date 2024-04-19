const color = {
  white: '#fff',
  black: '#000000',
  buttonColor: '#027C8A',
  textWhite: '#ffffff',
  textGray:'#494949'
};
export default color;

// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
// import SwipeButton from 'rn-swipe-button';

// const App = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const newData = [
//     { name: "ram ", id: 1 },
//     { name: "KK", id: 2 },
//     { name: "SS", id: 4 },
//     { name: "D", id: 5 },
//     { name: "Q", id: 6 },
//     { name: "JJ", id: 7 },
//     { name: "KKK", id: 8 },
//     { name: "TTT", id: 9 }
//   ];

//   const handleSwipeSuccess = () => {
//     if (currentIndex < newData.length - 1) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     } else {
//       setSubmitted(true);
//     }
//   };

//   const handleReset = () => {
//     setCurrentIndex(0);
//     setSubmitted(false);
//   };
   
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleStyle}>
//           Example of React Native Swipe Button
//         </Text>
//         <View>
//           <Text style={styles.item}>{newData[currentIndex].name}</Text>
//           <SwipeButton
//             height={45}
//             width={330}
//             title="Swipe to See Next"
//             onSwipeSuccess={handleSwipeSuccess}
//             shouldResetAfterSuccess={true}
//             onReset={handleReset}
//             railFillBackgroundColor="green" // Set the initial color here
//             thumbIconBackgroundColor="yellow"
//           />
//         </View>
//         {submitted && <Text style={styles.item}>All items submitted</Text>}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20
//   },
//   titleStyle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20
//   },
//   item: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: "red"
//   },
// });

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Button
// } from 'react-native';

// import SwipeButton from 'rn-swipe-button';

// const App = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const newData = [
//     { name: "ram ", id: 1 },
//     { name: "KK", id: 2 },
//     { name: "SS", id: 4 },
//     { name: "D", id: 5 },
//     { name: "Q", id: 6 },
//     { name: "JJ", id: 7 },
//     { name: "KKK", id: 8 },
//     { name: "TTT", id: 9 }
//   ];

//   const handleSwipeSuccess = () => {
//     if (currentIndex < newData.length - 1) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     } else {
//       setSubmitted(true);
//     }
//   };

//   const handleButtonClick = () => {
//     if (currentIndex < newData.length - 1) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     } else {
//       setSubmitted(true);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleStyle}>
//           Example of React Native Swipe Button
//         </Text>
//         {!submitted ? (
//           <View>
//             <Text style={styles.item}>{newData[currentIndex].name}</Text>
//             <SwipeButton
//               disabled={false}
//               swipeSuccessThreshold={70}
//               height={45}
//               width={330}
//               title="Swipe to See Next"
//               onSwipeSuccess={handleSwipeSuccess}
//               railFillBackgroundColor="red"
//               // railFillBorderColor="green"
//               // thumbIconBackgroundColor="yelllow"
//               // thumbIconBorderColor="pink"
//               // railBackgroundColor="black"
//               // railBorderColor="red"
//             />
            
//           </View>
//         ) : (
//           <Text style={styles.item}>All items submitted</Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleStyle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 10,
//   },
//   item: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: "red"
//   },
// });
