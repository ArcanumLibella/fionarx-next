import React from 'react';
import Image from "next/image";

export const ImagesSlider = ({ images }) => {
  if (!images) return;

  // TODO: Voir pour ajouter une modale pour agrandir l'image au clic.
  
  return (
    <div className="ImagesSlider relative">
      <div className="ImagesSlider__images flex gap-4 max-h-[640px] px-4 mb-12 !-mx-4 overflow-x-auto lg:max-w-5xl xl:max-w-800 2xl:max-w-5xl md:px-8 md:!-mx-8 xl:!mx-0 xl:px-0">
        {images.data.map((image) => {
          return (
            <figure key={image.id} className="min-w-72 md:max-w-fit lg:min-w-80 xl:min-w-min">
              <Image
                src={image.attributes.url}
                alt={image.attributes.alt}
                width={image.attributes.width}
                height={image.attributes.height}
                blurDataURL={image.attributes.url}
                placeholder="blur"
                className="scroll-mr-8 rounded-md"
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};