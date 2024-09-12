import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  async function jobLoader({ params }) {
    try {
      // api proxy is set in vite.config.js
      const response = await fetch(`/api/jobs/${params.id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddJob(newJob) {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  }

  async function handleUpdateJob(updatedJob) {
    const response = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
  }

  async function handleDeleteJob(id) {
    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  }

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
