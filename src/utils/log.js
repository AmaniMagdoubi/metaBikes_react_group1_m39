const login = async (userName, eMail, passWord, setter) => {
    try {
      const res = await fetch("https://metabikes-restapi.herokuapp.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          email: eMail,
          password: passWord,
        }),
      });
      const data = await res.json();
      console.log(data.user);
      setter(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };

export default login;
