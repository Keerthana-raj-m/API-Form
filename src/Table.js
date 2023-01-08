import React, { useEffect, useState } from "react";
import "./table.css";

export const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Dhoni",
      gender: "Male",
      password: "1234",
      sports: "Crickett",
    },
    {
      id: 2,
      name: "Dhoni",
      gender: "Male",
      password: "1234",
      sports: "Crickett",
    },
  ]);

  useEffect(() => {}, []);

  const handleChange = (id, e,type) => {
    
  };

  return (
    <div>
      <table>
        <tr>
          <td>Sl no</td>
          <td>Name</td>
          <td>Gender</td>
          <td>Password</td>
          <td>Sports</td>
        </tr>
        {data.map((d, i) => {
          return (
            <tr key={i}>
              <td>{d.id}</td>
              <td>
                <input
                  value={d.name}
                  onChange={(e) => {
                    handleChange(id=d.id, e, (type = "name"));
                  }}
                />
              </td>
              <td>
                <input value={d.gender} />
              </td>
              <td>
                <input value={d.password} />
              </td>
              <td>
                <input value={d.sports} />
              </td>
              <td>
                <buton style={{ backgroundColor: "green", padding: "5px" }}>
                  Edit
                </buton>
              </td>
              <td>
                <buton style={{ backgroundColor: "red", padding: "5px" }}>
                  Update
                </buton>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
