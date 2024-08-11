import { Form } from '@/shared/ui/Form';

export const SendCategoriesForm = (): JSX.Element => {
  const fields = [{ name: 'id', label: 'ID' }];

  const onSubmitHandler = (values: Record<string, unknown>) => {
    console.log(`Submitted Categories to DB: ${values}`);
  };

  return <Form fields={fields} onSubmitHandler={onSubmitHandler} headerForm="Categories Form" />;
};
