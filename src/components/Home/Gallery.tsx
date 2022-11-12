/* eslint-disable react/no-array-index-key */
import { useAppSelector } from '../../hook/useAppRedux';
import { SearchResultListProps } from '../../interfaces/I_home';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { resultList } = useAppSelector((state) => state.search);
  const resultListLength = resultList.length;

  // for the dummy block if the response data can't be fully divided
  const alignResultCountDesktop = resultListLength % 3;

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
      {/* This is the hidden block for the alignment if the tags item aren't divisible by 3 */}
      {Boolean(alignResultCountDesktop !== 0) && (
        <div className="hidden xl:block">
          {[...Array(alignResultCountDesktop)].map((e, i) => (
            <div key={i} className="mb-10 w-[219px]" />
          ))}
        </div>
      )}
    </>
  );
};

export default Gallery;
