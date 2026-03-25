import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // If the user tries to access the /admin/login page, allow them
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Check if they have the adminToken cookie
  const token = request.cookies.get('adminToken')?.value;

  if (!token) {
    // If no token exists, redirect them strictly to the login page
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    // Verify the token using `jose` because Next.js Edge Runtime doesn't support the Node `crypto` library used by `jsonwebtoken`
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret_key');
    await jwtVerify(token, secret);
    
    // If verification passes, let them proceed
    return NextResponse.next();
  } catch (error) {
    console.error('Invalid token during middleware verification:', error);
    // If the token is invalid or expired, redirect them to login
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Apply this middleware to ALL routes extending from /admin (except for _next and static files)
    '/admin/:path*',
  ]
};
