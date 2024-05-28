import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { Stack, useNavigationContainerRef } from 'expo-router';
import { AuthContextProvider } from '@/hooks/authContext';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

// settings for new navigation based on auth state

export const unstable_settings = {
    initialRouteName: '(app)',
};


export default function RootLayout() {

    const navigationRef = useNavigationContainerRef();
    useReactNavigationDevTools(navigationRef);
    return <RootLayoutNav />;

}

function RootLayoutNav() {
    return (
        <Providers>
            <Stack>
                <Stack.Screen name="(app)" options={{ headerShown: false }} />
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
            </Stack>
        </Providers>
    )

}

function Providers({ children }: { children: React.ReactNode }) {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AuthContextProvider>
                <StatusBar style="auto" />
                {children}
            </AuthContextProvider>
        </ThemeProvider>
    );
}