import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import AppProvider from '../src/app/app-provider';
import '../src/app/css/style.css';
import Theme from '../src/app/theme-provider';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Theme>
          <AppProvider>
            <Story />
          </AppProvider>
        </Theme>
      </>
    ),
  ],
  loaders: [mswLoader],
};

export default preview;
