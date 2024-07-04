import type { HTMLAttributes } from 'react';

export interface PiComponentProps extends HTMLAttributes<{}> {
  name?: string;
}

export interface PiSlotProps extends HTMLAttributes<{}> {
  name: string;
  rel?: string;
  data?: string;
}

export interface PiPartProps extends HTMLAttributes<{}> {
  name: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'pi-component': React.DetailedHTMLProps<PiComponentProps, {}>;
      'pi-slot': React.DetailedHTMLProps<PiSlotProps, {}>;
      'pi-part': React.DetailedHTMLProps<PiPartProps, {}>;
    }
  }

  interface HTMLElementTagNameMap {
    'pi-component': HTMLElement & {
      name?: string;
    };
    'pi-slot': HTMLElement & {
      name: string;
      data: string;
    };
    'pi-part': HTMLElement & {
      name: string;
    };
  }
}
