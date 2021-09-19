import axios from "axios";

function App() {
  function auth() {
    const url = "https://api.thecodemesh.online/api/v1/enable/user-workflow/6146d058c0dc290012eb4d6d/" + window.location.search;
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      });
  }
  return (
    <div>
      <h1>Sync your customers</h1>
      <button id="myButton" className="float-left submit-button" onClick={auth}>Enable Workflow</button>
    </div>
  );
}

export default App;
