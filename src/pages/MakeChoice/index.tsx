import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/common/Header';
import IsMaking from '../../components/IsMaking';
import Image from '../../services/Image';
import Post from '../../services/Post';
import * as S from './style';
const MakeChoice = () => {
  const [isMaking, setIsMaking] = useState<boolean>(false);
  const [image1, setImage1] = useState<string>('');
  const [image2, setImage2] = useState<string>('');
  const image1Ref = useRef<HTMLInputElement>(null);
  const image2Ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    firstVotingOption: '',
    secondVotingOption: '',
    firstImageUrl: '',
    secondImageUrl: '',
  });

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

  const setChoiceData = async () => {
    if (image1Ref.current?.files && image2Ref.current?.files) {
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
    }
  };

  const onMakeChoice = async () => {
    if (formData.secondImageUrl && formData.firstImageUrl) {
      Post.makeChoice(formData);
    }
  };

  const { mutate: makeChoice } = useMutation(onMakeChoice, {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries('post');
      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', (oldPostList: any) => ({
        newPost,
        ...oldPostList,
      }));

      return {
        snapshotOfPreviousData,
      };
    },

    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('post');
      setIsMaking(false);
      if (formData.secondImageUrl && formData.firstImageUrl) {
        navigate('/');
      }
    },
  });

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/signin');
      toast.error('로그인 후 이용해주세요.');
    }
  }, []);

  useEffect(() => {
    makeChoice();
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
            placeholder='내용 (최대 100자)'
            maxLength={100}
            minLength={2}
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
          <S.Button type='button' onClick={() => setChoiceData()}>
            초이스 만들기
          </S.Button>
        </S.UploadForm>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
