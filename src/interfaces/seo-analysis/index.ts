import { ContentInterface } from 'interfaces/content';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SeoAnalysisInterface {
  id?: string;
  content_id: string;
  seo_score?: number;
  seo_report?: string;
  analyst_id: string;
  created_at?: any;
  updated_at?: any;

  content?: ContentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SeoAnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_id?: string;
  seo_report?: string;
  analyst_id?: string;
}
