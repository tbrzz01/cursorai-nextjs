'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
      <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
      <button className="px-4 py-2 bg-neutral-900 text-white rounded mb-4" onClick={() => reset()}>
        Try again
      </button>
      <pre className="bg-neutral-100 text-neutral-800 p-2 rounded text-left max-w-xl overflow-x-auto">
        {error.message}
      </pre>
    </div>
  );
} 