import { useEffect, useState } from "react";

function ProductPreview({ images }) {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    setImage(images[0]);
  }, [images]);

  return (
    <div>
      <img src={image} className="mb-4 w-full max-w-md mx-auto" />

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setImage(img)}
            className={`${
              image === img ? "border" : ""
            } p-2 rounded cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPreview;
