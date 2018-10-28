# UberFilckrPhotoAssignment

Reference Learn Expo : https://expo.io/learn

Step 1:
Get the command line tool
You will run this tool locally to package, serve, and publish your projects.

npm install expo-cli --global

Step 2:
Create your first project
You will be asked to create an Expo account before proceeding.

expo init UberFilckrPhotoAssignment

cd UberFilckrPhotoAssignment

expo start

Step 3: (To test the App)
Goto https://snack.expo.io/S1NqOfmtQ

Left Nave pane >> Project section >> click on right (:) and Import git repository

Then test your application.

Step 4: (Create the Keystore)
Keystore details:

Path: E:\Source\Assignments\UberFilckrPhotoAssignment\assets\KeyStoreFunApp.jks

Alias: amjadk12
Psw : z_123

Step 5: (To build the .apk and deploy)
open two command windows
i. Run: npm start
ii. Run: expo build:android

Step 6: (Build Logs)
Must have below log,
►starting builder
►icons setup
►reading manifest
►generating dynamic macros
►copying initial shell app files
►running gradle
►signing created apk
►verifying apk alignment
►verifying apk
►uploading to S3

Step 7: Download the apk file
https://expo.io/builds/995cf9c4-3645-489a-bf5b-7a5cc6609eaa

Step 8: Upload apk and other details to Google Play Console,
https://play.google.com/apps/publish/?account=7549602189370880226#KeyManagementPlace:p=com.pickup.ShayeriApp&appid=4974052671569165399


Step 9:
For Running the Test Cases:
    1. Install the jest to your dev environment by using below command
        npm i jest --save-dev
    2. Also install - renderer
        npm i react-test-renderer


