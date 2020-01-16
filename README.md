# react-native-image-to-blob

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/react-native-image-to-blob.svg?style=flat-square)](https://www.npmjs.com/package/react-native-image-to-blob)
[![npm](https://img.shields.io/npm/dm/react-native-image-to-blob.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/react-native-image-to-blob)
[![github issues](https://img.shields.io/github/issues/zusinShinpei/react-native-image-to-blob.svg?style=flat-square)](https://github.com/zusinShinpei/react-native-image-to-blob/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/zusinShinpei/react-native-image-to-blob.svg?style=flat-square&colorB=44cc11)](https://github.com/zusinShinpei/react-native-image-to-blob/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/zusinShinpei/react-native-image-to-blob.svg?style=flat-square&colorB=44cc11)](http://github.com/zusinShinpei/react-native-image-to-blob/issues)


### It can get blob from react native image uri.

## That universal links can't get blob
- rct-image-store
- asset-library

## Getting Started

```shell script
npm install --save react-native-image-to-blob
```

## Usage

```typescript
// ImageType is from react-native-camera-roll's image return type
async function uploadPhoto(image: ImageType) {
  const imageFile = await imageToBlob(image);

  const formData = new FormData();
  formData.append('imageFile', imageFile);

  await fetch('https://your.server.url/upload/photo', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8',
    },
  });
}
```
