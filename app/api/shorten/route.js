import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Url from '@/models/Url';
import { nanoid } from 'nanoid';

export async function POST(req) {
  try {
    await connectDB();
    
    const { url, alias, days } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const expiryDays = days ? parseInt(days) : 7;
    
    const expiresAt = new Date(Date.now() + (expiryDays * 24 * 60 * 60 * 1000));

    let shortId;

    
    if (alias) {
      const existing = await Url.findOne({ shortId: alias });
      if (existing) {
        return NextResponse.json({ error: 'Alias already taken! Try another.' }, { status: 409 });
      }
      shortId = alias;
    } else {
      shortId = nanoid(5);
    }

    
    await Url.create({
      originalUrl: url,
      shortId,
      expiresAt: expiresAt 
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    return NextResponse.json({ shortUrl: `${baseUrl}/${shortId}` });
    
  } catch (error) {
    console.error("Shorten Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}