import styles from '../styles/Menu.module.scss'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import Button from './Button';
import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 16,
    color: '#142C56',
    lineHeight: '20px'
  },
}));


export default function Menu({isMenuOpen, menu, lang, translateLink}) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.opened : ''}`}>
      <div className={styles.menu__wrapper}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{menu[0].title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <a href={menu[1].url}>{menu[1].title}</a>
                </li>
                {/* <li>
                  <a href={menu[2].url}>{menu[2].title}</a>
                </li> */}
                <li>
                  <a href={menu[3].url}>{menu[3].title}</a>
                </li>
                <li>
                  <a href={menu[4].url}>{menu[4].title}</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>{menu[5].title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <a href={menu[6].url}>{menu[6].title}</a>
                </li>
                <li>
                  <a href={menu[7].url}>{menu[7].title}</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>{menu[8].title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <a href={menu[9].url}>{menu[9].title}</a>
                </li>
                <li>
                  <a href={menu[10].url}>{menu[10].title}</a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <a href={menu[11].url}>{menu[11].title}</a>
          <a href={translateLink} className={styles.header__lang}>{lang === 'ru' ? "Uk" : "Ru"}</a>
          <Button onClick={() => setOpen(true)} text={lang === 'ru' ? "Консультация" : "Консультація"}/>
          <p className={styles.developedBy}>Developed by <a href="https://zigzag.team" target="_blank" rel="noopener">ZIGZAG</a></p>
      </div>
      <Modal open={open} setOpen={setOpen} title={lang === 'ru' ? "Оставьте заявку" : "Залиште заявку"} name={true} phone={true} lang={lang} />
    </div>
  )
}