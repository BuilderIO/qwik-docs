/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { renderToString, RenderToStringOptions, QwikLoader } from '@builder.io/qwik/server';
import { Root } from './root';

/**
 * Entry point for server-side pre-rendering.
 *
 * @returns a promise when all of the rendering is completed.
 */
export function renderApp(opts: RenderToStringOptions) {
  return renderToString(
    <html>
      <head>
        <title>Qwik Blank App</title>
        <QwikLoader></QwikLoader>
      </head>
      <body q:base="/build/">
        <Root pathname={opts.url!.pathname} />
      </body>
    </html>,
    opts
  );
}

