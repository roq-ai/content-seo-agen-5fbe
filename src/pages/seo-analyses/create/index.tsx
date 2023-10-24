import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { seoAnalysisValidationSchema } from 'validationSchema/seo-analyses';
import { ContentInterface } from 'interfaces/content';
import { UserInterface } from 'interfaces/user';
import { SeoAnalysisInterface } from 'interfaces/seo-analysis';

function SeoAnalysisCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: SeoAnalysisInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.seo_analysis.create({ data: values as RoqTypes.seo_analysis });
      resetForm();
      router.push('/seo-analyses');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<SeoAnalysisInterface>({
    initialValues: {
      seo_score: 0,
      seo_report: '',
      content_id: (router.query.content_id as string) ?? null,
      analyst_id: (router.query.analyst_id as string) ?? null,
    },
    validationSchema: seoAnalysisValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Seo Analyses',
              link: '/seo-analyses',
            },
            {
              label: 'Create Seo Analysis',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Seo Analysis
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Seo Score"
            formControlProps={{
              id: 'seo_score',
              isInvalid: !!formik.errors?.seo_score,
            }}
            name="seo_score"
            error={formik.errors?.seo_score}
            value={formik.values?.seo_score}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('seo_score', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.seo_report}
            label={'Seo Report'}
            props={{
              name: 'seo_report',
              placeholder: 'Seo Report',
              value: formik.values?.seo_report,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<ContentInterface>
            formik={formik}
            name={'content_id'}
            label={'Select Content'}
            placeholder={'Select Content'}
            fetcher={() => roqClient.content.findManyWithCount({})}
            labelField={'title'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'analyst_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/seo-analyses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'seo_analysis',
    operation: AccessOperationEnum.CREATE,
  }),
)(SeoAnalysisCreatePage);
