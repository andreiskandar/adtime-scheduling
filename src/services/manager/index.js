export default {
  list,
}

async function list() {
  const data = await fetch('manager')
  return data.json()
}
