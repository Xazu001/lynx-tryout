import { root } from '@lynx-js/react';
import './tailwind.css?url';

import { App } from './App.js';

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
