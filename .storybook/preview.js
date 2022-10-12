import {addDecorator} from '@storybook/react';
import GlobalStyles from '../src/styles/global';

addDecorator((story) => (
    <>
      <GlobalStyles />
      {story()}
    </>
))
