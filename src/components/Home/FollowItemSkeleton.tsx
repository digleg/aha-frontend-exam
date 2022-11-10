import { Skeleton } from '@mui/material';

const FollowItemSkeleton = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Skeleton
          sx={{ bgcolor: 'grey.800' }}
          variant="rounded"
          width={40}
          height={40}
        />
        <div className="ml-[15px] max-h-[45px]">
          <Skeleton
            variant="text"
            sx={{ width: '68px', fontSize: '16px', bgcolor: 'grey.800' }}
          />
          <Skeleton
            variant="text"
            sx={{ width: '79px', fontSize: '14px', bgcolor: 'grey.800' }}
          />
        </div>
      </div>
      <Skeleton
        sx={{ bgcolor: 'grey.800', borderRadius: '16px' }}
        variant="rounded"
        width={76}
        height={28}
      />
    </div>
  );
};

export default FollowItemSkeleton;
