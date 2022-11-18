import React from 'react';
import Word from './Word.js';
import {Button, Container} from '@material-ui/core';
import useStyle from './allWordsStyles.js';
import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Words = () => {
  const classes = useStyle();

  let [words, setWords] = useState([]);

  const sendRequest = async () => {
    const res = await axios
        .get(`${process.env.REACT_APP_BASEURL}/api/word/words`)
        .catch((err) => console.log(err));
    
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data)=> setWords(data.words));
  }, []);

  return (
    <>
    
    <Typography className={classes.title} variant='h2' >WORDS OF THE WEEKS</Typography>
    
    <Container className={classes.wordsHolder}>
      {
        words && words.map((Dict)=>{
          return(
            <Word word={Dict.word} meaning={Dict.meaning} type={Dict.type} sentence={Dict.sentence} syn={Dict.synonyms} ant={Dict.antonyms} pron={Dict.pronunciation} />
          )
        })
        
      }
      
    </Container>
    </>
  )
}

export default Words