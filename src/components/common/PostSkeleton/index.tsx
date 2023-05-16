import React from 'react';
import * as S from './style';
const PostSkeleton = () => {
  return (
    <S.Skeleton>
      <S.InfoBox>
        <S.text width='100px' height='18px' />
        <S.text width='150px' height='10px' />
        <div className='info'>
          <S.Info width='40px' height='18px' />
          <S.Info width='40px' height='18px' />
        </div>
      </S.InfoBox>
    </S.Skeleton>
  );
};

export default PostSkeleton;
