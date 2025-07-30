/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace React {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T
    props: P
    key: Key | null
  }
  
  type ReactNode = 
    | string
    | number
    | boolean
    | null
    | undefined
    | ReactElement
    | ReactFragment
    | ReactPortal
    | Iterable<ReactNode>
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
} 