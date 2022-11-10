import React from 'react';

interface FollowItemProps {
  data: {
    avater: string;
    name: string;
    username: string;
    isFollowing: boolean;
  };
}

const FollowItem = ({ data }: FollowItemProps) => {
  const { avater, name, username, isFollowing } = data;

  return (
    <div className="flex h-[45px] justify-between">
      <div className="flex">
        <div className="h-10 w-10 rounded-[5px] border-[1px] border-solid border-[#F8F8F8] bg-gray-900">
          <img src={avater} alt="ava" />
        </div>
        <div className="ml-[15px]">
          <div className="text-base font-normal leading-6 tracking-[0.15px] text-white">
            {name}
          </div>
          <div className="text-sm font-normal leading-[21px] text-[#B2B2B2]">
            {username}
          </div>
        </div>
      </div>
      <div>
        <img
          width={isFollowing ? 76 : 60}
          height={isFollowing ? 28 : 29}
          src={`/svgs/${
            isFollowing ? 'following_button' : 'follow_button'
          }.svg`}
          alt="Logo"
        />
        ;
      </div>
    </div>
  );
};

export default FollowItem;
