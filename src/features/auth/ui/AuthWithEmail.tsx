import { SendCategoriesForm } from '@/features/sendCategoriesForm/ui';
import { SendProductsForm } from '@/features/sendProductsForm';
import { SendUsersForm } from '@/features/sendUsersForm';
import { useUser } from '@features/auth/model/useUser';
import { Box, Button, Center, Container, Flex, Group, Paper, PasswordInput, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { supabaseClient } from '@shared/api/supabase/supabaseClient.ts';

// import { GoogleButton } from './GoogleButton';
// import { TwitterButton } from './TwitterButton';

export const Authentification = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const { user } = useUser();

  if (user) {
    return (
      <div>
        <Button
          onClick={async () => {
            await supabaseClient.auth.signOut();
          }}
        >
          logout
        </Button>

        <Flex mih={50} gap="md" justify="flex-start" align="flex-start" direction="row" wrap="wrap">
          <SendUsersForm />
          <SendProductsForm />
          <SendCategoriesForm />
        </Flex>
      </div>
    );
  }

  return (
    <Box h="100vh" w="100vw">
      <Center h="100vh" w="100%">
        <Container size={620} miw={440}>
          <Group align="baseline">
            <Title>Login</Title>
          </Group>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form
              onSubmit={form.onSubmit(async (values) => {
                await supabaseClient.auth.signInWithPassword({
                  email: values.email,
                  password: values.password,
                });
              })}
            >
              <TextInput label="Email" placeholder="you@mantine.dev" required {...form.getInputProps('email')} />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                {...form.getInputProps('password')}
              />

              <Button fullWidth mt="xl" type="submit">
                Sign in
              </Button>
            </form>
          </Paper>
        </Container>
      </Center>
    </Box>
  );
};
