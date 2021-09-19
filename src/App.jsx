import axios from "axios";

function App() {
  function auth() {
    const url = "https://api.thecodemesh.online/api/v1/enable/user-workflow/61472d28c0dc290012eb5017/" + window.location.search;
    axios.get(url)
      .then(function (response) {

        // handle success
        console.log("success in auth : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error in auth : ", error);
      });
  }
  function enableWorkFlow() {
    const enableURL = "https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/61472d28c0dc290012eb5017/" + window.location.search;
    axios.get(enableURL)
      .then(function (response) {

        // handle success
        console.log("success in enableWorkFlow : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error in enableWorkFlow : ", error);
      });
  }
  function runSyncWorkFlow() {
    const runURL = "https://api.thecodemesh.online/api/v1/trigger/user-workflow/61472d28c0dc290012eb5017";
    axios.get(runURL)
      .then(function (response) {

        // handle success
        console.log("success in sync : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error in sync : ", error);
      });
  }
  return (
    <div>
      <h1>Sync your customers</h1>
      <button id="myButton" className="float-left submit-button" onClick={auth}>Auth</button>
      <button id="myButton" className="float-left submit-button" onClick={enableWorkFlow}>Enable Workflow</button>
      <button id="myButton" className="float-left submit-button" onClick={runSyncWorkFlow}>Force Run Workflow</button>
    </div>
  );
}

export default App;
