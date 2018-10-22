import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...theme,
  prism: {
    style: okaidia
  },
  h1: {
    'border-bottom': 'black solid 5px',
    'text-align': 'left',
    'text-transform': 'uppercase',
  },
  h2: {
    'text-align': 'left',
  },
  p: {
    'text-align': 'left',
  },
};
