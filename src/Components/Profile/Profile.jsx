import React from "react";
import propTypes from 'prop-types'
// import imgProfile from './Img/DSC_0394.JPG'

const Profile = (props) => {
  console.log(props)
  // console.log(props);o
  
  // const {fullName, bio, profession, handelName}=data
  // console.log(fullName, bio, profession, handelName)

  return (
    <div>
      {props.children}
      {/* <p>
        <strong> Full Name : </strong> {data.fullName} <br />
        <strong> Bio : </strong> {data.bio} <br />
        <strong> Profession : </strong> {data.profession}
      </p>
      <button onClick={() => handelName(data.fullName)}> Click me </button> */}
    </div>
  );
};
Profile.defaultProps = {
data:{
  fullName:'......',
bio:'def.',
profession:'........'
},
children:"data:image/png;base64,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"
}
// Profile.propTypes={
// fullName : propTypes.string,
// bio : propTypes.number,
// profession : propTypes.string,
// handelName : propTypes.bool
// }
export default Profile;
