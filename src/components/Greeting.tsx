import react from "react";
import { useState } from "react";

export default function Greeting(props: { messages: string[] }) {
  const { messages } = props;
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h1>{greeting}! Thank you for visiting!</h1>
      <button onClick={() => setGreeting(randomMessage())}>New message</button>
    </div>
  );
}
