// NPM packages
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageInstance } from "scripts/firebase";

export async function uploadFile(file, filename = "new-file") {
  const storageReference = ref(cloudStorageInstance, filename);
  await uploadBytes(storageReference, file);

  return await getDownloadURL(storageReference);
}