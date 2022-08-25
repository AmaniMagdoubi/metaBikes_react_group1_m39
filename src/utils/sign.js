const signUp = async (userName, eMail, passWord, setter) => {
    try {
      const res = await fetch("https://metabikes-restapi.herokuapp.com/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          email: eMail,
          password: passWord,
        }),
      });
      const data = await res.json();
      console.log(data.newUser.username);
      setter(data.newUser.username);
    } catch (error) {
      console.log(error);
    }
  };

export default signUp;
