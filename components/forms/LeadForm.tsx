'use client'

import { useEffect, useRef, useState } from 'react'

const FORM_URL = 'https://app.kukugest.ao/f/cmqjwscis02nf11wh39e1wh58?embed=1'
const FORM_ORIGIN = 'https://app.kukugest.ao'

export default function LeadForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(720)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.origin !== FORM_ORIGIN ||
        event.source !== iframeRef.current?.contentWindow ||
        event.data?.type !== 'kukugest:resize'
      ) {
        return
      }

      const nextHeight = Number(event.data.height)
      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        setHeight(nextHeight)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={FORM_URL}
      title="Formulário"
      scrolling="no"
      frameBorder="0"
      style={{
        width: '100%',
        height,
        border: 'none',
        display: 'block',
      }}
    />
  )
}
