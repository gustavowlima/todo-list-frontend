import { ReactComponent as NotCheckIcon } from "../../assets/Frame.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";

export const TasksBoards = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[72px] w-full items-center rounded-2xl bg-whiteColor">
        <span className="flex items-center justify-center p-7">
          <NotCheckIcon />
        </span>
        <p className="flex flex-1 items-center justify-start text-base font-bold">
          Reunião com cliente 📒
        </p>
        <span className="flex items-center justify-center p-7">
          <RemoveIcon />
        </span>
      </div>
    </div>
  );
};
