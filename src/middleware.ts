import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const url = request.nextUrl;
    if(url.pathname == '/login' || url.pathname == '/sign-in') return NextResponse.rewrite(new URL('/agency/login', request.url))
    if(url.pathname == '/signup' || url.pathname == '/sign-up') return NextResponse.rewrite(new URL('/agency/signup', request.url))
    if(url.pathname == '/' || url.pathname == '/home') return NextResponse.rewrite(new URL('/site', request.url))
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}