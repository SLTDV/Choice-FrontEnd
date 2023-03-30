import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const loggedAtom = atom({
  key: 'logged',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
