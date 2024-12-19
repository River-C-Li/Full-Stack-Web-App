import React, { useState, useEffect } from 'react';

function ForumApi() {
  const [mydata, setmyData] = useState("");

  useEffect(() => {
    fetch('/myapi') // Replace with your API endpoint
      .then(response => response.json())
      .then(mydata => setmyData(mydata));
  }, []);


  return (
 
    <div>
      <h1>Data from the API:</h1>
      <div>
      {(typeof mydata.users === 'undefined')?(
        <p>Loading...</p>
      ):(
        mydata.users.map((user, i) =>(
          <p key={i}>  {user}</p>
        ))  
      )}
      </div>
    </div>
  );
}

export default ForumApi;