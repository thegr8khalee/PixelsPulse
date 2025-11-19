import { useEffect } from 'react';
import { useUiStore } from '../store/use.ui.store';

export const usePageLoader = (imagePaths = []) => {
  const { setIsLoading } = useUiStore();

  useEffect(() => {
    setIsLoading(true);

    const preloadImages = async () => {
      if (!imagePaths || imagePaths.length === 0) {
        // Small delay to show loader even if no images, for consistency
        setTimeout(() => setIsLoading(false), 500);
        return;
      }

      const promises = imagePaths.map((path) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

    preloadImages();

    return () => setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount
};
