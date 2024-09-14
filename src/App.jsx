import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { jobLoader, handleAddJob, handleUpdateJob, handleDeleteJob } from "./data";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route
          path="jobs/:id"
          element={<JobPage onDeleteJob={handleDeleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="jobs/:id/edit"
          element={<EditJobPage onUpdateJob={handleUpdateJob} />}
          loader={jobLoader}
        />
        <Route
          path="jobs/add"
          element={<AddJobPage onAddJob={handleAddJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
