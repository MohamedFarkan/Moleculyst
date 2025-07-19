"use client";

//import * as Ably from "ably";
import ChatBox from "./chat-box";

// export default function Chat() {
//   const client = new Ably.Realtime({
//     key: process.env.ABLY_API_KEY,
//   });

export default function Chat() {
  return (
    <div className="flex h-full flex-col">
      <ChatBox />
    </div>
  );
}
