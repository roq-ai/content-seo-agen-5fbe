import * as yup from 'yup';

export const activityLogValidationSchema = yup.object().shape({
  activity: yup.string().nullable(),
  ip_address: yup.string().nullable(),
  browser_info: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
