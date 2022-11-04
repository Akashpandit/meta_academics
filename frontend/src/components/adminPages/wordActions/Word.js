import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, CardActionArea } from '@mui/material';
import Image from './public_Speaking.png';
import useStyle from './wordStyles.js';

const Word = (props) => {
  const classes = useStyle();
  // const bull = (
  //   <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}> • </Box>
  // )
  return (

    <Card className={classes.card} sx ={{minWidth: 275}}>
      <CardActionArea>
      <CardMedia
          className={classes.image}
          component="img"
          height="140"
          image={Image}
          alt="green iguana"
        />
      
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {props.word}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.pron}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.type}
        </Typography>
        <Typography variant="body2">
          {props.meaning}
          <br />
          SENTENCE: {props.sentence}
        </Typography>
        <Typography variant="body2">
          SYNONYMS: {props.syn}
        </Typography>
        <Typography variant="body2">
          ANTONYMS: {props.ant}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default Word;