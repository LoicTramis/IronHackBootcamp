import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import HomePage from "./pages/HomePage";
import HabitsPage from "./pages/HabitsPage";
import HabitDetailPage from "./pages/HabitDetailPage.tsx";
import HabitUserPage from "./pages/HabitUserPage.tsx";
import HabitCreatePage from "./pages/HabitCreatePage";
import GroupsPage from "./pages/GroupsPage";
import GroupPage from "./pages/GroupPage";
import GroupUserPage from "./pages/GroupUserPage.tsx";
import GroupCreatePage from "./pages/GroupCreatePage";
import { useState } from "react";

// ? For improvement
// https://blog.logrocket.com/building-react-modal-module-with-react-router/

function App() {
  /**
   * Put a Route wrapper between the routes and use Outlet
   */
  return (
    <>
      <Aside />

      <Routes>
        {/* HOME ROUTE */}
        <Route path="/" element={<HomePage />} />

        {/* HABITS ROUTE */}
        <Route path="/habits">
          <Route index element={<HabitsPage />} />
          <Route path="in" element={<HabitUserPage />} />
          <Route path=":habitId" element={<HabitDetailPage />} />
        </Route>
        <Route path="/createHabit" element={<HabitCreatePage />} />

        {/* GROUPS ROUTE */}
        <Route path="/groups">
          <Route index element={<GroupsPage />} />
          <Route path="in" element={<GroupUserPage />} />
          <Route path=":groupId" element={<GroupPage />} />
        </Route>
        <Route path="/createGroup" element={<GroupCreatePage />} />
      </Routes>
    </>
  );
}

export default App;
