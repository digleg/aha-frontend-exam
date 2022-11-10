import React, { useEffect, useState } from 'react';

import instance, { API_SUB_URL } from '../../utils/axios';

import TagsItem from './TagsItem';

const TagsWrapper = () => {
  const [tagsList, setTagsList] = useState<string[]>([]);

  useEffect(() => {
    instance.get(API_SUB_URL.TAGS).then((resp) => {
      setTagsList(resp.data);
    });
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-66px)] w-full flex-col bg-bg-c181818 px-[25px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:px-[258px]">
      <div className=" mt-20 text-3xl font-normal leading-[45px] tracking-[0.25px] text-white">
        Tags
      </div>
      <div className="flex flex-wrap">
        {tagsList.map((item: any) => (
          <div key={item.id} className="ml-6 mb-9">
            <TagsItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsWrapper;
