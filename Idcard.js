import React from 'react';

import photo from './images/pp.jpg';

function Idcard(props) {
  const { studentId, name, branch } = props;

  return (
    <div className="id-card">
      <form>
        <table align="center" border="0" cellSpacing="0">
          <tr>
            <td align="center" style={{ color: "red" }}><b><h2> KONERU LAKSHMAIAH UNIVERSITY</h2></b></td>
          </tr>
          <tr>
            <td align="center"><b><h4> IDENTITY CARD</h4></b></td>
          </tr>
          <tr>
            <td align="center"><img src={photo} width="200" height="300" alt=" " /></td>
          </tr>
          <tr>
            <td><br /></td>
          </tr>
          <tr>
            <td align="center"><b>student id: {studentId}</b></td>
          </tr>
          <tr>
            <td><br /></td>
          </tr>
          <tr>
            <td align="center"><b>name: {name}</b></td>
          </tr>
          <tr>
            <td><br /></td>
          </tr>
          <tr>
            <td align="center"><b>branch: {branch}</b></td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Idcard;
