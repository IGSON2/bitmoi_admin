import { Position } from "Components/Common/type";

export interface DashboardScore {
  number: number;
  id: string;
  bettingusdp: number;
  position: Position;
  leverage: number;
  roe: number;
  pnl: number;
  entrytime: string;
  exittime: string;
  maxminroe: number;
  submittime: string;
  settledat: string;
  afterexittime: string;
}
