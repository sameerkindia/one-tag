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
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 mt-2">
              {videoData.description}
            </p>

            {videoData.cta && (
              <a
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md"
              >
                {videoData.cta}
              </a>
            )}
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
            {/* YouTube embed */}
            <iframe
              title={videoData.title}
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EslVideoComponent;
