import { Authentification } from '@features/auth/ui/AuthWithEmail';

import classes from './App.module.css';

export const App = () => {
  return (
    <div className={classes.container}>
      <Authentification />
    </div>
  );
};
