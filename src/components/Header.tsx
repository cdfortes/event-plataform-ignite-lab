/* eslint-disable tailwindcss/classnames-order */
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="flex w-full items-center justify-center border-b border-gray-600 bg-gray-700 py-5">
      <Logo />
    </header>
  )
}
