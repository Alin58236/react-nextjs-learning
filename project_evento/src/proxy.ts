import { NextResponse } from "next/server";

export function proxy(request: Request) {
    // This middleware runs on every request to the application
    console.log("Proxy middleware triggered for URL:", request.url);
    return NextResponse.redirect(new URL('/events/All', request.url));
}


export const config = {
    matcher: [
        '/events',
    ],
}