import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ActivityLogInterface {
  id?: string;
  user_id: string;
  activity?: string;
  ip_address?: string;
  browser_info?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ActivityLogGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  activity?: string;
  ip_address?: string;
  browser_info?: string;
}
