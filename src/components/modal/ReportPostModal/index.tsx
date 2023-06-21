import React, { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { reportPostModalAtom } from '../../../atoms';
import Post from '../../../services/Post';
import { Spinner } from '../../common/Spinner/style';
import Layout from '../Layout';
import * as S from './style';
const ReportPostModal = () => {
  const [, setReportPostModal] = useRecoilState(reportPostModalAtom);
  const [isLoading, setIsLoading] = useState(false);
  const postId = useParams() as unknown as { idx: number };

  const reportUser = async () => {
    try {
      setIsLoading(true);
      await Post.reportChoice(postId.idx);
      toast.success('게시물을 신고했습니다.');
      setReportPostModal(false);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 409)
        toast.error('이미 신고한 게시물입니다.');
      setReportPostModal(false);
    }
  };

  return (
    <Layout>
      <S.ModalBg onClick={() => setReportPostModal(false)} />
      <S.Modal>
        <h3>신고</h3>
        <p>해당 게시물을 신고할까요?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Button onClick={() => reportUser()}>확인</S.Button>
            <S.Button onClick={() => setReportPostModal(false)}>취소</S.Button>
          </>
        )}
      </S.Modal>
    </Layout>
  );
};

export default ReportPostModal;
