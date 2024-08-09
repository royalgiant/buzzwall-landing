import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
    {
      question: 'Do you have a free trial?',
      answer:
        'At the moment, we are in closed-beta and do not offer a free trial. This is intentional to ensure we can build & test with our early adopters and fine tune the product to our highest internal standards. As we scale the product to larger audiences, we plan to introduce a free trial.',
    },
    {
      question: 'Do you offer refunds?',
      answer: "Absolutely! We offer a full refund if you're not satisfied with the product and have not exceeded 7 days of use.",
    },
    {
      question: 'What happens if I max out my reviews?',
      answer:
        'We provide "credit packs" to top up your review count so that Buzzwall can continue finding reviews for you.',
    },
    {
      question: 'Do credit packs expire?',
      answer:
        'Nope. Never.',
    },
    {
      question: 'Are there really no subscriptions?',
      answer:
        'Not for early-adopters. NEVER! For your belief in me, you will be grandfathered into our launch prices forever.',
    },
    {
      question: 'When will I start seeing reviews appear?',
      answer:
        'Once you add your keywords, Buzzwall will start scanning to get the most recent reviews for those keywords. Typically you sill start seeing leads flow in within the first 48 hours.',
    },
    {
      question:
        'Can you explain the "X approved reviews"?',
      answer:
        'We find your reviews for the given keywords. The ones you approve will be counted towards your approved reviews and stored in your account. Each approval deducts from your maximum approved reviews. Once you max it out, you can buy credit packs to "top up" your account with more approved reviews.',
    },
    {
      question: 'What are keywords tracked?',
      answer:
      'The # of keywords you can input into Buzzwall to constantly track for new reviews. Each keyword will generate a list of reviews that you can approve or reject.',
    },
    {
      question: "What's the difference between Basic and Advanced Reviews Tracking",
      answer: "Buzzwall's AI recommendation on who you should reach out to for sponsorship/collaborations + future tracking features are included in advanced. Basic will only ever track review performance.",
    },
    {
      question:
        'What is the 30% lifetime discount?',
      answer:
        "We're offering our first 50 customers a 30% lifetime discount off our launch price as a thank you for the early support! You will be grandfathered into these prices forever.",
    },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                    <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </Container>
    </section>
  )
}
