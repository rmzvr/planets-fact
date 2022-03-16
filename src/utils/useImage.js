import { useEffect, useState } from "react";

const useImage = (planet, activeTab) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const imageName = planet.images[activeTab].match("[^/]*$");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/${imageName}`);
        setImage(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
