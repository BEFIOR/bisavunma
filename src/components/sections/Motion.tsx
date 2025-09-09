'use client'

import dynamic from 'next/dynamic'

// Motion bileşenlerini sadece istemci tarafında yükle
export const MDiv = dynamic(async () => {
  const mod = await import('framer-motion')
  return mod.m.div
}, { ssr: false, loading: () => null })

export const MBlockquote = dynamic(async () => {
  const mod = await import('framer-motion')
  return mod.m.blockquote
}, { ssr: false, loading: () => null })

