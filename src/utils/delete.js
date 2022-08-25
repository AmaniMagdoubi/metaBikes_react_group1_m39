const deleteuser = async (setter, username) => {
    try {
      const res = await fetch("https://metabikes-restapi.herokuapp.com/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
        }),
      });
      const data = await res.json();
      console.log(data);
      setter(data);
    } catch (error) {
      console.log(error);
    }
  };

  export default deleteuser;
  