const updateuser = async (
    userName,
    old_password,
    new_userName,
    email,
    password,
    setter
  ) => {
    try {
      const res = await fetch("https://metabikes-restapi.herokuapp.com/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: old_password,
          new_username: new_userName,
          new_email: email,
          new_password: password,
        }),
      });
      const data = await res.json();
      console.log(data.userUpdate);
      setter(data.userUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  export default updateuser;