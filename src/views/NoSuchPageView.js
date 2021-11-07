import { Redirect } from "react-router-dom";

export default function NoSuchPageView() {
  return (
    <>
      <p>404 Page does not exist</p>
      <Redirect to={"/"} />
    </>
  );
}
