function App() {
  function auth() {
    window.location.href = "https://api.thecodemesh.online/api/v1/enable/user-workflow/61459b2dc0dc290012eb4c6b/" + window.location.search;
  }
  return (
    <div>
      <h1>Sync your customers</h1>
      <button id="myButton" className="float-left submit-button" onClick={auth}>Enable Workflow</button>
    </div>
  );
}

export default App;
