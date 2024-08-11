import { Form } from '@/shared/ui/Form';

export const SendProductsForm = (): JSX.Element => {
  const fields = [
    { name: 'id', label: 'ID' },
    { name: 'category_id', label: 'Category ID' },
  ];

  const onSubmitHandler = (values: Record<string, unknown>) => {
    console.log(`Submitted Products to DB: ${values}`);
  };

  return <Form fields={fields} onSubmitHandler={onSubmitHandler} headerForm="Products Form" />;
};
