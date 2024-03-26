"use client";

export default function Home() {
  /* devblock:start */
  console.log("something not for production");
  /* devblock:end */

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* devblock:start */}
      <h1>Do not show on production</h1>
      {/* devblock:end */}
    </main>
  );
}
