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
