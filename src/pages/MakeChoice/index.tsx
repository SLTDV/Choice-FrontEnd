import React, { useRef, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
const MakeChoice = () => {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');

  const img1Ref = useRef<any>();
  const img2Ref = useRef<any>();

  const saveImage1 = () => {
    const file = img1Ref.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage1(URL.createObjectURL(file));
    };
  };
  const saveImage2 = () => {
    const file = img2Ref.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage2(URL.createObjectURL(file));
    };
  };

  return (
    <>
      <Header />
      <S.Layout>
        <S.UploadForm>
          <S.Title
            placeholder='제목을 입력하세요 (2~16자)'
            maxLength={16}
            minLength={2}
          />
          <S.Content
            placeholder='내용 (2~100자)'
            maxLength={100}
            minLength={2}
          />
          <S.OptionBox>
            <S.OptionImage>
              <S.Image
                type='file'
                ref={img1Ref}
                onChange={saveImage1}
                image={image1}
              />
              <p>VS</p>
              <S.Image
                type='file'
                ref={img2Ref}
                onChange={saveImage2}
                image={image2}
              />
            </S.OptionImage>
            <S.OptionName>
              <input type='text' placeholder='주제1' maxLength={8} />
              <input type='text' placeholder='주제2' maxLength={8} />
            </S.OptionName>
          </S.OptionBox>
          <S.Button>초이스 만들기</S.Button>
        </S.UploadForm>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
