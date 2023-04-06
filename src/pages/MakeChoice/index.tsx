import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Post from '../../services/Post';
import { MakeChoiceData } from '../../types/choice.types';
import * as S from './style';
const MakeChoice = () => {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const img1Ref = useRef<any>();
  const img2Ref = useRef<any>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    firstVotingOption: '',
    secondVotingOption: '',
    firstImageUrl: '',
    secondImageUrl: '',
  });

  const saveImage1 = () => {
    const file = img1Ref.current.files[0];
    setImage1(URL.createObjectURL(file));
  };
  const saveImage2 = () => {
    const file = img2Ref.current.files[0];
    setImage2(URL.createObjectURL(file));
  };

  const eventHandler = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const makeChoice = async () => {
    try {
      await Post.makeChoice(formData);
      navigate('/');
    } catch (error: any) {
      console.log(error);
    }
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
                ref={img1Ref}
                onChange={saveImage1}
                image={image1}
                required
              />
              <p>VS</p>
              <S.Image
                type='file'
                ref={img2Ref}
                onChange={saveImage2}
                image={image2}
                required
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
          <S.Button>초이스 만들기</S.Button>
        </S.UploadForm>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
