import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import videosData from '../videos.json';

// Definir o tipo para os vídeos
type Video = {
    id: string;
    thumb: string;
    title: string;
    description: string;
};

// Definir o número de vídeos por página
const videosPerPage = 9;

// Array de números de 1 a 4
const pageNumbers = [1, 2, 3, 4];

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [page, setPage] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    useEffect(() => {
        setVideos(videosData);
    }, []);

    // Função para obter os vídeos da página atual
    function getCurrentPageVideos() {
        const startIndex = (page - 1) * videosPerPage;
        return videos.slice(startIndex, startIndex + videosPerPage);
    }

    // Renderização do componente
    return (
        <SectionVideos>
            {getCurrentPageVideos().map(video => (
                <VideoContainer key={video.id} onClick={() => setSelectedVideo(video)}>
                    <img src={video.thumb} alt={video.title} />
                    <p>{video.title}</p>
                </VideoContainer>
            ))}
            <PaginationContainer>
                {pageNumbers.map(number => (
                    <PaginationNumber
                        key={number}
                        onClick={() => setPage(number)}
                        disabled={page === number}
                    >
                        {number}
                    </PaginationNumber>
                ))}
            </PaginationContainer>
            {selectedVideo && (
                <Modal>
                    <ModalContent>
                        <div onClick={() => setSelectedVideo(null)}>Close</div>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </ModalContent>
                </Modal>
            )}
        </SectionVideos>
    );

};

export default VideoList;


const SectionVideos = styled.section`
    position: relative;
    display: flex;
    max-width: 80%;
    margin: 0 auto;
    flex-direction: row;
    padding: 5rem 2rem;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Modal = styled.div`
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`
const VideoContainer = styled.div`
    flex-basis: calc(33.33% - 10px);
    max-width: 30%;
    margin-bottom: 15px;
    box-shadow: 0 10px 30px 0 rgba(12, 0, 46, .1);
    border-radius: 20px;
    overflow: hidden;
`
const ModalContent = styled.div`
    position: relative;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;
`
const PaginationNumber = styled.button`
    background: none;
    outline: none;
    color: #2c3e50;
    border: none;
    font-size: 1.3rem;
    padding: 5px;
    cursor: pointer;

    &:hover, 
    &:focus,
    &:active, 
    &:visited {
        color: #007dff;
    }
`
const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
`