import React from "react";

const Userlist = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-titl">
          <h2>UserList</h2>
        </div>
        <div className="crad-body">
          <table className="table tacle-bordered">
            <thread className="bg-dark text-white">
              <tr>
                <td>SL No</td>
                <td>Name</td>
                <td>Phone Number</td>
                <td>Email Id</td>
                <td>Action</td>
              </tr>
            </thread>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
