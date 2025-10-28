'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowLongRightIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import brandIcon from '../../public/static/images/brand.svg'
import GlobalConfig from '@/GlobalConfig'
import { navData as navDataImport } from './wip/nav.a'
import { Button } from '@/components/basic/buttons/Button'
import { cn } from '@/utilities/ui'


const navData = navDataImport;


const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="container relative isolate z-10">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-3">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{GlobalConfig.brand.name}</span>
            <Image src={brandIcon} alt={GlobalConfig.brand.name} className="h-8 w-auto mt-3" priority />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          {
            navData.map((firstLevelItem) => {
              if (!firstLevelItem.items) {
                // Simple nav item without dropdown
                return (
                  <a
                    key={firstLevelItem.name}
                    href={firstLevelItem.href || '#'}
                    className="text-sm/6 font-semibold text-gray-900 dark:text-white outline-none"
                  >
                    {firstLevelItem.name}
                  </a>
                )
              }

              // Dropdown nav item
              return (
                <Popover key={firstLevelItem.name}>
                  {({ open }) => (
                    <>
                      <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white outline-none ${open ? 'underline underline-offset-4 decoration-2' : ''}`}>
                        {firstLevelItem.name}
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-16 bg-white rounded-3xl transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in mt-7"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-white shadow-2xl opacity-50 rounded-3xl"
                        />
                        <div className="relative bg-white rounded-3xl">
                          <div className="mx-auto grid grid-cols-4 gap-x-4 px-12 py-10 xl:gap-x-8">

                            {firstLevelItem.items.map((secondLevelItem, index) => (
                              <div key={secondLevelItem.name}>

                                {/* Group titles */}
                                <div className={cn(
                                  'font-extralight ml-3 mb-6',
                                  index == 0 && '[color:#7737DE]',
                                  index == 1 && '[color:#3BD4CF]',
                                  index == 2 && '[color:#E65687]',
                                )}>
                                  {secondLevelItem.name}
                                </div>

                                {/* Menu Items */}
                                <div>
                                  {secondLevelItem.items.map((item) => (
                                    <a href={item.href} className="block text-base font-semibold text-gray-900 dark:text-white">
                                      <div
                                        key={item.name}
                                        className="flex group relative rounded-lg text-sm/6 hover:bg-gray-50 p-2 pl-3"
                                      >
                                        {/* <div className="w-6 min-w-6 max-w-6 pt-1 items-center justify-center rounded-lg">
                                          <item.icon
                                            aria-hidden="true"
                                            className="w-6 h-6 text-gray-300 group-hover:text-indigo-600"
                                          />
                                        </div>
                                        <div className='ml-3'> */}
                                        <div className=''>
                                          <span className="block text-base font-semibold text-gray-900">
                                            {item.name}
                                          </span>
                                          <span className="absolute inset-0" />
                                          <p className="mt-0.2 mb-0 font-light text-xs opacity-50">{item.description}</p>
                                        </div>
                                      </div>
                                    </a>
                                  ))}
                                </div>


                              </div>
                            ))}

                            {/* Call-to-action */}
                            <div>
                              <div className="relative">
                                <Image
                                  src="/media/photo-1485988412941-77a35537dae4q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.1-600x389.jpg"
                                  alt="Placeholder"
                                  width={400}
                                  height={300}
                                  className="w-full h-auto rounded-lg"
                                  priority
                                />
                                <div className="flex items-center justify-center">
                                  <Button className="w-full mt-1">
                                    Bedarfs- und Potenzialanalyse
                                    <ArrowLongRightIcon className="size-5 ml-2 inline-block" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              )
            })
          }
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Kontakt <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{GlobalConfig.brand.name}</span>
              <Image src={brandIcon} alt={GlobalConfig.brand.name} className="h-8 w-auto" priority />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  {/* <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel> */}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
