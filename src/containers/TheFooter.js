import React from 'react';
import { CFooter } from '@coreui/react';

const TheFooter = () => {
  let year = new Date();

  return (
    <CFooter fixed={false}>
      <p className='text-center  w-100 mt-3'>
        © 2014 - {year.getFullYear()} iNovotek Company Limited. All Rights
        Reserved.
      </p>
    </CFooter>
  );
};

export default React.memo(TheFooter);
