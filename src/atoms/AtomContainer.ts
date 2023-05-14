import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
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
  default: { commentIdx: 0 },
});

export const certifiedPhoneNumberAtom = atom({
  key: 'isCertifiedPhoneNumber',
  default: false,
});
