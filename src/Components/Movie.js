import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Movie({ movie }) {
  return (
    <div >
      <Card >
        <CardMedia
          component="img"
          src={movie.image}
          alt="poster of a movie"
        />
        <CardContent>
          <Typography variant="h6" component="div" align="center">
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="info"
            endIcon={<KeyboardArrowRightRoundedIcon />}
            onClick={() => console.log("you clicked button")}
          >More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Movie;
