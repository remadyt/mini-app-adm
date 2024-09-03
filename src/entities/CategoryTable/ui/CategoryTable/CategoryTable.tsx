import { CustomTable } from '@/shared/ui/CustomTable';
import { Center, Loader } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useGetCategories } from '../../api/categoryTableApi';
import { theadersCategoryTable } from '../../model/const/theadersCategoryTable';
import { CategoryRow } from '../CategoryRow/CategoryRow';

export const CategoryTable = (): JSX.Element => {
  const { t } = useTranslation();
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(null);

  const rows = categories?.map((category) => <CategoryRow key={category.id} category={category} />);

  if (isLoadingCategories) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return <CustomTable subheader={t('categories.subheader.label')} theaders={theadersCategoryTable} rows={rows!} />;
};
