import { NewTaskField } from "../../components/NewTaskField";
import { TitleWrapper } from "../../components/TitleWrapper";
import { ReactComponent as BoardIcon } from "../../assets/board.svg";

import { TasksBoards } from "../../components/TasksBoard";

export const Home = () => {
  return (
    <main className="flex h-screen w-screen justify-center bg-gray100Color">
      <div className="h-full w-full max-w-[640px] flex-col space-y-16 pt-16">
        <NewTaskField />

        <div className="flex w-full flex-col gap-6">
          <TitleWrapper icon={<BoardIcon />} title="Quadro de tarefas" />

          <TasksBoards />
        </div>
      </div>
    </main>
  );
};
