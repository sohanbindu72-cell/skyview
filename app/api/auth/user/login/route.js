import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
      role: 'user'
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'fallback_secret_key', {
      expiresIn: '30d'
    });

    const response = NextResponse.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isPasswordTemp: user.isPasswordTemp
    });

    response.cookies.set({
      name: 'userToken',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('User Login Error:', error);
    return NextResponse.json({ message: 'Server error during login' }, { status: 500 });
  }
}
