"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import brandIcon from "../../public/static/images/brand.svg";
import Image from "next/image";
import GlobalConfig from "@/GlobalConfig";
import { Header } from '@/payload-types';
import { LanguageSwitcher } from "./LanguageSwitcher";


interface NavigationProps {
  navigation?: Header['navigation'];
}
export default function Navigation({navigation}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Process navigation data to resolve URLs
  const processedNavigation = navigation?.map(item => ({
    label: item.label,
    url: item.urlType === 'internal' && typeof item.internalUrl !== 'string' && item.internalUrl ? `/${item.internalUrl.slug}` : item.url || '',
    children: item.children?.map(child => ({
      label: child.label,
      brief: child.brief,
      url: child.urlType === 'internal' && typeof child.internalUrl !== 'string' && child.internalUrl ? `/${child.internalUrl.slug}` : child.url || '',
    })),
  }));
 
  return (
    <header className="bg-white">

      <div className="grid flex-1 grid-rows-[1fr_auto] grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)_1fr] [--gutter-width:--spacing(6)] lg:[--gutter-width:--spacing(10)]">
        {/* Stripes left */}
        <div className="col-start-2 row-span-full row-start-1 max-sm:hidden text-gray-950/5 border-x border-x-current custom-grid-color bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,var(--grid-color),currentColor_1px,transparent_0,transparent_50%)]"></div>
        {/* Stripes right */}
        <div className="col-start-4 row-span-full row-start-1 max-sm:hidden text-gray-950/5 border-x border-x-current custom-grid-color bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,var(--grid-color),currentColor_1px,transparent_0,transparent_50%)]"></div>
        {/* Content */}
        <div className="col-start-3 row-start-1 max-sm:col-span-full max-sm:col-start-1">


          <nav aria-label="Global" className="mx-auto flex items-center justify-between p-3 lg:px-6">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{GlobalConfig.brand.name}</span>
                <Image src={brandIcon} alt={GlobalConfig.brand.name} className="h-8 w-auto" priority />            
              </Link>
            </div>
            <div className="flex lg:hidden relative z-50">
              <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* ------------------------------- */}
            {/* Wide Variation (Desktop) */}

            <PopoverGroup className="hidden lg:flex lg:gap-x-22">

              {/* First level */}
              {
                processedNavigation?.map((item, index) => {
                  return !item.children?.length 
                    ?
                      <Link href={item.url || "/"} className="text-base/6 font-semibold text-gray-900 py-3" key={index}>
                        {TextWithLineBreaks({text: item.label})}
                      </Link>
                    : 
                      <Popover className="relative group" key={index}>
                        <PopoverButton onClick={(evt) => {if ((evt.target as HTMLElement).nodeName !== "svg") window.location.href = item.url;}} className="flex items-center text-left gap-x-1 text-base/6 font-semibold text-gray-900 outline-none py-3 cursor-pointer">
                          {TextWithLineBreaks({text: item.label})}
                          <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>
            
                        <PopoverPanel
                          static
                          className="absolute top-full -left-8 z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition-all duration-200 ease-out opacity-0 scale-95 -translate-y-6 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:opacity-100 hover:scale-100 hover:translate-y-0 hover:pointer-events-auto"
                        >
                          <div className="p-4">
                            {/* Second level */}
                            {
                              item.children?.map((child, childIndex) => {
                                const href = child.url;
                                return <div key={childIndex} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-xl/6 hover:bg-gray-50">
                                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    {/* <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" /> */}
                                  </div>
                                  <div className="flex-auto">
                                    <Link href={href || "/"} className="block font-semibold text-gray-900">
                                      {child.label}
                                      <span className="absolute inset-0" />
                                    </Link>
                                    <p className="mt-1 text-gray-600">{child.brief}</p>
                                  </div>
                                </div>
                              })
                            }
                          </div>
                        </PopoverPanel>
                      </Popover>
                  ;
                })
              }
              <LanguageSwitcher />
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <Link href={Linkmap.get("de/contact") || "/de/contact"} className="text-base/6 font-semibold text-gray-900"> */}
              <Link href="/#WIP" className="text-base/6 font-semibold text-gray-900">
                Termin vereinbaren <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>


        </div>
      </div>


      {/* ------------------------------- */}
      {/* Narrow Variation (Phone) */}

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{GlobalConfig.brand.name}</span>
              <Image src={brandIcon} alt={GlobalConfig.brand.name} className="h-4 w-auto" priority />    
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <LanguageSwitcher />

                {/* First level */}
                {
                  processedNavigation?.map((item, index) => {
                    return !item.children?.length 
                      ?
                        <Link href={item.url || "/"} className="-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50" key={index}>
                          {item.label}
                        </Link>
                      : 
                        <Disclosure as="div" className="-mx-3" key={index}>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50">
                            {item.label}
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {/* Second level */}
                            {
                              item.children?.map((child, childIndex) => {
                                const href = item.url;
                                return <DisclosureButton key={childIndex} as="a" href={href} className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">
                                  {child.label}
                                </DisclosureButton>
                              })
                            }
                          </DisclosurePanel>
                        </Disclosure>                        
                    ;
                  })
                }
              </div>
              
              {/* <div className="py-6">
                <a href="/" className="-mx-3 block rounded-lg px-3 py-2.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Log in
                </a>
              </div> */}

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}



function TextWithLineBreaks({ text }: { text: string }) {
  // Split the text by newline characters
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {/* Add <br/> only if it's not the last line */}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}