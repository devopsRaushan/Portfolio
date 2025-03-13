function FetchTest() {
    fetch("http://localhost:8080/games", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
      })
      .catch((e) => {
        console.error("Fetch error:", e);
      });
  
    return (
      <>
        <h3>Fetch Test</h3>
      </>
    );
  }
  
  export default FetchTest;
  