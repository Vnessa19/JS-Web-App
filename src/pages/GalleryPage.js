import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/Time-Comparision-Bubble-Sort-and-Insert-Sort.png',
      thumbnail: 'images/Time-Comparision-Bubble-Sort-and-Insert-Sort.png',
      description: `Graph of Time Comparison Between Bubble Sort and Insert Sort (2022)`,
      originalHeight: '450px',
    },
    {
      original: 'images/Multiple-Personailities-Disorder-Brochure.png',
      thumbnail: 'images/Multiple-Personailities-Disorder-Brochure.png',
      description: `Multiple Personalities Disorder Education Brochure (2016)`,
      originalHeight: '450px',
    },
    {
        original: 'images/Guadalajara-Cathedral-Guadalajara-Mexico.jpg',
        thumbnail: 'images/Guadalajara-Cathedral-Guadalajara-Mexico.jpg',
        description: `Guadalajara Cathedral in Guadalajara, Mexico (2019)`,
        originalHeight: '450px',
      },
      {
        original: 'images/Edema-and-Prosthesis-Management-Brochure.png',
        thumbnail: 'images/Edema-and-Prosthesis-Management-Brochure.png',
        description: `Edema and Prosthesis Management Brochure (2016)`,
        originalHeight: '450px',
      },
      {
        original: 'images/Splinting-for-Hands-Brochure.png',
        thumbnail: 'images/Splinting-for-Hands-Brochure.png',
        description: `Splinting for Rheumatoid Arthritis and Osteoarthritis of 
        Hands Education Brochure (2016)`,
        originalHeight: '450px',
      },
      {
        original: 'images/Flying-Man-PuertoVallarta-Mexico.jpg',
        thumbnail: 'images/Flying-Man-PuertoVallarta-Mexico.jpg',
        description: `Flying Men in Puerto Vallarta, Mexico(2022)`,
        originalHeight: '450px',
      },
      {
        original: 'images/LArc-de-Triomphe-Wrapped-Paris.jpg',
        thumbnail: 'images/LArc-de-Triomphe-Wrapped-Paris.jpg',
        description: `L'Arc de Triomphe, Wrapped, in Paris, France(2021)`,
        originalHeight: '450px',
      },
      {
        original: 'images/Sainte-Chapelle-Paris.jpg',
        thumbnail: 'images/Sainte-Chapelle-Paris.jpg',
        description: `Sainte Chapelle in Paris, France(2021)`,
        originalHeight: '450px',
      },
      {
        original: 'images/The-Abduction-of-Proserpina-Versailles-France.jpg',
        thumbnail: 'images/The-Abduction-of-Proserpina-Versailles-France.jpg',
        description: `The Abduction of Proserpina sculpture in Versailles, France (2021)`,
        originalHeight: '450px',
      },
      {
        original: 'images/Three-Bells-of-Fira-Santorini-Greece.jpg',
        thumbnail: 'images/Three-Bells-of-Fira-Santorini-Greece.jpg',
        description: `Three Bells of Fira in Santorini, Greece (2021)`,
        originalHeight: '450px',
      },
]

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <article>
            <p>Snippets of some projects of my previous career and some of my favorite traveling memory.</p>
            
            <ImageGallery items={images} />

            </article>
        </>
    );
}
export default GalleryPage;
