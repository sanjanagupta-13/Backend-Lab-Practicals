import React from "react";

async function page({ params }: { params: Promise<{ pageno: number }> }) {
  const { pageno } = await params;
  const start = (pageno - 1) * 10 + 1;
  const end = pageno * 10;
  return (
    <div>
      {start} - {end}
    </div>
  );
}

export default page;
