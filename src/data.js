export async function jobLoader({ params }) {
  try {
    // api proxy is set in vite.config.js
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function handleAddJob(newJob) {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
}

export async function handleUpdateJob(updatedJob) {
  await fetch(`/api/jobs/${updatedJob.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedJob),
  });
}

export async function handleDeleteJob(id) {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
}