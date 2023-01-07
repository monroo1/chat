import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeCounty,
  changeDescription,
  changePhone,
  changeUserName,
} from "../store/profile";

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <div>{profile.name}</div>
      <div>{profile.username}</div>
      <div>{profile.phone}</div>
      <div>{profile.county}</div>
      <div>{profile.description}</div>
      <input
        value={profile.name}
        onChange={(e) => dispatch(changeName(e.target.value))}
      />
      <input
        value={profile.username}
        onChange={(e) => dispatch(changeUserName(e.target.value))}
      />
      <input
        value={profile.phone}
        onChange={(e) => dispatch(changePhone(e.target.value))}
      />
      <input
        value={profile.county}
        onChange={(e) => dispatch(changeCounty(e.target.value))}
      />
      <input
        value={profile.description}
        onChange={(e) => dispatch(changeDescription(e.target.value))}
      />
    </div>
  );
};
