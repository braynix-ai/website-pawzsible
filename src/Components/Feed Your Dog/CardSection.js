import React from 'react';
import Slider from "react-slick";
import Card from './Card';
import { data, settings } from './CardData';

// card section

const CardSection = () => {

  return (
    // <>
    <Slider {...settings}>
      {/* card */}
      {data.map((value, index) => (
        <div key={index}>
          <Card title={value.title} description={value.desc} img={value.img} bgcolor={value.bgcolor}>
            {/* <CardActionArea>
      
       <CardContent>
         <Typography sx={{width:'40%',fontFamily:"Poppins",fontWeight:"bolder"}}>
          {value.title}
         </Typography>
         <Typography variant="body2" color="text.secondary" sx={{width:'80px',fontFamily:"Poppins",fontWeight:'300px'}}>
        {value.desc}
         </Typography>
        
       </CardContent> 
       <CardMedia
       component="img"
       sx={{ width: 151,marginLeft:"10%"}}
       image={value.img} 
      
     />
     </CardActionArea>  */}
          </Card>
        </div>
      ))}
    </Slider>
  )
}

export default CardSection



// sx={{margin:'30px',padding:'100px',display:"flex",justifyContent:'space-around',fontFamily:'Poppins'}}