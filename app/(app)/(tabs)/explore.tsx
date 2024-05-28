import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Pressable, SafeAreaView, useColorScheme, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { UserAuth } from '@/hooks/authContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const { logOut, user } = UserAuth()
  console.log(user)
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: Colors[colorScheme == 'light' ? 'light' : 'dark'].background}]}>
      <Stack.Screen options={
        {
          headerShown: true,
          title: 'Profile',
          headerTitleStyle: {
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: Colors[colorScheme == 'light' ? 'light' : 'dark'].background,
          },
          headerRight: () => {
            return (
              <Pressable style={{ marginRight: 10 }} onPress={() => { logOut() }}>
                <MaterialIcons name="logout" size={24} color={Colors[colorScheme == 'light' ? 'light' : 'dark'].text} />
              </Pressable>
            )
          }
        }
      } />
      <Text>Profile Screen.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
