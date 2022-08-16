import React from 'react';
import { usePokemons } from '../services/pokemons/use-pokemons';
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';

const Home = () => {
  const { pokemons, status } = usePokemons();
  console.log(pokemons);
  return (
    <div>
      {status === 'loading' ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <Grid
            container
            columnGap={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent='center'
          >
            {pokemons.map((pokemon) => {
              return (
                <Card
                  sx={{ maxWidth: 345, margin: '1rem 0' }}
                  key={pokemon.url}
                >
                  <CardMedia
                    component='img'
                    height='140'
                    image={pokemon.sprites.front_shiny}
                    alt='green iguana'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {pokemon.name}
                    </Typography>
                    <ul>
                      {pokemon.abilities.map((item) => {
                        return (
                          <li style={{ marginLeft: '1rem' }}>
                            {item.ability.name}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Home;
