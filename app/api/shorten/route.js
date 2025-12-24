import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Url from '@/models/Url';
import { nanoid } from 'nanoid';

export async function POST(req) {
  try {
    await connectDB();
    
    const { url, alias } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    let shortId;

    if (alias) {
      // Check if this alias is already taken in the database
      const existing = await Url.findOne({ shortId: alias });
      
      if (existing) {
        return NextResponse.json({ error: 'Alias already taken! Try another.' }, { status: 409 });
      }
      
      // If free, use it!
      shortId = alias;
      
    } else {
      shortId = nanoid(5);
    }

    await Url.create({
      originalUrl: url,
      shortId,
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    return NextResponse.json({ shortUrl: `${baseUrl}/${shortId}` });
    
  } catch (error) {
    console.error("Shorten Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}