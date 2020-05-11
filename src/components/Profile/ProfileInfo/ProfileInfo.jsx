import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
       <img src="https://busfor-media-uploads.s3.amazonaws.com/BLOG/%D0%91%D0%91%3A%20%D0%92%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0%20%28%D0%94%D0%B0%D0%B2%D1%8B%D0%B4%D1%8E%D0%BA%29/35.jpg" /> 
      </div > */}
      <div className={styles.description}>
        <img src={props.profile.photos.large} />
        <img src={props.profile.photos.small} />
        <ProfileStatus
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
