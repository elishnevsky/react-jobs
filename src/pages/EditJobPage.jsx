import { useLoaderData, useNavigate, Await } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

function EditJobPage({ onUpdateJob }) {
  const job = useLoaderData();

  const navigate = useNavigate();

  function handleSave(updatedJob) {
    updatedJob.id = job.id;
    onUpdateJob(updatedJob);
    toast.success("Job updated successfully");
    return navigate(`/jobs/${job.id}`);
  }

  return <JobForm job={job} onSave={handleSave} />;
}

export default EditJobPage;
