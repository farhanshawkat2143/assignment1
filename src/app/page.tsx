import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>LTU HTML Generator</h1>
      <p>This app generates single-file HTML + JS with inline CSS that you can copy into <code>Hello.html</code>.</p>
      <ul>
        <li><Link href="/tabs">Tabs Generator</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>
  );
}
