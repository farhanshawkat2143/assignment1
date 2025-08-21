export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p><strong>Name:</strong> Farhan Shawkat</p>
      <p><strong>Student Number:</strong> 21438507</p>
      <p>This is a demonstration of my LTU Assignment 1 project.</p>
      <p>Below is the instructional video showing how to use the site:</p>

      <div style={{ maxWidth: 560 }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XScT8DsnU9s"
          title="How to use this site"
          allowFullScreen
        />
      </div>
    </div>
  );
}
