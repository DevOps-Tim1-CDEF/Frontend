import { userDetail } from "../../utils/DataUsers";

const ProfilePicture = ({ data }) => {
  return (
    userDetail(data).profile? 
      <img src={userDetail(data).profile} alt="pic" className="img-fluid object-fit-cover" /> : <>
        <span className="d-flex justify-content-center align-items-center fs-3 fw-bold pb-1">
          {userDetail(data).username[0]}
        </span>
      </>
  )
}

export default ProfilePicture;