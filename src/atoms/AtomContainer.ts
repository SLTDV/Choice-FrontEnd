import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { CommentType } from '../types/comment.types';
const { persistAtom } = recoilPersist();

export const loggedAtom = atom({
  key: 'logged',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const editProfileModalAtom = atom({
  key: 'editProfileModal',
  default: false,
});

export const userWithdrawalModalAtom = atom({
  key: 'userWithdrawalModal',
  default: false,
});

export const logoutModalAtom = atom({
  key: 'logoutModal',
  default: false,
});

export const removeCommentModalAtom = atom({
  key: 'removeCommentModal',
  default: false,
});

export const commentIdxAtom = atom({
  key: 'commentIdx',
  default: 0,
});

export const certifiedPhoneNumberAtom = atom({
  key: 'isCertifiedPhoneNumber',
  default: false,
});

export const RemoveChoiceModalAtom = atom({
  key: 'removeChoiceModal',
  default: {
    onModal: false,
    choiceIdx: 0,
  },
});

export const commentListAtom = atom<CommentType[]>({
  key: 'commentList',
  default: [],
});

export const TimerAtom = atom({
  key: 'timerSec',
  default: 179,
  effects_UNSTABLE: [persistAtom],
});

export const TimerRunningAtom = atom({
  key: 'isTimerRunning',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
