// import React, { useContext, useEffect } from "react";

// import { Context } from "../context/contextApi";
// import LeftNav from "./LeftNav";
// import Video from "./Video";

// const Feed = () => {
//     const { loading, searchResults } = useContext(Context);

//     useEffect(() => {
//         document.getElementById("root").classList.remove("custom-h");
//     }, []);

//     return (
//         <div className="flex flex-row h-[calc(100%-56px)]">
//             <LeftNav />
//             <div className="grow w-[calc(100%-240px)] h-screen overflow-y-auto bg-black">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
//                     {!loading &&
//                         searchResults.map((item) => {
//                             if (item.type !== "video") return false;
//                             return (
//                                 <Video
//                                     key={item?.video?.videoId}
//                                     video={item?.video}
//                                 />
//                             );
//                         })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Feed;
import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import Video from "./Video";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-screen">
      <LeftNav />
      <div className="flex-1 overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {!loading &&
            searchResults &&
            searchResults?.map((item) => {
              if (item?.type !== "video") return null;
              return <Video key={item?.video?.videoId} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
