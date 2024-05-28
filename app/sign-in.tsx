import { TouchableOpacity, useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { UserAuth } from '@/hooks/authContext';
import { authStyles } from '@/constants/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

export default function SignIn() {
    // The `useRouter` hook is used to navigate to other screens.
    const router = useRouter();

    // useColorScheme hook is used to get the current ColorScheme
    const colorScheme = useColorScheme();

    // The `logIn` function is used to sign in the user.
    // The `user` variable is used to check if the user is signed in.
    const { logIn, user } = UserAuth();

    // These states are used to store the email and password.
    // The `setEmail` function is used to update the email state.
    // The `setPassword` function is used to update the password state.
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    // The `useEffect` hook is used to redirect the user to the home screen if they are already signed in.
    // The `router.replace` function is used to redirect the user to the home screen.
    useEffect(() => {
        if (user) {
            router.replace('/(app)/(tabs)/');
        }
    }, [user]);


    return (
        <SafeAreaView style={[authStyles.mainView, { backgroundColor: Colors[colorScheme == 'light' ? 'light' : 'dark'].background }]}>
            <Stack.Screen options={
                {
                    headerShown: true,
                    title: 'Sign In',
                    headerTitleStyle: {
                        color: Colors[colorScheme == 'light' ? 'light' : 'dark'].text,
                        fontSize: 18,
                    },
                    headerStyle: {
                        backgroundColor: Colors[colorScheme == 'light' ? 'light' : 'dark'].background,
                    },
                }
            } />
            <TextInput
                style={[authStyles.input, { backgroundColor: Colors['light'].background, borderColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]}
                placeholder='Email'
                placeholderTextColor="#000"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={[authStyles.input, { backgroundColor: Colors['light'].background, borderColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]}
                placeholder='Password'
                textContentType="password"
                secureTextEntry={true}
                placeholderTextColor="#000"
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity
                style={[authStyles.button, { backgroundColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background, borderColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]}
                onPress={() => {
                    logIn(email, password);
                }}>
                <Text style={[authStyles.text, { color: Colors[colorScheme == 'light' ? 'dark' : 'light'].text }]}>Sign In</Text>
            </TouchableOpacity>
            <View style={[authStyles.separator, { backgroundColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]} />
            <Text style={[authStyles.text, { color: Colors[colorScheme == 'light' ? 'light' : 'dark'].text }]}>Don't you have an account?</Text>
            <TouchableOpacity
                style={[authStyles.button, { backgroundColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background, borderColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]}
                onPress={() => {
                    router.push('/sign-up');
                }}>
                <Text style={[authStyles.text, { color: Colors[colorScheme == 'light' ? 'dark' : 'light'].text }]}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}