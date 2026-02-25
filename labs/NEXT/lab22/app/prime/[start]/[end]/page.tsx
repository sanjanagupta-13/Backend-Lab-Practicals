import React from "react";

type PageProps = {
  params: Promise<{
    start: string;
    end: string;
  }>;
};

function isPrime(n: number): boolean {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export default async function Page({ params }: PageProps) {
  const { start: startStr, end: endStr } = await params;
  const start = Number(startStr);
  const end = Number(endStr);

  const primes: number[] = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return (
    <div>
      <h1>
        Prime numbers between {start} and {end}
      </h1>

      <p>{primes.join(", ")}</p>
    </div>
  );
}
