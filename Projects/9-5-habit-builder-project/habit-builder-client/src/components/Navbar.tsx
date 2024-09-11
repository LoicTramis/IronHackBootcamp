import React, { useContext, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextWrapper";
import { BuilderContext } from "../context/BuilderContextWrapper";
import { Habit } from "../types/Habit";
import { Group } from "../types/Group";
import { User } from "../types/User";
import LoginIcon from "./icons/LoginIcon";
import LogoutIcon from "./icons/LogoutIcon";
import AddIcon from "./icons/AddIcon";
import HomeIcon from "./icons/HomeIcon";
import HabitIcon from "./icons/HabitIcon";
import GroupIcon from "./icons/GroupIcon";
import Modal from "./Modal";
import LightModeIcon from "./icons/LightModeIcon";
import DarkModeIcon from "./icons/DarkModeIcon";

const Navbar = () => {
  const [showPage, setShowPage] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { habits, groups } = useContext(BuilderContext);
  const authenticateUser = useContext(AuthContext);
  const navigate = useNavigate();
  const modal = useRef(null);

  ////                         ////
  // *         HANDLES         * //
  ////                         ////
  const handleCreateHabit = () => {
    if (!authenticateUser.isLoggedIn) {
      // display message for log in
      return;
    }
    navigate("/createHabit");
  };
  const handleCreateGroup = () => {
    if (!authenticateUser.isLoggedIn) {
      // display message for log in
      return;
    }
    navigate("/createGroup");
  };
  const handleShowModal = (e: React.MouseEvent) => {
    e.preventDefault();
    modal.current.showModal();
  };
  const handleDisconnet = () => {
    authenticateUser.disconnect();
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };
  ////                     ////
  // *         JSX         * //
  ////                     ////
  const authUserJSX = () => {
    return authenticateUser.isLoggedIn ? (
      <>
        <p>{authenticateUser.user.username}</p>
        <button className="flex justify-between dark:text-neutral-200" id="profile" onClick={handleDisconnet}>
          <LogoutIcon />
        </button>
      </>
    ) : (
      <button
        className="flex w-full justify-between rounded-lg border-[1px] border-transparent px-2 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300"
        id="login"
        onClick={handleShowModal}>
        <p>Log in / Sign up</p>
        <LoginIcon />
      </button>
    );
  };
  const habitsJSX = () => {
    if (!habits)
      return (
        <li className="sub-element pl-2 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <em className="italic">There is no habit.</em>
        </li>
      );

    const filteredHabits = habits.filter(
      (habit: Habit) =>
        habit.creator.username === authenticateUser.user.username ||
        habit.members.some((member: User) => member.username === authenticateUser.user.username),
    );

    if (filteredHabits.length === 0) {
      return (
        <li className="sub-element pl-2 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <em className="italic">You have no habit.</em>
        </li>
      );
    }
    return filteredHabits.map((habit: Habit) => (
      <li
        key={habit._id}
        className="sub-element flex gap-2 px-1 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
        <NavLink
          to={`/habits/${habit._id}`}
          className="flex w-full gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm">
          <HabitIcon />
          {habit.title}
        </NavLink>
      </li>
    ));
  };
  const groupsJSX = () => {
    if (!groups) return;
    if (groups.length === 0) {
      return (
        <li className="sub-element pl-2 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <em className="italic">You have no group.</em>
        </li>
      );
    }
    const filteredGroups = groups.filter(
      (group: Group) =>
        group.admin.username === authenticateUser.user.username ||
        group.members.some((member: User) => member.username === authenticateUser.user.username),
    );
    return filteredGroups.map((group: Group) => (
      <li
        key={group._id}
        className="sub-element flex gap-2 px-1 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
        <NavLink
          to={`/habits/${group._id}`}
          className="flex w-full gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm">
          <GroupIcon />
          {group.name}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav>
      <Modal modal={modal} showPage={showPage} setShowPage={setShowPage} />

      <ul className="element">
        <li className="sub-title flex w-full justify-between dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          {authUserJSX()}
        </li>
      </ul>

      <ul className="element">
        <li className="sub-title dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <NavLink
            to="/"
            className="flex w-full items-center gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm">
            <HomeIcon />
            Home
          </NavLink>
        </li>
        <li className="sub-title dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <button
            onClick={handleDarkMode}
            className="flex w-full items-center gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm">
            {isDarkMode ? (
              <>
                <LightModeIcon />
                Light Mode
              </>
            ) : (
              <>
                <DarkModeIcon />
                Dark Mode
              </>
            )}
          </button>
        </li>
      </ul>

      <ul className="element">
        <li className="sub-title">Discover</li>
        <li className="sub-element dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <NavLink
            to="/habits"
            className="flex w-full gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm">
            <HabitIcon />
            Habits
          </NavLink>
        </li>
        <li className="sub-element dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
          <NavLink
            to="/groups"
            className="flex w-full gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] hover:border-[1px] hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-sm">
            <GroupIcon />
            Groups
          </NavLink>
        </li>
      </ul>

      {authenticateUser.isLoggedIn && (
        <>
          <ul className="element">
            <li className="sub-title dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
              <NavLink to="/habits/in">My habits</NavLink>
            </li>
            {/* LIST OF HABITS HERE */}
            {habitsJSX()}
            <li className="sub-element dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
              <button
                className="flex w-full gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] text-green-600 hover:border-[1px] hover:border-green-400 hover:bg-neutral-50 hover:shadow-sm"
                onClick={handleCreateHabit}>
                <AddIcon />
                Add a habit
              </button>
            </li>
          </ul>

          <ul className="element">
            <li className="sub-title dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
              <NavLink to="/groups/in">My groups</NavLink>
            </li>
            {/* LIST OF GROUPS HERE */}
            {groupsJSX()}
            <li className="sub-element dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:hover:text-neutral-300">
              <button
                className="flex w-full gap-2 rounded-lg border-[1px] border-transparent px-1 py-[0.3rem] text-green-600 hover:border-[1px] hover:border-green-400 hover:bg-neutral-50 hover:shadow-sm"
                onClick={handleCreateGroup}>
                <AddIcon />
                Add a group
              </button>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
