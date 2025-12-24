import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Url from '@/models/Url';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { shortId } = await params;

    // 1. Find the link
    const urlRecord = await Url.findOne({ shortId });

    if (!urlRecord) {
      // If not found, redirect to 404 or Home
      return NextResponse.redirect(new URL('/', req.url));
    }

    // 3. Redirect to Original URL
    return NextResponse.redirect(urlRecord.originalUrl);
    
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}