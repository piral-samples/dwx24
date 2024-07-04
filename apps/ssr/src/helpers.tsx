import { renderInIsolation } from './context';

export function createReactConverterService() {
  return {
    convert(Component: any) {
      return {
        async stringify(props: any) {
          return renderInIsolation(Component, props);
        },
      };
    },
  };
}

export function createPiletService() {
  return {
    extend(api) {
      Object.assign(api, {
        registerExtension(name: string, Component: any, meta: any) {
          api.registerComponent(name, Component, {
            ...meta,
            type: 'react',
          });
        },
        registerMenu(Component: any) {
          api.registerComponent('general-menu', Component, {
            type: 'react',
          });},
        registerPage(path: string, Component: any, meta: any) {
          api.registerComponent(`page:${path}`, Component, {
            ...meta,
            type: 'react',
          });
        },
      });
    },
  };
}
