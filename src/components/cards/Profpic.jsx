import { userDetail } from "../../utils/DataUsers";

const ProfilePicture = ({ data }) => {
  return (
      data.profile ?
      <img src={data.profile} alt="pic" className="img-fluid object-fit-cover" /> :
      <>
        <span className="d-flex justify-content-center align-items-center fs-3 fw-bold pb-1">
          {data.username[0]}
        </span>
      </>
  )
}

export default ProfilePicture;