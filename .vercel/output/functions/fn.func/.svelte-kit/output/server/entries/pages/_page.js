const load = async ({ fetch }) => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return {
    jobs: data
  };
};
export {
  load
};
