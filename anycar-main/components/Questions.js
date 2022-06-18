import styles from '../styles/Questions.module.scss'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Typography} from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {useState} from "react";

export default function Questions({paddingBottom, title, data}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.questions} style={{paddingBottom: paddingBottom}} >
      <img alt="" style={{top: "50px", left: 0}} className="decor" src="/images/bg-decor/3.png" />
      <img alt="" style={{width: "250px", top: "250px", left: "80%"}} className="decor" src="/images/bg-decor/3.png" />
      <div className="container" uk-scrollspy="cls: uk-animation-fade">
        <h2 dangerouslySetInnerHTML={{__html: title}} />
        {data.map(el => (
          <Accordion className={styles.questions__accordion} key={data.indexOf(el)} expanded={expanded === data.indexOf(el)} onChange={handleChange(data.indexOf(el))}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${data.indexOf(el) + 1}a-content`}
              id={`panel${data.indexOf(el) + 1}a-header`}
            >
              <Typography>{el.post_title}</Typography>
            </AccordionSummary>
            <AccordionDetails dangerouslySetInnerHTML={{__html: el.post_content}} />
          </Accordion>
        ))}
      </div>
    </div>
  )
}