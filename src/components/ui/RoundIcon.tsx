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
    <button className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border-slate-800 font-medium text-slate-400 transition-colors md:mt-10">
      {position === "center" &&
        React.cloneElement(icon, {
          className: "h-full w-full rounded-full", // Ensure the icon fills the space and is circular
        })}
    </button>
  );
};

export default RoundIcon;
