import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect root to home page (handled by middleware as /de/home)
  redirect('/home')
}
