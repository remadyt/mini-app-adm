import { Button, Group, TextInput, Box, Container, Title, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormField {
  name: string;
  label: string;
}

interface FormProps {
  fields: FormField[];
  onSubmitHandler: (values: Record<string, unknown>) => void;
  headerForm?: string;
}

export const Form = (props: FormProps): JSX.Element => {
  const { fields, onSubmitHandler, headerForm } = props;

  const form = useForm({
    initialValues: Object.fromEntries(fields.map((field) => [field.name, ''])),
  });

  return (
    <Box>
      <Container size={620} miw={440}>
        <Group align="baseline">
          <Title order={2}>{headerForm}</Title>
        </Group>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={form.onSubmit((values) => {
              onSubmitHandler(values);
            })}
          >
            {fields.map((field) => (
              <TextInput
                key={field.name}
                withAsterisk
                label={field.label}
                placeholder={`Введите ${field.label.toLowerCase()}`}
                mt="md"
                {...form.getInputProps(field.name)}
              />
            ))}

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};
