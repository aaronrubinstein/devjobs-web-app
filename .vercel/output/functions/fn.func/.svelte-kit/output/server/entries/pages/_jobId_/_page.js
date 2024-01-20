const load = async ({ fetch, params }) => {
  const response = await fetch("/data.json");
  const data = await response.json();
  const job = data.filter((job2) => job2.id == params.jobId);
  return { job };
};
export {
  load
};
