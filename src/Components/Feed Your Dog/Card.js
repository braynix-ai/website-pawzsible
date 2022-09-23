import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ backgroundColor: (props.bgcolor), borderRadius: '29px', fontFamily: 'Poppins', width: '70%', height: '40vh' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={props.img}
      />
    </Card>
  );
}