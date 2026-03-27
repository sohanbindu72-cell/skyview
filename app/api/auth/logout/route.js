import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out' });

  // Clear both admin and user tokens just in case
  response.cookies.delete('adminToken');
  response.cookies.delete('userToken');

  return response;
}
