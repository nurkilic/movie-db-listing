const VideoList = (data: any) => {
  const videos = data?.data?.results;

  

  const findTrailer = () => {
    if (!videos || videos.length === 0) {
      console.log("Video bulunamadı");
      return null;
    }
  
    let trailer = null;
  
    trailer = videos.find(
      (video: any) => video.name === "Official Trailer" || video.name.includes("Official Trailer")
    );
  
    if (!trailer) {
      trailer = videos.find((video: any) => video.name.toLowerCase().includes("trailer"));
    }
  
    if (!trailer) {
      trailer = videos.find((video: any) => video.official);
    }
  
    if (!trailer) {
      trailer = videos[0];
    }

    return trailer; 
  };

  const selectedTrailer = findTrailer(); 


  return (
    <div className="video-list mt-4 max-lg:w-full">
      {selectedTrailer && (
        <div key={selectedTrailer.id} className="video-item">
          <h3>{selectedTrailer.name}</h3>
          <iframe
            width="560"
            height="315"
            className="mt-2 iframe max-lg:w-full"
            src={`https://www.youtube.com/embed/${selectedTrailer.key}`}
            title={selectedTrailer.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Type: {selectedTrailer.type}</p>
          {selectedTrailer.official && <span>Official Video</span>}
        </div>
      )}
    </div>
  );
};

export default VideoList;
