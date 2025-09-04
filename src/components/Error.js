import { useRouteError } from "react-router-dom";
export const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div>
      <h1>Ooopss!</h1>
      <h3>{err.status}</h3>
    </div>
  )
}