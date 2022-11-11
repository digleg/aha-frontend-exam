interface TagsItemProps {
  data: {
    count: number;
    name: string;
  };
}

const TagsItem = ({ data }: TagsItemProps) => {
  const { count, name } = data;
  return (
    <div>
      <div className="relative h-[150px] w-[150px] rounded-[10px] bg-[#262626]">
        <div className="absolute bottom-[14px] left-[10px] h-[50px] w-[125px] overflow-hidden overflow-ellipsis whitespace-nowrap rounded-[8px] border-4 border-solid py-[7px] px-[14px] text-center text-2xl font-bold leading-6 text-white">
          {name}
        </div>
      </div>
      <div>
        <div className=" mt-[10px] w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap text-[14.9px] font-normal leading-[22px] tracking-[0.139688px] text-white">
          {name}
        </div>
        <div className=" text-[11.175px] font-normal leading-[17px] tracking-[0.3725px] text-[#B2B2B2]">
          {count} Results
        </div>
      </div>
    </div>
  );
};

export default TagsItem;
