export const load = async ({ fetch }) => {
    const response = await fetch('/src/data.json');
    const data = await response.json();

    return {
        jobs: data
    }
}