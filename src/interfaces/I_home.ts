// potential to extract
export interface SearchResultListProps {
  avater: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

export interface SearchState {
  keyword: string;
  resultNumber: number;
  resultList: SearchResultListProps[];
  followLoading: boolean;
  isSearched: boolean;
  currentPage: number;
}

export interface CommonState {
  loading: boolean;
}

export interface FollowState {
  avater: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}
