"use client";

import React, { useState } from "react";

export default function RevealButton(props: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return props.children;
  }

  return (
    <h1 className="text-4xl font-bold">
      <button onClick={() => setRevealed(true)}>Reveal</button>
    </h1>
  );
}
