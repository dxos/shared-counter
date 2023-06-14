import { Expando, useIdentity, useQuery, useSpaces } from "@dxos/react-client";
import React from "react";

export const Counter = () => {
  const identity = useIdentity({ login: true });
  const [space] = useSpaces();
  const [counter] = useQuery(space, { type: "counter" });

  if (space && !counter) {
    const c = new Expando({ type: "counter", values: [] });
    space.db.add(c);
  }

  return (
    <div>
      {counter ? (
        <div className="text-center">
          <button
            className="border bg-white dark:bg:black py-2 px-4 rounded"
            onClick={() => {
              counter.values.push(1);
            }}
          >
            Click me
          </button>
          <p>Clicked {counter.values ? counter.values.length : "0"} times.</p>
        </div>
      ) : (
        <div className="text-center">No counter created.</div>
      )}
    </div>
  );
};
