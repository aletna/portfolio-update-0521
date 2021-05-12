const Footer = () => {
  return (
    <div
      style={{ position: "absolute", bottom: 0, minHeight: "5rem" }}
      className="border-t mb-0 z-10 w-full bottom-0 py-5 text-sm text-gray-700"
    >
      <div className="container mx-auto">
        {/* <div className="py-2 text-center">
          Thanks for checking out my website. I built it with Next.js / React.js
          & TailwindCSS and deployed it via Vercel.
        </div> */}
        <div className="py-2 flex justify-between ">
          <a href="mailto:dennis.antela@gmail.com" target="_blank" className="link text-gray-700">
            Email
          </a>
          <a href="https://www.linkedin.com/in/dennis-antela-martinez/" target="_blank" className="link text-gray-700">
            LinkedIn
          </a>
          <a href="https://github.com/aletna" target="_blank" className="link text-gray-700">
            GitHub
          </a>
          <a href="https://www.youtube.com/aletna" target="_blank" className="link text-gray-700">
            YouTube
          </a>
          <a href="https://www.instagram.com/aletna_music/" target="_blank" className="link text-gray-700">
            Instagram
          </a>
          <a href="https://soundcloud.com/aletna" target="_blank" className="link text-gray-700">
            SoundCloud
          </a>
          <a href="https://twitter.com/ALETNA_music" target="_blank" className="link text-gray-700">
            Twitter
          </a>
          <a href="https://open.spotify.com/artist/2ytZHEKgqMKhSHJHMXPbgT?si=qPgR0kCjQDG-IwJceK7inA" target="_blank" className="link text-gray-700">
            Spotify
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
