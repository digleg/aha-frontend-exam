interface GalleryItemProps {
  data: {
    avater: string;
    name: string;
    username: string;
  };
}

const GalleryItem = ({ data }: GalleryItemProps) => {
  const { avater, name, username } = data;

  return (
    <div>
      <div className="mr-0 h-[calc(66.5vw-26.59px)] w-full bg-stone-800 xl:h-[146px] xl:w-[219px]">
        <img src={avater} alt="avater" />
      </div>
      <div className="mt-3 text-[14.9px] font-normal leading-[22.35px] tracking-[0.14px] text-white">
        {name}
      </div>
      <div className="text-[11.175px] font-normal leading-[17px] tracking-[0.3725px] text-[#B2B2B2]">
        {username}
      </div>
    </div>
  );
};

export default GalleryItem;
