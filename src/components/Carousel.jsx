import React from 'react';
import Carousel from 'react-material-ui-carousel'
import  Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box';
import bg from '../img/escheresque-dark.png';
import scv from '../img/scvnjrny_logo_stacked.svg'

function ProjectCarousel(props)
{
    var items = [
        {
            name: "ScavenJourney",
            description: "Probably the most random thing you have ever seen!",
            image: <img src={scv} alt='' width='100px' height='auto' />
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: <img src='' alt='' />
        }
    ]

    return (
        <Carousel justifyContent='center' alignContent='center' alignItems='center' >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
      <Box justifyContent='center' alignContent='center' alignItems='center' display='flex' height='400px' >
        <Card justifyContent='center' alignItems='center' elevation={24} raised={true} sx={{shadowOpacity: 50, background: 'transparent', borderRadius: '16px' }}>
          <CardMedia image={bg}  justifyContent='center' alignItems='center'>
            <CardContent justifyContent='center' alignContent='center' alignItems='center' >
            <h2>{props.item.name}</h2>
            {props.item.image}
            <p>{props.item.description}</p>

              <Button className="CheckButton">
                Check it out!
              </Button>
            </CardContent>
          </CardMedia>
        </Card>
      </Box>
    )
}
export default ProjectCarousel