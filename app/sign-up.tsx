import { SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import {TextInput, Text} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { UserAuth } from '@/hooks/authContext';
import { authStyles } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';

export default function SignIn() {
    // The `useRouter` hook is used to navigate to other screens.
    const router = useRouter();

    // useTheme hook is used to get the current theme
    const colorScheme = useColorScheme();

    // The `logIn` function is used to sign in the user.
    const { createUser, user } = UserAuth();

    // These states are used to store the email and password.
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [passwordMatch, setPasswordMatch] = useState<boolean>(false);

    // useEffect for password match check
    useEffect(() => {
        if (password === passwordConfirm) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }, [password, passwordConfirm]);


    // The `useEffect` hook is used to redirect the user to the home screen if they are already signed in.
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
                    title: 'Sign Up',
                    headerTitleStyle: {
                        color: Colors[colorScheme == 'light' ? 'light' : 'dark'].text,
                        fontSize: 18,
                    },
                    headerLeft() {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    router.back();
                                }}>
                                <Text style={{ color: Colors[colorScheme == 'light' ? 'light' : 'dark'].text, fontSize: 18 }}>Back</Text>
                            </TouchableOpacity>
                        );
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
            <TextInput
                style={[authStyles.input, { backgroundColor: Colors['light'].background, borderColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]}
                placeholder='Confirm password'
                textContentType="password"
                secureTextEntry={true}
                placeholderTextColor="#000"
                onChangeText={setPasswordConfirm}
                value={passwordConfirm}
            />
            {passwordMatch ? false : <Text>Passwords do not match</Text>}
            <TouchableOpacity
                disabled={password.length <= 0 || passwordConfirm.length < 0 || !passwordMatch}
                style={[authStyles.button, { backgroundColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background, borderColor: Colors[colorScheme == 'light' ? 'dark' : 'light'].background }]}
                onPress={() => {
                    createUser(email, password);
                }}>
                <Text style={[authStyles.text, { color: Colors[colorScheme == 'light' ? 'dark' : 'light'].text }]}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

