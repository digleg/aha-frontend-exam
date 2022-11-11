/* eslint-disable react/no-array-index-key */
import React from 'react';

import { useAppSelector } from '../../hook/useAppRedux';
import { SearchResultListProps } from '../../interfaces/I_home';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { resultList } = useAppSelector((state) => state.search);
  return (
    <>
      {resultList.map(
        (galleryItemData: SearchResultListProps, index: number) => (
          <div
            key={`${galleryItemData.id}${index}`}
            className="mb-10 xl:mb-[31px]"
          >
            <GalleryItem data={galleryItemData} />
          </div>
        ),
      )}
    </>
  );
};

export default Gallery;
