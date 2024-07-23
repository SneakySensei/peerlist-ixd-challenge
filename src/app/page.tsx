import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
      <h1 className="text-4xl my-10 mx-auto">
        Peerlist Interaction Design Challenge - July 2024
      </h1>
      <p className="mb-6">This page is a work in progress...</p>
      <h2 className="text-2xl mb-4">Submissions</h2>
      <ul className="list-disc list-inside">
        <li>
          <a href="/challenge6">Challenge 6: Page Switch</a>
        </li>
      </ul>
    </main>
  );
}
