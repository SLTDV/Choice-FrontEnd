export interface ChoiceData {
  idx: number;
  imageUrl: string;
  title: string;
  participants: number;
  commentCount: number;
  firstVotingOption: string;
  secondVotingOption: string;
}

export interface MakeChoiceData {
  title: string; // 2 ~ 16
  content: string; // 2 ~ 100
  firstVotingOption: string; // 1 ~ 8
  secondVotingOption: string; // 1 ~ 8
  firstImageUrl: string;
  secondImageUrl: string;
}

export interface PostDetailType {
  title: string;
  content: string;
  firstImageUrl: string;
  secondImageUrl: string;
  firstVotingCount: number;
  secondVotingCount: number;
  writer: string;
  profileImageUrl: string;
  firstVotingOption: string;
  secondVotingOption: string;
  comment: [
    {
      idx: number;
      nickname: string;
      content: string;
      image: string;
      isMine: boolean;
    }
  ];
}
