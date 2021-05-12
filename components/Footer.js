const Footer = () => {
  return (
    <div
      style={{ position: "absolute", bottom: 0, minHeight: "5rem" }}
      className="border-t mb-0 bg-white z-10 w-full bottom-0 py-5 text-sm text-gray-700"
    >
      <div className="container mx-auto">
        {/* <div className="py-2 text-center">
          Thanks for checking out my website. I built it with Next.js / React.js
          & TailwindCSS and deployed it via Vercel.
        </div> */}
        <div className="py-2 w-full lg:w-4/5 mx-auto flex flex-wrap ">
          <a href="mailto:dennis.antela@gmail.com" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            Email
          </a>
          <a href="https://www.linkedin.com/in/dennis-antela-martinez/" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            LinkedIn
          </a>
          <a href="https://github.com/aletna" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            GitHub
          </a>
          <a href="https://www.youtube.com/aletna" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            YouTube
          </a>
          <a href="https://www.instagram.com/aletna_music/" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            Instagram
          </a>
          <a href="https://soundcloud.com/aletna" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            SoundCloud
          </a>
          <a href="https://twitter.com/ALETNA_music" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            Twitter
          </a>
          <a href="https://open.spotify.com/artist/2ytZHEKgqMKhSHJHMXPbgT?si=qPgR0kCjQDG-IwJceK7inA" target="_blank" className="link text-gray-700 w-1/2 sm:w-1/4 md:w-1/8 text-center">
            Spotify
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
