'use client'

import { useId } from 'react'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import bwAiSearching from '@/images/screenshots/buzzwall-ai-searching.png'
import bwAiCuratedReviews from '@/images/screenshots/buzzwall-ai-curated-reviews.png'
import bwAiRecommendations from '@/images/screenshots/buzzwall-ai-recommendations.png'

import { Container } from '@/components/Container'

export function BuzzwallFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 sm:pb-20 lg:pb-32"
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
                <div className="mt-6 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mt-0 xl:col-span-4">
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-slate-800 ring-1 ring-inset ring-slate-900/10">
                    FOR BUILDERS
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get realtime alerts for new reviews</h3>
                  <p className="mt-2 text-md tracking-tight text-slate-700">
                    Input your keywords and Buzzwall will scrape for reviews across social media platforms
                  </p>
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>50+ hours saved from manually collecting reviews</b>
                    </li>
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Generate 62% more revenue / visitor</b>
                    </li>
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Supports TikTok, Instagram, and X</b>
                    </li>
                  </ul>
                  <div className="mt-6 flex gap-x-6">
                    <Button href="#pricing">Join Now</Button>
                  </div>
                </div>
                <div className="flex-auto  lg:col-start-6 lg:row-start-1 xl:col-span-8 xl:col-start-5">
                  <Image
                    className="object-cover"
                    src={bwAiSearching}
                    alt=""
                    width={900}
                    height={56}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 xl:col-span-4 xl:col-start-9">
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-slate-900 ring-1 ring-inset ring-yellow-600/20">
                    FOR BRANDS
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Curate your reviews for your Buzzwall</h3>
                  <p className="mt-2 text-md tracking-tight text-slate-700">
                    Build an embeddable Buzzwall to display your testimonials on your website
                  </p>
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Instant reputation boost from influencers' reviews</b>
                    </li>
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Realtime notifications of new reviews found</b>
                    </li>
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Limited time 30% discount</b>
                    </li>
                  </ul>
                  <div className="mt-6 flex gap-x-6">
                    <Button href="#pricing">Find My Reviews</Button>
                  </div>
                </div>
                <div className="flex-auto lg:col-span-7 lg:col-start-1 lg:row-start-1 xl:col-span-8">
                  <Image
                    className="object-cover"
                    src={bwAiCuratedReviews}
                    alt=""
                    width={900}
                    height={56}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-0 xl:col-span-4">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-slate-900 ring-1 ring-inset ring-green-600/20">
                    FOR AGENCIES
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Track Review Performance with AI</h3>
                  <p className="mt-2 text-md tracking-tight text-slate-700">
                    Our AI tracks review peformance and notifies you of any reviews going viral
                  </p>
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Identify customer-influencers for partnerships</b>
                    </li>
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Find patterns for viral reviews</b>
                    </li>
                    <li  className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-900" />
                      <b>Viral posts found in realtime</b>
                    </li>
                  </ul>
                  <div className="mt-6 flex gap-x-6">
                    <Button href="#pricing">Track Viral Reviews</Button>
                  </div>
                </div>
                <div className="flex-auto lg:col-span-7 lg:col-start-6 lg:row-start-1 xl:col-span-8 xl:col-start-5">
                  <Image
                    className="object-cover"
                    src={bwAiRecommendations}
                    alt=""
                    width={900}
                    height={56}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
