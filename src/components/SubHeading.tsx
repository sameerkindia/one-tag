import React from "react";
import AnimationText from "./Animation-text";

type SubHeading = {
  headingText: string;
  firstIndex?: number;
  lastIndex: number;
  customHeadingClass? : string;
}

function SubHeading({
  headingText,
  firstIndex = 0,
  lastIndex,
  customHeadingClass=""
}: SubHeading) {
  return (
    <>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-3xl mx-auto mb-6 ${customHeadingClass}`}>
        <AnimationText>
          {headingText.split(" ").slice(firstIndex, lastIndex).join(" ")}{" "}
        </AnimationText>
        <span className="text-primary bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text">
          {headingText.split(" ").slice(lastIndex).join(" ")}
        </span>
      </h2>
    </>
  );
}

export default SubHeading;
