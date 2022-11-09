import React from 'react';
import { Divider as MuiDivider } from '@mui/material';

const Divider = () => {
  return (
    <div>
      <MuiDivider
        sx={{
          opacity: '0.1',
          borderBottomWidth: '1px',
          borderColor: '#FFFFFF',
        }}
      />
    </div>
  );
};

export default Divider;
