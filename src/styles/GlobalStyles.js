import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { createGlobalStyle } from 'styled-components'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

export default function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}
