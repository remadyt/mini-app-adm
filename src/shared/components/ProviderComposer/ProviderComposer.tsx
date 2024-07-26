import type { FC, PropsWithChildren } from 'react';

type Props = {
  providers: FC<PropsWithChildren>[];
} & PropsWithChildren;

const ComposerFragment: FC<PropsWithChildren> = ({ children }): JSX.Element => <>{children}</>;

const providerReducer =
  (ParentProvider: FC<PropsWithChildren>, ChildProvider: FC<PropsWithChildren>) =>
  ({ children }: PropsWithChildren) => (
    <ParentProvider>
      <ChildProvider>{children}</ChildProvider>
    </ParentProvider>
  );

export const ProviderComposer = ({ children, providers }: Props): JSX.Element => {
  const ComposedProviders = providers.reduce(providerReducer, ComposerFragment);

  return <ComposedProviders>{children}</ComposedProviders>;
};
