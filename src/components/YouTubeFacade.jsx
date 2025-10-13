import { useState } from 'react';

export default function YouTubeFacade({ videoId, title, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ border: 0 }}
      />
    );
  }

  return (
    <div 
      className={`${className} relative cursor-pointer group overflow-hidden rounded-lg`}
      onClick={handleClick}
      style={{ aspectRatio: '16/9' }}
    >
      {/* Thumbnail image - Critical for LCP, load immediately */}
      <img
        src="/images/youtube-video-preview-256.webp"
        srcSet="/images/youtube-video-preview-256.webp 256w, /images/youtube-video-preview-512.webp 512w, /images/youtube-video-preview-1024.webp 1024w"
        sizes="(max-width: 480px) 256px, (max-width: 768px) 512px, 560px"
        alt="Virtual violin lesson preview - Jenny and Johnny Peña teaching"
        className="w-full h-full object-cover"
        width="256"
        height="144"
        style={{ aspectRatio: '16/9' }}
        fetchPriority="high"
      />
      
      {/* Play button overlay - centered but not covering entire image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg pointer-events-auto">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      
      {/* Click to load text */}
      <div className="absolute top-3 right-3 text-white text-xs bg-black bg-opacity-60 px-2 py-1 rounded">
        Click to play
      </div>
    </div>
  );
}