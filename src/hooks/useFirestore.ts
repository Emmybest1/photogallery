import { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';

const useFireStore = (collection: any) => {
  const [docs, setDocs] = useState<any[]>([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapShoot) => {
        let documents: any[] = [];
        snapShoot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => {
      unsub();
    };
  }, [collection]);

  return docs;
};

export default useFireStore;
