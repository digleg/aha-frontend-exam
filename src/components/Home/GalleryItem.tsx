import { useState } from 'react';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

interface GalleryItemProps {
  data: {
    avater: string;
    name: string;
    username: string;
  };
}

const GalleryItem = ({ data }: GalleryItemProps) => {
  const { avater, name, username } = data;

  const [imageBroken, setImageBroken] = useState<boolean>(false);

  return (
    <div>
      <div className="mr-0 h-[calc(66.5vw-26.59px)] w-full bg-stone-800 xl:h-[146px] xl:w-[219px]">
        {imageBroken ? (
          <div className="flex h-full items-center justify-center text-white">
            <ImageNotSupportedIcon />
          </div>
        ) : (
          <img
            src={avater}
            alt="avater"
            onError={() => {
              setImageBroken(true);
            }}
          />
        )}
      </div>
      <div className="mt-3 text-[14.9px] font-normal leading-[22.35px] tracking-[0.14px] text-white">
        {name}
      </div>
      <div className="text-[11.175px] font-normal leading-[17px] tracking-[0.3725px] text-[#B2B2B2]">
        by {username}
      </div>
    </div>
  );
};

export default GalleryItem;
