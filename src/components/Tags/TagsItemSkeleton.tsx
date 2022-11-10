import React from 'react';
import { Skeleton } from '@mui/material';

const TagsItemSkeleton = () => {
  return (
    <div>
      <Skeleton
        sx={{ bgcolor: 'grey.800' }}
        variant="rounded"
        width={150}
        height={150}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '14.9px',
          bgcolor: 'grey.800',
          marginTop: '10px',
          lineHeight: '22px',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '11.175px;',
          bgcolor: 'grey.800',
          lineHeight: '17px',
        }}
      />
    </div>
  );
};

export default TagsItemSkeleton;
