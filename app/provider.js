
"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)
    return(
       <ConvexProvider client={convex}>
           {children}
       </ConvexProvider>
    )
}

export default Provider;