# Welcome to RN Expo authentication boilerplate 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Configure Firebase API KEYS.

  - Create a firebase project here: [FIREBASE Console](https://console.firebase.google.com). And Download 'GoogleService-Info.plist' of your project.
    If your GoogleService-Info.plist doesn't have 'CLIENT_ID' and 'REVERSE_CLIENT_ID' go to [Google API & Services - Credentials](https://console.cloud.google.com/apis/credentials). And make sure you have 'OAuth 2.0 Client ID' in there. After making sure of having a 'OAuth 2.0 Client ID' download the '.plist' folder via download icon.
    Add the Client ID and REVERSE_CLIENT_ID to your 'GoogleService-Info.plist' which is downloaded from 'Project Settings' of [FIREBASE Console](https://console.firebase.google.com).

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

