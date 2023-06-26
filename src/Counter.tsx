import React, { useEffect } from 'react';
import { Expando, useIdentity, useQuery, useSpaces } from '@dxos/react-client';

export const Counter = () => {
  useIdentity({ login: true });
  const [space] = useSpaces();
  const [counter] = useQuery(space, { type: 'counter' });

  useEffect(() => {
    if (space && !counter) {
      const counter = new Expando({ type: 'counter', values: [] });
      space.db.add(counter);
    }
  }, [space, counter]);

  return (
    <div>
      {counter && (
        <div className='text-center'>
          <button
            className='border bg-white py-2 px-4 my-2 rounded hover:bg-gray-100'
            onClick={() => {
              counter.values.push(1);
            }}
          >
            Click me
          </button>
          <p>Clicked {counter.values.length ?? 0} times.</p>
        </div>
      )}
    </div>
  );
};
