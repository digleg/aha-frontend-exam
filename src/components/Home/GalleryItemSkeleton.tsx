import { Skeleton } from '@mui/material';

const GalleryItemSkeleton = () => {
  return (
    <div>
      <div className="hidden xl:block">
        <Skeleton
          sx={{ bgcolor: 'grey.800' }}
          variant="rounded"
          width={219}
          height={146}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: '14.9px', bgcolor: 'grey.800', marginTop: '12px' }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: '14.9px',
            bgcolor: 'grey.800',
            lineHeight: '16.76px',
          }}
        />
      </div>
      <div className="block xl:hidden">
        <Skeleton
          sx={{ bgcolor: 'grey.800' }}
          variant="rounded"
          width="100%"
          height={222.67}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: '14.9px', bgcolor: 'grey.800', marginTop: '20.33px' }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: '11.175px;',
            bgcolor: 'grey.800',
            lineHeight: '16.76px',
          }}
        />
      </div>
    </div>
  );
};

export default GalleryItemSkeleton;
