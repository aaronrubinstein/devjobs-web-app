export const load = async ({ fetch, params }) => {
    const response = await fetch('/src/data.json');
    const data = await response.json();
    const job = data.filter(job => job.id == params.jobId);

    return { job };
}