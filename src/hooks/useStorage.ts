import { useState, useEffect } from 'react';
import {
  firebase,
  projectStorage,
  projectFireStore,
  timeStamp,
} from '../firebase/config';

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [
    error,
    setError,
  ] = useState<firebase.storage.FirebaseStorageError | null>(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //refrences
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        storageRef.getDownloadURL().then((downloadURL) => {
          setUrl(downloadURL);
          const createdAt = timeStamp();
          collectionRef.add({ url: downloadURL, createdAt });
        });
      }
    );
  }, [file]);

  return {
    progress,
    url,
    error,
  };
};

export default useStorage;
