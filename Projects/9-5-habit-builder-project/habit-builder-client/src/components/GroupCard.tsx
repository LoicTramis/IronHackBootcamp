import DescriptionIcon from "./icons/DescriptionIcon";
import GroupIcon from "./icons/GroupIcon";
import HabitIcon from "./icons/HabitIcon";
import JoinIcon from "./icons/JoinIcon";
import UserIcon from "./icons/UserIcon";

const GroupCard = ({ name, description, admin, habits, members }) => {
  return (
    <li className="flex h-fit w-full basis-1/3 flex-col items-start justify-around gap-3 rounded-xl border-2 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-950">
      <h3 className="flex flex-row items-center text-lg font-bold text-neutral-950 dark:text-neutral-200">{name}</h3>
      <article className="text-left">
        <p>{description}</p>
      </article>
      <p className="flex items-center justify-start gap-2 px-4 py-2 text-[#707070]">
        <HabitIcon />
        Habits: {habits.length}
      </p>
      <p className="flex items-center justify-start gap-2 px-4 py-2 text-[#707070]">
        <GroupIcon />
        Members: {members.length}
      </p>

      <article className="flex w-full items-center justify-between">
        <section className="flex">
          <p className="px-2 py-1">Made by {admin.username}</p>
          <div className="rounded-full border-2 border-[#f6f6f6] bg-red-300 p-1 text-red-400">
            <UserIcon stroke="#f87171" fill="#f87171" />
          </div>
        </section>

        <section>
          <button id="join" className="mr-3 flex gap-1 rounded border border-sky-500 bg-sky-50 px-3 py-1">
            <p className="font-bold text-sky-600">Visit</p>
            <JoinIcon color="#0369a1" />
          </button>
        </section>
      </article>
    </li>
  );
};

export default GroupCard;
