import axios from 'axios';
import React, { useState, useEffect } from 'react';

function FetchTest()
{
  const backendApi = "/api";
  // const backendApi = "http://localhost:8080";
  const [data, setData] = useState();

  useEffect(() =>
  {
    axios.get(`${backendApi}/profiles`)
      .then((response) =>
      {
        setData(response.data);
      })
      .catch((e) =>
      {
        console.error("Fetch error:", e);
      });
  }, [data]);

if (!data) return <p>Loading...</p>;

  return (
    <>
      <h3>Fetch Test</h3>
      {data && data.length > 0 ? (
        <>
          <h3>{data[0].description}</h3>
          <h3>{data[0].skillsHave}</h3>
          <h3>{data[0].softwaresUsed}</h3>
          <h3>{data[0].jobRole}</h3>
          <h3>{data[0].roleResponsibility}</h3>
          <h3>{data[0].officeVenue}</h3>
          <h3>{data[0].masteryLevel}</h3>
          <h3>{data[0].workingExperience}</h3>
          <h3>{data[0].joinedDate}</h3>
          <h3>{data[0].companyName}</h3>
          <h3>{data[0].projects}</h3>
          <h3>{data[0].projectReference}</h3>
        </>
      ) : (
        <p>You should comeback again! There's no data at this time.</p>
      )}
    </>
  );
}

export default FetchTest;
