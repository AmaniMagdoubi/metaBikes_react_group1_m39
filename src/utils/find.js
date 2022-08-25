const findusers = async (setter) => {
    try {
      const res = await fetch("https://metabikes-restapi.herokuapp.com/list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data.allUsers);
      setter(data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };

export default findusers;
  