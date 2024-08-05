'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Ready to wake up to new reviews daily?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Buzzwall saves you <b>50+ hours / mo</b> by finding user-generated reviews for your product or service
          </p>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="space-y-16">
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-gray-900">Minimal and thoughtful</h3>
                  <p className="mt-2 text-sm text-gray-500">Our laptop sleeve is compact and precisely fits 13&quot; devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.</p>
                </div>
                <div className="flex-auto lg:col-span-7 lg:col-start-6 lg:row-start-1 xl:col-span-8 xl:col-start-5">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg" alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull." className="object-cover object-center" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 xl:col-span-4 xl:col-start-9">
                  <h3 className="text-lg font-medium text-gray-900">Refined details</h3>
                  <p className="mt-2 text-sm text-gray-500">We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.</p>
                </div>
                <div className="flex-auto lg:col-span-7 lg:col-start-1 lg:row-start-1 xl:col-span-8">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg" alt="Detail of zipper pull with tan leather and silver rivet." className="object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
