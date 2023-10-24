import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  keywords: yup.string().nullable(),
  publish_date: yup.date().nullable(),
  writer_id: yup.string().nullable().required(),
  client_id: yup.string().nullable().required(),
});
