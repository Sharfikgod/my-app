import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.description}>
        <img src={props.profile.photos.large} />
        <img src={props.profile.photos.small} />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div>
        <span className={styles.namesz}>Name: {props.profile.fullName}</span>
        <span className={styles.namesz}>
          Description1: {props.profile.lookingForAJobDescription}
        </span>
        <span className={styles.namesz}>
          Description2: {props.profile.contacts.twitter}
        </span>
        <span className={styles.namesz}>AboutMe: {props.profile.aboutMe}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
