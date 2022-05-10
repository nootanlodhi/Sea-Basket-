import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='faqs-main-div'>
      <Accordion style={{borderRadius:'20px', marginTop:'10px', width:'75vw'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='container-faqs'
        >
          <Typography style={{fontSize:'1.5rem', fontWeight:'bold'}}>Velit venenatis pretium mattis cosectetur massa pretium mattis ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'1.5rem'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel est quis harum in ad quo dolorem voluptate ullam nam, repudiandae numquam ipsum velit maiores qui rem vitae, adipisci, earum odit.
            Nemo laborum accusamus optio pariatur praesentium cupiditate iure et, eveniet veniam ipsum officiis dolore assumenda exercitationem sunt rerum laboriosam labore nulla iste, tempora voluptas eum, delectus voluptatum! Ipsam, dolorem quasi!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
