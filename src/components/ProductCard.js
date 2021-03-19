import { useState } from 'react'
import tw, { styled } from 'twin.macro'

const Label = styled.label(({ active }) => [
  tw`uppercase rounded-lg flex items-center justify-center cursor-pointer text-sm font-medium min-height[2.25rem] min-width[2.25rem]`,
  active ? tw`bg-gray-100` : tw`text-gray-500`,
])
const Radio = tw.input`hidden`

const Button = styled.button(({ variant }) => [
  tw`h-10 flex items-center justify-center rounded-md`,
  variant === 'primary' ? tw`bg-black text-white` : tw`border border-gray-300`,
])

const variantOptions = ['xs', 's', 'm', 'l', 'xl']

export default function ProductCard() {
  const [variant, setVariant] = useState(variantOptions[0])
  console.log(`variant: `, variant)

  return (
    <div tw="sm:flex bg-white rounded-2xl shadow-md">
      <div tw="h-48 relative overflow-hidden rounded-t-2xl sm:flex-none sm:w-48 sm:h-auto sm:rounded-t-none sm:rounded-l-2xl">
        <img
          tw="absolute inset-0 w-full h-full object-cover"
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
          alt=""
        />
      </div>
      <form tw="flex-auto p-6">
        <div tw="flex flex-wrap">
          <h1 tw="flex-auto text-xl font-semibold">Classic Utility Jacket</h1>
          <div tw="text-xl font-semibold text-gray-500">$110.00</div>
          <div tw="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
          </div>
        </div>
        <div tw="flex items-baseline justify-between flex-wrap mt-4 mb-6">
          <div tw="flex space-x-2">
            {variantOptions.map((optionName, index) => (
              <Label key={index} active={variant === optionName}>
                <Radio
                  name="size"
                  type="radio"
                  value={optionName}
                  checked={variant === optionName}
                  onChange={event =>
                    event.target.checked && setVariant(optionName)
                  }
                />
                {optionName}
              </Label>
            ))}
          </div>
          <div tw="text-sm text-gray-500 underline">Size Guide</div>
        </div>
        <div tw="mb-4 text-sm font-medium grid gap-3 grid-template-columns[1fr auto] sm:grid-template-columns[1fr 1fr auto]">
          <Button tw="col-span-2 sm:col-span-1" variant="primary" type="submit">
            Buy now
          </Button>
          <Button type="button">
            Add to bag
          </Button>
          <Button
            tw="flex-none w-9 text-gray-400"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </Button>
        </div>
        <p tw="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  )
}
