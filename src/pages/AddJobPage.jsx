import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

function AddJobPage({ onAddJob }) {
  const navigate = useNavigate();

  function handleSave(newJob) {
    onAddJob(newJob);
    toast.success("Job added successfully");
    return navigate("/jobs");
  }

  return <JobForm onSave={handleSave} />;
}

export default AddJobPage;
