export interface CoachSubscriptionType {
  id: string;
  serialNo: string;
  planName: string;
  duration?: string;
  price?: string;
  clientCap: number;
  monthPrice: string;
  annualPrice: string;
  status: boolean;
}
