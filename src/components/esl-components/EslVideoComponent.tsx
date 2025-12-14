import React from "react";

type EslVideoComponent = {
  videoData: { title: string; description: string; cta?: string };
  videoId?: string;
};

function EslVideoComponent({ videoData, videoId }: EslVideoComponent) {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {/* <h2 className="text-xl font-semibold">Product Video</h2> */}
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
              {videoData.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 my-6">
              {videoData.description}
            </p>

            {videoData.cta && (
              <a
                href="/"
                className="inline-block mt-4 px-6 py-3 border-2 hover:bg-blue-700 border-blue-600 dark:border-white dark:hover:bg-white text-blue-600 dark:text-white hover:text-white dark:hover:text-black rounded-lg transition-all duration-300 min-w-[170px] cursor-pointer"
              >
                {videoData.cta}
              </a>
            )}
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <figure className="flex h-full w-full">
              <video autoPlay muted loop>
                <source src="/tag-video.mp4" type="video/mp4"></source>
              </video>
            </figure>
          </div>

            {/* YouTube embed */}
          {/* <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
            <iframe
              title={videoData.title}
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default EslVideoComponent;
