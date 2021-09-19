import axios from "axios";

function App() {
  function auth() {
    const url = "https://api.thecodemesh.online/api/v1/enable/user-workflow/61473d7ac0dc290012eb507d/" + window.location.search;
    axios.get(url)
      .then(function (response) {

        // handle success
        console.log("success in auth : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error in auth : ", error);
        if (error.code === 400) {
          axios.get(error.message.authStatus.value)
            .then(function (response) {

              // handle success
              console.log("success in auth : ", response);
            })
        }
      });
  }
  function enableWorkFlow() {
    const params = new URLSearchParams(window.location.search)
    const enableURL = "https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/61473d7ac0dc290012eb507d/?username=" + params.get('shop');
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
    const runURL = "https://api.thecodemesh.online/api/v1/trigger/user-workflow/61473d7ac0dc290012eb507d";
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
  //  authenticate as soon as opened
  auth();
  return (
    <div>
      <h1>Sync your customers</h1>
      <button id="myButton" className="float-left submit-button" onClick={enableWorkFlow}>Enable Workflow</button>
      <button id="myButton" className="float-left submit-button" onClick={runSyncWorkFlow}>Force Run Workflow</button>
    </div>
  );
}

export default App;
