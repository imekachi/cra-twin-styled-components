import tw, { styled } from 'twin.macro'
import logo from './logo.svg'

const Wrapper = styled.div`
  backdrop-filter: blur(10px);
  ${tw`bg-purple-600 bg-opacity-50 text-white shadow-lg sticky z-50 top-0 font-bold`};
`

export default function NavBar() {
  return (
    <Wrapper>
      <nav tw="p-4 max-w-3xl mx-auto">
        <span tw="inline-flex items-center justify-start align-top">
          <img src={logo} alt="logo react" tw="inline-block h-6" />
          CRA Twin Styled Components
        </span>
      </nav>
    </Wrapper>
  )
}
