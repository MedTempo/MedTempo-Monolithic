#!/bin/bash

rm -rf www/ android sdk

npx ionic build;

npx ionic capacitor add android

cd android;

./gradlew 

mkdir sdk/;
sdkmanager "platforms;android-33" --sdk_root=sdk/
export ANDROID_HOME="../sdk/"

echo $ANDROID_HOME

sdkmanager --licenses

./gradlew assembleDebug

#cp -r 