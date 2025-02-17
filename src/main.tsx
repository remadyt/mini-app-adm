import { App } from '@app/components';
import { PROVIDERS } from '@app/providers';
import { ProviderComposer } from '@shared/components';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProviderComposer providers={PROVIDERS}>
    <App />
  </ProviderComposer>,
);
