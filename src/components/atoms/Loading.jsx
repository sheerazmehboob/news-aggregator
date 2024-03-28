import React from "react";

const Loading = () => {
  return (
    <div class="grid h-[250px] w-full place-content-center">
      <div class="flex items-center gap-2 text-gray-500">
        <span class="w-6 h-6 xs:h-12 xs:w-12 block rounded-full border-4 border-t-blue-500 animate-spin"></span>
        loading...
      </div>
    </div>
  );
};

export default Loading;
