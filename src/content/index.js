/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import Perf from 'react-addons-perf';
import { render } from 'react-dom';
import Root from './containers/Root';
import createStore from './create-store';
import '../../res/style.css';

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');
  runtime.install({
    onUpdateReady: () => {
      runtime.applyUpdate();
    },
  });
}

window.geckoProfilerPromise = new Promise(function (resolve) {
  window.connectToGeckoProfiler = resolve;
});

const store = createStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

window.Perf = Perf;
