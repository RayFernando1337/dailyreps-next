'use client'

import { useRouter } from 'next/navigation'

type RedirectProps = {
  to: string
}

export default function Redirect({ to }: RedirectProps) {
  const router = useRouter()
  router.push(to)
  return null
}