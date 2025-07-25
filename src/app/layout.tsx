// "use client";
// import "jsvectormap/dist/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
// import "@/css/style.css";
// import React, { useEffect, useState } from "react";
// import { SessionProvider } from "next-auth/react";
// import { UserProvider } from "./context/UserContext";
// import { AblyProvider, ChannelProvider } from "ably/react";
// import * as Ably from "ably";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const client = new Ably.Realtime({
//     key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
//   });
//   return (
//     <html lang="en">
//       <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script>

//       <body suppressHydrationWarning={true}>
//         <SessionProvider>
//           <UserProvider>
//             <AblyProvider client={client}>
//               <ChannelProvider channelName="chat-demo1">
//                 {children}
//               </ChannelProvider>
//             </AblyProvider>
//           </UserProvider>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
"use client";

import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/UserContext";
import dynamic from "next/dynamic";

const AblyClientProvider = dynamic(() => import("./AblyClientProvider"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
            <AblyClientProvider>{children}</AblyClientProvider>
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
