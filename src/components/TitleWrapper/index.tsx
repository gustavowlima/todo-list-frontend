import { TitleWrapperProps } from "./types";

export const TitleWrapper = ({ icon, title }: TitleWrapperProps) => {
  return (
    <div className="flex w-full gap-5">
      {icon}
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
};
