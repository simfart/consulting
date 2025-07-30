declare module 'vike-react/config' {
  const config: any
  export default config
}

declare module 'vike-react/useConfig' {
  export function useConfig(): (config: { title?: string; description?: string }) => void
} 