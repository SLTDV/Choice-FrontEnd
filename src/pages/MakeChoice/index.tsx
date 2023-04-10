import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/common/Header';
import IsMaking from '../../components/IsMaking';
import Image from '../../services/Image';
import Post from '../../services/Post';
import * as S from './style';
const MakeChoice = () => {
  const [isMaking, setIsMaking] = useState(false);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const image1Ref = useRef<any>();
  const image2Ref = useRef<any>();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    firstVotingOption: '',
    secondVotingOption: '',
    firstImageUrl: '',
    secondImageUrl: '',
  });

  const options = {
    onUploadProgress: function (progressEvent: any) {
      const percent = Math.floor(
        (progressEvent.loaded / progressEvent.total) * 100
      );
      console.log(progressEvent, '%');
    },
  };

  const saveImage1 = (e: any) => {
    setImage1(URL.createObjectURL(e.target.files[0]));
  };

  const saveImage2 = (e: any) => {
    setImage2(URL.createObjectURL(e.target.files[0]));
  };

  const eventHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const makeChoice = async () => {
    try {
      setIsMaking(true);
      const imageData = new FormData();
      imageData.append('firstImage', image1Ref.current.files[0]);
      imageData.append('secondImage', image2Ref.current.files[0]);
      const res: any = await Image.uploadPostImage(imageData);
      setFormData((data) => {
        return {
          ...data,
          firstImageUrl: res.data.firstUploadImageUrl,
          secondImageUrl: res.data.secondUploadImageUrl,
        };
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formData.secondImageUrl && formData.firstImageUrl) {
      const res = Post.makeChoice(formData, options);
      setIsMaking(false);
    }
  }, [formData]);

  return (
    <>
      <Header />
      {isMaking && <IsMaking />}
      <S.Layout>
        <S.UploadForm>
          <S.Title
            placeholder='제목을 입력하세요 (2~16자)'
            maxLength={16}
            minLength={2}
            required
            name='title'
            onChange={eventHandler}
          />
          <S.Content
            placeholder='내용 (2~100자)'
            maxLength={100}
            minLength={2}
            required
            name='content'
            onChange={eventHandler}
          />
          <S.OptionBox>
            <S.OptionImage>
              <S.Image
                type='file'
                onChange={saveImage1}
                image={image1}
                required
                ref={image1Ref}
              />
              <p>VS</p>
              <S.Image
                type='file'
                onChange={saveImage2}
                image={image2}
                required
                ref={image2Ref}
              />
            </S.OptionImage>
            <S.OptionName>
              <input
                type='text'
                placeholder='주제1 (최대 8자)'
                maxLength={8}
                required
                name='firstVotingOption'
                onChange={eventHandler}
              />
              <input
                type='text'
                placeholder='주제2 (최대 8자)'
                maxLength={8}
                required
                name='secondVotingOption'
                onChange={eventHandler}
              />
            </S.OptionName>
          </S.OptionBox>
          <S.Button type='button' onClick={() => makeChoice()}>
            초이스 만들기
          </S.Button>
        </S.UploadForm>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
