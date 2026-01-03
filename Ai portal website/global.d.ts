/// <reference types="react" />

declare global {
  namespace React {
    type FormEvent<T = HTMLFormElement> = any;
    type ChangeEvent<T = HTMLInputElement> = any;
    type ReactNode = any;
    type ReactElement = any;
    type FC<P = {}> = any;
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};