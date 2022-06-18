import styles from '../styles/VideoBlock.module.scss'
import Popup from "./Popup";
import {useState} from "react";

export default function VideoBlock({title, image, video, paddingBottom}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.video} style={{paddingBottom: paddingBottom}} uk-scrollspy="cls: uk-animation-slide-bottom-medium">
      <div className="container">
        <h2 dangerouslySetInnerHTML={{__html: title}} />

        <div className={styles.video__preview}>
          <img
            alt="" 
            src="/images/icons/play.png"
            className={styles.video__play}
            onClick={() => setOpen(true)}
          />
          <img alt="" src={image} className={styles.video__image} />
        </div>

        <img alt="" src="/images/mainPage/video-decor.png" className={styles.video__decor} />
      </div>
      <Popup open={open} setOpen={setOpen} video={video} />
    </div>
  )
}