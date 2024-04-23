import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordian = () => {

    const dummyData = [
        {
          title: "Lorem Ipsum Reborn",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum ligula eu metus gravida, non euismod lorem fermentum."
        },
        {
          title: "New Dolor Sit Amet",
          description: "Sed cursus magna eget nisi tincidunt, ac rutrum nisi malesuada. Nam accumsan magna sed orci tincidunt, in varius odio sagittis."
        },
        {
          title: "Consectetur Adipiscing Redux",
          description: "Praesent non eros in enim accumsan consequat. Ut quis sapien nec purus aliquam malesuada in at libero."
        },
        {
          title: "Sed Eget Massa 2.0",
          description: "Etiam sit amet risus eget ligula facilisis sollicitudin. In quis mi nec neque gravida pharetra nec ac lorem."
        },
        {
          title: "Nulla Facilisi Revamped",
          description: "Nulla facilisi. Nam sagittis velit in enim elementum, vel fermentum justo lacinia. Cras interdum sapien non fermentum vestibulum."
        }
      ];
  return (
    <div>
      
      {
        dummyData.map((data) => (
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography>{data.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {data.description}
                </Typography>
                </AccordionDetails>
            </Accordion>
        ))
      }
    </div>
  );
}
export default Accordian