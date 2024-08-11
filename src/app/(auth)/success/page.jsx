import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Thank you!',
}

export default function Success() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Thank you for your purchase!
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        I appreciate you being one of our early adopters, and I'm hustling in the process of building out the product. 
      </p>
      <p className="mt-3 text-sm text-gray-700">
        I'll be in touch with major updates and
        if you have any questions or concerns don't hestitate to reach out to me at <a href="mailto: donaldlee50@gmail.com">donaldlee50@gmail.com</a>.
      </p>
    </SlimLayout>
  )
}
