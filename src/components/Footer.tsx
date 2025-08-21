'use client';

export default function Footer() {
  const name = 'Farhan Shawkat';
  const student = '21438507';
  const fixedDate = '18/8/2025'; 

  return (
    <footer
      style={{
        borderTop: '1px solid #ddd',
        padding: 12,
        textAlign: 'center',
      }}
    >
      © {new Date().getFullYear()} {name} | {student} | {fixedDate}
    </footer>
  );
}
