import { Form } from '@/shared/ui/Form';

export const SendUsersForm = (): JSX.Element => {
  const fields = [
    { name: 'id', label: 'ID' },
    { name: 'user_name', label: 'Username' },
  ];

  const onSubmitHandler = (values: Record<string, unknown>) => {
    console.log(`Submitted Users to DB: ${values}`);
  };

  return <Form fields={fields} onSubmitHandler={onSubmitHandler} headerForm="Users Form" />;
};
