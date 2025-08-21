export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p><strong>Name:</strong> Your Name</p>
      <p><strong>Student Number:</strong> 12345678</p>
      <p>This is a demonstration of my LTU Assignment 1 project.</p>
      <p>Below is the instructional video showing how to use the site:</p>

      <div style={{ maxWidth:560 }}>
        {/* Replace YOUR_VIDEO_ID with the YouTube video ID after uploading your recording */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="How to use this site" allowFullScreen/>
      </div>
    </div>
  );
}
