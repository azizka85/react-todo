import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string,
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
