import React from "react";
import { BaseComponentProps } from "../../types/BaseComponent";
import { joinClasses } from "../../util/ClassNames";

type trackProps = BaseComponentProps & {
  artist: string;
  album: string;
  songUrl: string;
  title: string;
  id: string;
};

const Track: React.FC<trackProps> = ({
  artist,
  album,
  songUrl,
  title,
  className,
}) => {
  return (
    <li
      className={joinClasses(className, 'flex border-2 m-2 p-2 rounded')}
    >
      <div className={"flex flex-col w-full sm:w-3/4"}>
        <div className={"font-bold"}>
          <a href={songUrl} target="_blank" rel="noopener noreferrer" className="text-highlight underline">
            {title}
          </a>
        </div>
        <div className={"italic"}>{artist}</div>
      </div>
      <div
        className={
          "hidden md:flex flex-col items-end font-bold italic w-1/4 text-right"
        }
      >
        {album}
      </div>
    </li>
  );
};

export default Track;
