import React from 'react';
import { Card, Grid, Typography, Box, CardMedia, CardContent } from '@mui/material';
import Hibiscus from '../src/assets/Hibiscus.jpeg';
import Rose from '../src/assets/Rose.jpeg';
import Jasmine from '../src/assets/Jasmine.jpeg';
import Lilly from '../src/assets/lilly.jpeg';

const plant = [
    { name: 'Hibiscus', color: 'Red', scientificName: 'Hibiscus rosa-sinensis', imageUrl: Hibiscus },
    { name: 'Rose', color: 'Red', scientificName: 'sinensis', imageUrl: Rose },
    { name: 'Jasmine', color: 'White', scientificName: 'sinensis', imageUrl: Jasmine },
    { name: 'Lilly', color: 'White', scientificName: 'sinensis', imageUrl: Lilly },
    
];

export default function PlantInfo({ searchTerms }) {
    const filteredPlants = plant.filter((plant) =>
        plant.name.toLowerCase().includes(searchTerms.toLowerCase())
    );

    return (
        <Box padding="15px">
            {filteredPlants.length > 0 ? (
                <Grid container spacing={2}>
                    {filteredPlants.map((plant, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    image={plant.imageUrl}
                                    alt={plant.name}
                                    sx={{ height: 140, objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant='h5' color='Blue'>
                                        {plant.name}
                                    </Typography>
                                    <Typography variant='body1'>Color: {plant.color}</Typography>
                                    <Typography variant='body1'>Scientific Name: {plant.scientificName}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant='h6' color='textSecondary'>
                    No plants found matching "{searchTerms}"
                </Typography>
            )}
        </Box>
    );
}
