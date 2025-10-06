import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to the default language (German)
  redirect('/de/start')
}
