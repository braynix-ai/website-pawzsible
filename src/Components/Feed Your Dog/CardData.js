
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background:'black' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:'black' }}
        onClick={onClick}
      />
    );
  }





export const  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1204,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



export const data =[
    {
        bgcolor:"#FFF0E3",
       
        img:"../Assests/My project.png",
        title:'Chew Bones',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFEBEB",
        img:"../Assests/Dog Training.png",
        title:'Natural Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#E9FFFD",
        img:"../Assests/My project.png",
        title:'Training Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#EBECF0" ,
        img:"../Assests/Dog Training.png",
        title:'Natural Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFF0E3",
       
        img:"../Assests/My project.png",
        title:'Chew Bones',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFEBEB",
        img:"../Assests/Dog Training.png",
        title:'Natural Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#E9FFFD",
        img:"../Assests/My project.png",
        title:'Training Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#EBECF0" ,
        img:"../Assests/Dog Training.png",
        title:'Natural Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFEBEB",
        img:"../Assests/My project.png",
        title:'Dental Treats',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFEBEB",
        img:"../Assests/My project.png",
        title:'Treat Bones',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFEBEB",
        img:"../Assests/My project.png",
        title:'Chew Bones',
        desc:"Starting at ₹99* "
    },
    {
        bgcolor:"#FFEBEB",
        img:"../Assests/My project.png",
        title:'Chew Bones',
        desc:"Starting at ₹99* "
    },
]
 