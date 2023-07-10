import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import {useState} from 'react'
import classes from './Faqs.module.scss'

type Props = {
  title:string,
  text:string
}

export const FaqsItem = ({ title, text }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  
  return (
      <div className={`${classes.item} ${isActive ? classes.active : ''}`}>
          <div className={`${classes.title} ${isActive ? classes.active : ''}`}  onClick={() => setIsActive(!isActive)}>
              <p>{title}</p>
              <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className={`${classes.info} ${isActive ? classes.active  : ''}`}>
              <p>{text}</p>
          </div>
      </div>
  )
}
