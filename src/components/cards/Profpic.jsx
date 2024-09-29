import { userDetail } from "../../utils/DataUsers";

const ProfilePicture = ({ data }) => {
  return (
      data.profile ?
      <img src={data.profile} alt="pic" className="img-fluid object-fit-cover" /> :
      <>
        <span className="d-flex justify-content-center align-items-center fs-3 fw-bold pb-1">
          {/* TODO inspect if akan ada .username yang kosong. sekarang adanya karena integrasi login yang belom beres */}
          {data.username? data.username[0] : '?'}
        </span>
      </>
  )
}

export default ProfilePicture;