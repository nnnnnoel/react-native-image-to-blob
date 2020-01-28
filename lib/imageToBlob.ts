import { Platform } from "react-native";
import ImageResizer from "react-native-image-resizer";

export interface ImageType {
  playableDuration?: number;
  isStored?: boolean;
  filename?: string;
  width: number;
  height: number;
  uri: string;
}

export async function imageToBlob(image: ImageType): Promise<Blob> {
  const resizedImage = await ImageResizer.createResizedImage(
    image.uri,
    image.width,
    image.height,
    "JPEG",
    100
  );

  return {
    // @ts-ignore
    name: resizedImage.name || image.filename || "image.jpg",
    uri: resizedImage.uri.replace(
      "file://",
      Platform.OS === "android" ? "file://" : ""
    ),
    type: "image/jpeg"
  };
}

export default imageToBlob;
