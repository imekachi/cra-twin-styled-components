import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { createGlobalStyle } from 'styled-components'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`bg-gray-200 text-gray-800`};
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
