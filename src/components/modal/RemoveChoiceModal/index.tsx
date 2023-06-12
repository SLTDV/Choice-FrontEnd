import React, { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { RemoveChoiceModalAtom } from '../../../atoms';
import Post from '../../../services/Post';
import { Spinner } from '../../common/Spinner/style';
import Layout from '../Layout';
import * as S from './style';

const RemoveChoiceModal = () => {
  const [{ choiceIdx }, setRemoveChoiceModalAtom] = useRecoilState(
    RemoveChoiceModalAtom
  );
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const onRemoveChoice = async () => {
    setIsLoading(true);
    await Post.removeChoice(choiceIdx);
  };

  const { mutate: removeChoice } = useMutation(onRemoveChoice, {
    onError: () => {
      toast.error(
        <p>
          게시물 또는 네트워크 상태를 <br /> 다시 확인해주세요.
        </p>
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries('myPost');
      toast.success('게시물이 삭제되었습니다.');
    },
    onSettled: () => {
      setRemoveChoiceModalAtom({ onModal: false, choiceIdx });
      setIsLoading(false);
    },
  });

  return (
    <Layout>
      <S.ModalBg
        onClick={() => setRemoveChoiceModalAtom({ onModal: false, choiceIdx })}
      />
      <S.Modal>
        <h1>게시물 삭제</h1>
        <p>정말 게시물을 삭제할까요?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <button onClick={() => removeChoice()}>확인</button>
            <button
              onClick={() =>
                setRemoveChoiceModalAtom({ onModal: false, choiceIdx })
              }
            >
              취소
            </button>
          </>
        )}
      </S.Modal>
    </Layout>
  );
};

export default RemoveChoiceModal;
