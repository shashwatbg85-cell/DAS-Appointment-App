import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { photos } from './GallaryData';

const GallaryPage = () => {
    const [index, setIndex] = useState(-1);

    return (
        <div className="gallery-section bg-light py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-primary mb-2">Our Gallery</h1>
                    <div className="mx-auto bg-primary rounded-pill mb-3" style={{ width: '80px', height: '4px' }}></div>
                    <p className="text-muted lead">A glimpse into our state-of-the-art facilities and compassionate care.</p>
                </div>

                <div className="gallery-grid shadow-lg bg-white p-3 rounded-4">
                    <RowsPhotoAlbum 
                        photos={photos} 
                        targetRowHeight={250} 
                        onClick={({ index: current }) => setIndex(current)}
                        componentsProps={{
                            imageProps: { className: "gallery-img rounded-3" }
                        }}
                    />
                </div>

                <div className="lightbox-wrapper">
                    <Lightbox 
                        index={index} 
                        slides={photos} 
                        open={index >= 0} 
                        close={() => setIndex(-1)} 
                    />
                </div>
            </div>

            <style>{`
                .gallery-section {
                    min-height: 80vh;
                    background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
                }
                .gallery-img {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    filter: brightness(0.95);
                }
                .gallery-img:hover {
                    transform: scale(1.03);
                    filter: brightness(1.1);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
                    z-index: 10;
                }
                .rounded-4 {
                    border-radius: 1.5rem !important;
                }
                .display-4 {
                    letter-spacing: -1px;
                }
                .gallery-grid {
                    border: 1px solid rgba(0,0,0,0.05);
                }
            `}</style>
        </div>
    );
};

export default GallaryPage;
