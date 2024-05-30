"use client";

import React, { useState } from "react";

export default function RevealButton(props: {
  catName: string;
  children: React.ReactNode;
}) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <div>
        <h1 className="text-4xl font-bold">{props.catName}</h1>
      </div>
    );
  }

  return (
    <h1 className="text-4xl font-bold">
      <button onClick={() => setRevealed(true)}>Reveal</button>
    </h1>
  );
}
