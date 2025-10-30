'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Consent() {
  const [showConsent, setShowConsent] = useState(false);

  // Check if consent decision has been made
  useEffect(() => {
    const consentGiven = getCookie('cookieConsent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  // Handle consent acceptance
  const handleAccept = () => {
    setCookie('cookieConsent', 'accepted', 365); // 1 year
    setCookie('cookieConsentDate', new Date().toISOString(), 365);
    setShowConsent(false);
  };

  // Handle consent rejection
  const handleReject = () => {
    setCookie('cookieConsent', 'rejected', 7); // 7 days
    setCookie('cookieConsentDate', new Date().toISOString(), 7);
    setShowConsent(false);
  };

  return (
    <>
      {showConsent && (
        <div className="fixed bottom-0 left-0 right-0 [background-color:#000000C8] text-white p-4 shadow-lg backdrop-blur-md z-1001">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-3 w-full max-w-5xl">
            <p className="text-gray-300 mb-4 md:mb-0">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, personalisierte Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Indem Sie diese Seite weiterhin nutzen, stimmen Sie unserer Verwendung von Cookies zu. Weitere Details finden Sie in unserer <Link href="/de/privacy" className="underline">Datenschutzrichtlinie</Link>.
            </p>
            <div className="flex space-x-4">
              <a onClick={handleReject} className="px-4 py-2 underline text-white opacity-60 hover:opacity-100 cursor-pointer">
                Ablehnen
              </a>
              <button onClick={handleAccept} className="px-4 py-2 bg-white text-black font-bold rounded opacity-90 hover:opacity-100 cursor-pointer">
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



// Cookie helper functions
const setCookie = (name: string, value: string, days: number): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};