import { App } from '@app/components';
import { PROVIDERS } from '@app/providers';
import { ProviderComposer } from '@shared/components';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ProviderComposer providers={PROVIDERS}>
      <App />
    </ProviderComposer>
  </BrowserRouter>,
);
