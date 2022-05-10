import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function HaveARead({item}) {
  return (
    <Box sx={{ minWidth: 275 }} className='main-read-div'>
        <h1>HAVE A READ</h1>
        {
            item.map((item)=>{
                return(
      <Card variant="outlined" style={{width:'75vw',marginLeft:'10px',borderRadius:'20px',marginTop:'120px'}} >
      
      <CardContent>
      
      <Typography variant="h4" component="div" style={{fontWeight:'bold', marginTop:'20px'}}>
        {item.mainhead}
      </Typography>
      
      <Typography variant="p" component='div' style={{marginTop:'20px', fontSize:'1.3rem',fontWeight:'500'}}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo nobis optio laudantium dolorem! Nisi culpa fugiat tempora corrupti omnis placeat natus quisquam eius magnam temporibus, perspiciatis minima impedit necessitatibus.
       Ullam cum nam velit doloremque neque fuga nostrum pariatur numquam obcaecati, fugiat totam quae maiores voluptatem. Quis totam maxime suscipit consectetur fugiat iusto cumque provident, illum quod in nisi repellat!
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'end'}}>
      <Button style={{fontSize:'1.5rem',fontWeight:'bold', textAlign:'right'}}>Read More <ArrowForwardIosIcon style={{marginLeft:'20px'}}/></Button>
    </CardActions>

      </Card>
      )
    })
        }
    </Box>
  );
}
