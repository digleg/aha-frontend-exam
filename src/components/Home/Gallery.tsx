import React from 'react';
import { useSelector } from 'react-redux';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { resultList } = useSelector((state: any) => state.search);
  return (
    <>
      {resultList.map((galleryItemData: any) => (
        <div key={galleryItemData.id} className="mb-10 xl:mb-[31px]">
          <GalleryItem data={galleryItemData} />
        </div>
      ))}
    </>
  );
};

export default Gallery;
