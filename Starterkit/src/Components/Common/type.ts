import {
  MODE_COMP,
  MODE_PRAC,
  POSITION_LONG_EN,
  POSITION_LONG_KR,
  POSITION_SHORT_EN,
  POSITION_SHORT_KR,
} from "./const";

export interface Report {
  title: string;
  iconClass: string;
  description: string;
}

export interface Series {
  name: string;
  data: number[];
}

export interface DashboardEmailItem {
  id: string;
  Year?: Series[];
  Month?: Series[];
  Week?: Series[];
}

export interface Social {
  title: string;
  bgColor: string;
  iconClass: string;
  description: string;
}

export interface LatestTransactions {
  orderId: string;
  billingName: string;
  orderDate: string;
  total: string;
  paymentStatus: string;
  methodIcon: string;
  paymentMethod: string;
}

export interface column {
  header: string;
  accessorKey: string;
  enableColumnFilter: boolean;
  enableSorting: boolean;
}

export type Mode = typeof MODE_PRAC | typeof MODE_COMP;

export type Position =
  | typeof POSITION_LONG_EN
  | typeof POSITION_SHORT_EN
  | typeof POSITION_LONG_KR
  | typeof POSITION_SHORT_KR;
