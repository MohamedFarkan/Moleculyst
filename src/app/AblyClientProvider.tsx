"use client";

import { AblyProvider, ChannelProvider } from "ably/react";
import * as Ably from "ably";
import React from "react";

export default function AblyClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new Ably.Realtime({
    key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
  });

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="chat-demo1">{children}</ChannelProvider>
    </AblyProvider>
  );
}
