import React from "react";

const RoundIcon = ({
  icon,
  position,
}: {
  icon: React.ReactElement;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-7 w-7 animate-shimmer items-center justify-center rounded-full border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors md:mt-10">
      {position === "center" &&
        React.cloneElement(icon, {
          className: "h-full w-full rounded-full", // Ensure the icon fills the space and is circular
        })}
    </button>
  );
};

export default RoundIcon;
