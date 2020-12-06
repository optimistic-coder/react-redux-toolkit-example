import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, getReposSucess } from "../redux-toolkit/ApiSlice";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
export default function Api() {
  const dispatch = useDispatch();
  const { loading, hasErrors, repos } = useSelector(
    (state) => state.ApiSlice
  );

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts').then(res=>res.json()).then(res=>{
    dispatch(getReposSucess(res))
    })
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  } else  {

  return (
   <div >
     <center><h1>API with  redux toolkit</h1></center>
     {
        repos.all.map(cat=>{
          return(
            <Grid container key={cat._id} style={{alignSelf:'center',justifyContent:'center'}}>
          <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '85rem', height: '7rem' }}
      >
        <p style={{fontSize:'1rem',fontWeight:'bold'}}>{cat.text}</p>
      </Box>
    </Grid>
          )
        })
      }
   </div>
  );
  }
  
}