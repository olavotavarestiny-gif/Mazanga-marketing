import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname === 'mazanga.digital') {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.hostname = 'www.mazanga.digital'
    return NextResponse.redirect(redirectUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
