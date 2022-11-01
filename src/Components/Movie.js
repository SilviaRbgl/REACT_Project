import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Movie({movie}) {
  return (
    <div>
      <Card className="Movie">
      <CardMedia
        component="img"
        img src={movie.image}
        alt="poster of a movie"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {movie.title}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">More</Button>
      </CardActions>
    </Card>
          
    </div>
  )
}

export default Movie