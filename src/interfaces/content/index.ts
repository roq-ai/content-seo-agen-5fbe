import { SeoAnalysisInterface } from 'interfaces/seo-analysis';
import { UserInterface } from 'interfaces/user';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  body: string;
  keywords?: string;
  publish_date?: any;
  writer_id: string;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  seo_analysis?: SeoAnalysisInterface[];
  user?: UserInterface;
  client?: ClientInterface;
  _count?: {
    seo_analysis?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  keywords?: string;
  writer_id?: string;
  client_id?: string;
}
