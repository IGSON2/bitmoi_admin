export interface DashboardUser {
  number: number;
  nickname: string;
  id: string;
  usdp: number;
  token: number;
  attendance: number;
  prac: string;
  comp: string;
  referral: number;
  recom: string;
  signup: string;
  last_access: string;
}

export interface SetUsdpParam {
  user_id: string;
  amount: number;
  title: string;
}
