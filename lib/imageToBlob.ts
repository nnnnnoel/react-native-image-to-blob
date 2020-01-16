import { Platform } from 'react-native';
import ImageResizer from 'react-native-image-resizer';

export interface ImageType {
  playableDuration?: number;
  isStored?: boolean;
  filename?: string;
  width: number;
  height: number;
  uri: string;
}

export async function imageToBlob(image: ImageType) {
  const resizedImage = await ImageResizer
    .createResizedImage(
      image.uri,
      image.width,
      image.height,
      'JPEG',
      100,
    );
  const url = Platform.OS === 'android' ? resizedImage.uri : resizedImage.path;

  const init: RequestInit = {
    method: 'GET',
  };

  const response = await fetch(url, init);
  return response.blob();
}

export default imageToBlob;