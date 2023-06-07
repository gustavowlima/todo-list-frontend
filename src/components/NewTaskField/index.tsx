import { ReactComponent as TaskIcon } from "../../assets/task.svg";
import { TitleWrapper } from "../TitleWrapper";

export const NewTaskField = () => {
  return (
    <div className="flex w-full gap-6 flex-col">
      <TitleWrapper icon={<TaskIcon />} title="Adicionar uma tarefa" />

      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Descreva a tarefa"
          className="bg-whiteColor border-gray200Color border-2 rounded-2xl flex-1 h-[56px] px-4 text-base outline-none"
        />

        <button className="bg-greenColor py-4 px-8 rounded-2xl font-normal cursor-pointer text-whiteColor hover:bg-greenHoverColor transition-colors">
          Criar tarefa
        </button>
      </div>
    </div>
  );
};
