import * as yup from 'yup';

export const seoAnalysisValidationSchema = yup.object().shape({
  seo_score: yup.number().integer().nullable(),
  seo_report: yup.string().nullable(),
  content_id: yup.string().nullable().required(),
  analyst_id: yup.string().nullable().required(),
});
