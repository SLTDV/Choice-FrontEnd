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
