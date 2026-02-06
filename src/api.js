export async function getVans() {
  const res = await fetch("/api/vans");
  //check for the sad path,
  // must be handled in the page you are using this funciton in
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
