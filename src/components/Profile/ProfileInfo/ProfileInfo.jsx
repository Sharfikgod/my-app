import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.description}>
        <img src={profile.photos.large} />
        <img src={profile.photos.small} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div>
        <span className={styles.namesz}>Name: {profile.fullName}</span>
        <span className={styles.namesz}>
          Description1: {profile.lookingForAJobDescription}
        </span>
        <span className={styles.namesz}>
          Description2: {profile.contacts.twitter}
        </span>
        <span className={styles.namesz}>AboutMe: {profile.aboutMe}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
