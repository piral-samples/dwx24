import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { createContext, runInContext } from 'vm';

export function renderInIsolation(Component: any, props: any) {
  const exports: { result?: string } = {};
  const ctx = createContext({
    Component,
    props,
    React,
    console,
    renderToString,
    process: {
      env: {
        MY_SECRET: '(hidden)',
      },
    },
    exports,
  });

  runInContext(`exports.result = renderToString(React.createElement(Component, { params: props }));`,
    ctx,
  );
  return exports.result;
}
