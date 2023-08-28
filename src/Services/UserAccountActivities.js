import endPoint from "./EndPoints";
const userEndPoint = `${endPoint}users/`;
export async function userSignUp(userObj, setLoading, setSuccess, setError) {
  const { userName, password } = userObj;
  const payLoad = {
    userName,
    password,
  };
  try {
    setLoading(true);
    const res = await fetch(`${userEndPoint}signup`, {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "Success") {
      window.localStorage.setItem("token", data.token);
      setSuccess(true);
    } else {
      setSuccess(false);
      setError(data);
    }
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
}
