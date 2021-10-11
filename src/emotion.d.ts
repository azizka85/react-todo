import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      header: string,
      border: string,
      active: string,
      inactive: string,
      shadow: string,
      background: string
    },
    backgroundGradient: {
      begin: string,
      end: string
    }
  }
}
