function App() {
  function auth() {
    window.location.href = "https://api.thecodemesh.online/api/v1/enable/user-workflow/6142e48cfdc3e80012907106/?" + window.location.search;
  }
  return (
    <div>
      <h1>Sync your customers</h1>
      <button id="myButton" className="float-left submit-button" onClick={auth}>Enable Workflow</button>
    </div>
  );
}

export default App;
