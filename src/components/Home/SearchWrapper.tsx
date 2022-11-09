/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getResultNumber } from '../../redux/slices/homeSlice';
import BackButton from '../Common/BackButton';
import Logo from '../Common/Logo';

import Button from './Button';
import Divider from './Divider';
import Gallery from './Gallery';
import GalleryItemSkeleton from './GalleryItemSkeleton';
import Input from './Input';
import Slider from './Slider';

const enum VARIABLE {
  SKELETON_COUNT = 20,
}

const SearchWrapper = () => {
  const dispatch = useDispatch();
  const { resultNumber, loading, isSearched } = useSelector(
    (state: any) => state.search,
  );
  useEffect(() => {
    dispatch(getResultNumber({}));
  }, [dispatch, resultNumber]);

  return !isSearched ? (
    <div className="flex h-[calc(100vh-66px)] w-full flex-col justify-between bg-bg-c181818 px-[20px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:px-[130px]">
      <div className="flex flex-col text-white">
        <div className="flex h-[70px] xl:hidden">
          <Logo />
        </div>
        <div className="xl:mt-[54px]">
          <div className="text-2xl font-normal leading-9">Search</div>
          <div className="mt-5">
            <Input />
          </div>
        </div>
        <div className="mt-[30px]">
          <Divider />
        </div>
        <div>
          <div className="mt-[30px] text-2xl font-normal leading-9">
            # Of Results Per Page
          </div>
          <div className="mt-5 flex items-end">
            <div className="text-5xl font-bold ">
              {resultNumber === 18 ? 50 : resultNumber}
            </div>
            <div className="ml-[10px] text-end text-base font-normal tracking-[0.15px]">
              results
            </div>
          </div>
          <div className="mt-[34px] px-1">
            <Slider />
          </div>
          <div className="mt-[30px]">
            <Divider />
          </div>
        </div>
      </div>
      <div className="mb-6 w-full xl:mb-[87px] xl:w-[343px]">
        <Button />
      </div>
    </div>
  ) : (
    <div className="flex min-h-[calc(100vh-66px)] w-full flex-col justify-between bg-bg-c181818 px-[20px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:px-[130px]">
      <div>
        <div className="ml-[25.5px] mt-[17px] flex xl:ml-[31.73px] xl:mt-[92px]">
          <BackButton />
          <div className="hidden text-white xl:ml-[31.73px] xl:block xl:text-3xl xl:leading-[45px]">
            Results
          </div>
          <div className="ml-[19.88px] block text-2xl font-normal leading-9 text-white xl:hidden">
            Home Page
          </div>
        </div>
        <div className="ml-5 mt-[37px] block text-2xl font-normal leading-9 text-white xl:hidden">
          Results
        </div>
        <div>
          {/* {loading?} */}
          <Gallery />
          {/* {VARIABLE.SKELETON_COUNT} */}
          {[...Array(VARIABLE.SKELETON_COUNT)].map((e, i) => (
            <GalleryItemSkeleton key={i} />
          ))}
        </div>
      </div>
      <div className="xl:mb-[87px]w-full mb-6 xl:w-[343px]">
        <Button />
      </div>
    </div>
  );
};

export default SearchWrapper;
