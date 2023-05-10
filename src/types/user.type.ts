export interface MyInfoType {
  nickname: string;
  profileImageUrl: string;
  postList: [];
}

export interface EditProfileType {
  nickname: string | undefined;
  image: string;
}
