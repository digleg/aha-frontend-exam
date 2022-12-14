/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../hook/useAppRedux';
import { TagState } from '../../interfaces/I_tags';
import { setLoading } from '../../redux/slices/commonSlice';
import axiosInstance, { API_SUB_URL } from '../../utils/axios';
import BackButton from '../Common/BackButton';

import TagsItem from './TagsItem';
import TagsItemSkeleton from './TagsItemSkeleton';

const enum VARIABLE {
  TAG_COUNT = 20,
  NO_NEED_DUMMY_BLOCK = 'false',
  NEED_DUMMY_BLOCK = 'true',
}

const TagsWrapper = () => {
  const [tagsList, setTagsList] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useAppSelector((state) => state.common);

  useEffect(() => {
    dispatch(setLoading(true));
    axiosInstance.get(API_SUB_URL.TAGS).then((resp) => {
      setTagsList(resp.data);
      dispatch(setLoading(false));
    });
  }, [dispatch]);

  // calculate the align hidden tags item we need.
  const tagsListLength = tagsList.length;

  // for the dummy block if the response data can't be fully divided
  const alignTagsCountDesktop = tagsListLength % 5;
  const alignTagsCountMobile = tagsListLength % 2;

  return (
    <div className="flex min-h-[calc(100vh-66px)] w-full flex-col bg-bg-c181818 px-[25px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:px-[258px]">
      <div className="ml-[-5px] mt-[17px] flex items-center xl:ml-[-40px] xl:mt-[92px] xl:hidden">
        <NavLink to="/Home">
          <BackButton />
        </NavLink>
        <div className="ml-[19.88px] block text-2xl font-normal leading-9 text-white xl:hidden">
          Home Page
        </div>
      </div>
      <div className="mt-9 text-2xl font-normal leading-[36px] tracking-normal text-white xl:mt-20 xl:text-3xl xl:leading-[45px] xl:tracking-[0.25px]">
        Tags
      </div>
      <div className="mt-6 flex flex-wrap justify-between">
        {tagsList.map((tagsItem: TagState, i: number) => (
          <div key={i} className="mb-6 xl:mb-9">
            <TagsItem data={tagsItem} />
          </div>
        ))}
        {/* This is the hidden block for the alignment if the tags item aren't divisible by 5 if desktop */}
        {Boolean(alignTagsCountDesktop !== 0) && (
          <div className="hidden xl:block">
            {[...Array(alignTagsCountDesktop)].map((e, i) => (
              <div key={i} className="mt-9 w-[150px]" />
            ))}
          </div>
        )}
        {/* This is the hidden block for the alignment if the tags item aren't divisible by 2 if mobile */}
        {Boolean(alignTagsCountMobile !== 0) && (
          <div className="block xl:hidden">
            {[...Array(alignTagsCountMobile)].map((e, i) => (
              <div key={i} className="mt-9 w-[150px]" />
            ))}
          </div>
        )}
        {loading &&
          [...Array(VARIABLE.TAG_COUNT)].map((e, i) => (
            <div key={i} className="mb-6 xl:mb-9">
              <TagsItemSkeleton />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TagsWrapper;
