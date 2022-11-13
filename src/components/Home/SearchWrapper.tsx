/* eslint-disable react/no-array-index-key */
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hook/useAppRedux';
import { setIsSearch, setResultList } from '../../redux/slices/homeSlice';
import {
  calculateTrueValueDesktop,
  calculateTrueValueMobile,
} from '../../utils/calculateTrueValue';
import BackButton from '../Common/BackButton';
import Logo from '../Common/Logo';

import Button from './Button';
import Divider from './Divider';
import Gallery from './Gallery';
import GalleryItemSkeleton from './GalleryItemSkeleton';
import Input from './Input';
import Slider from './Slider';

const SearchWrapper = () => {
  const dispatch = useDispatch();
  const { resultNumber, isSearched } = useAppSelector((state) => state.search);
  const { loading } = useAppSelector((state) => state.common);

  return !isSearched ? (
    <div className="flex min-h-[calc(100vh-66px)] w-full flex-col justify-between bg-bg-c181818 px-[20px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:px-[130px]">
      <div className="flex flex-col text-white">
        <div className="flex h-[70px] xl:hidden">
          <Logo />
        </div>
        <div className="xl:mt-[54px]">
          <div className="text-2xl font-normal leading-9">Search</div>
          <div className="mt-[16px] xl:mt-[22px]">
            <Input />
          </div>
        </div>
        <div className="mt-[30px] hidden xl:block">
          <Divider />
        </div>
        <div>
          <div className="mt-7 text-2xl font-normal leading-9 xl:mt-[30px]">
            # Of Results Per Page
          </div>
          <div className="mt-4 flex items-end xl:mt-5">
            <div className="hidden text-5xl font-bold xl:block">
              {calculateTrueValueDesktop(resultNumber)}
            </div>
            <div className="block text-5xl font-bold xl:hidden">
              {calculateTrueValueMobile(resultNumber)}
            </div>
            <div className="ml-[10px] text-end text-base font-normal tracking-[0.15px]">
              results
            </div>
          </div>
          <div className="mt-[8px] xl:mt-[8px]">
            <Slider />
          </div>
          <div className="mt-[209px] xl:mt-[20px]">
            <Divider />
          </div>
        </div>
      </div>
      <div className="mb-6 w-full xl:mb-[89px] xl:w-[343px]">
        <Button type="search" />
      </div>
    </div>
  ) : (
    <div className="flex min-h-[100vh] w-full flex-col justify-between bg-bg-c181818 px-[20px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:px-[130px]">
      <div>
        <div className="ml-[0px] mt-[17px] flex items-center xl:ml-[-40px] xl:mt-[92px]">
          <button
            type="button"
            onClick={() => {
              dispatch(setIsSearch(false));
              dispatch(setResultList([]));
            }}
          >
            <BackButton />
          </button>
          <div className="hidden text-white xl:ml-[20px] xl:block xl:text-3xl xl:leading-[45px]">
            Results
          </div>
          <div className="ml-[19.88px] block text-2xl font-normal leading-9 text-white xl:hidden">
            Home Page
          </div>
        </div>
        <div className="ml-1 mt-[37px] flex text-2xl font-normal leading-9 text-white xl:hidden">
          Results
        </div>
        <div>
          <div className="mt-6 xl:flex xl:flex-wrap xl:justify-between">
            <Gallery />
            {loading &&
              [...Array(calculateTrueValueDesktop(resultNumber))].map(
                (e, i) => (
                  <div key={i} className="mb-10 xl:mb-[31px]">
                    <GalleryItemSkeleton />
                  </div>
                ),
              )}
          </div>
        </div>
      </div>
      <div className="xl:mb-[87px]w-full mb-6 xl:w-[343px]">
        <Button type="more" />
      </div>
    </div>
  );
};

export default SearchWrapper;
