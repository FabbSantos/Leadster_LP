import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import videosData from '../videos.json';
import { Play } from './Play';
import { Download } from './Download';

// Definir o tipo para os vídeos
type Video = {
    id: string;
    thumb: string;
    title: string;
    tag: string
    description: string;
    data: string
};
type ButtonProps = {
    active: boolean
}
type PaginationNumberProps = {
    active: boolean
}

// Definir o número de vídeos por página
const videosPerPage = 9;



const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [page, setPage] = useState(1);
    const tags = ["Agencias", "Chatbot", "Marketing Digital", "Geração de Leads", "Midia Paga"];
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [selectedTag, setSelectedTag] = useState("");
    const [isButtonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        setVideos(videosData);
    }, []);

    // Função para comparar as datas
    const compareDates = (videoA: Video, videoB: Video) => {
        const dateA = new Date(videoA.data).valueOf();
        const dateB = new Date(videoB.data).valueOf();

        return dateB - dateA;  // sort by descending order (newest first)
    }
    const compareDates2 = (videoA: Video, videoB: Video) => {
        const dateA = new Date(videoA.data).valueOf();
        const dateB = new Date(videoB.data).valueOf();

        return dateA - dateB ;  // sort by descending order (newest first)
    }
    const handleSortChange = (event: { target: { value: any; }; }) => {
        const sortType = event.target.value;

        if (sortType === 'Data de Publicação') {
            setVideos(prevVideos => [...prevVideos].sort(compareDates));
        }
        if (sortType === 'Data de Publicação2') {
            setVideos(prevVideos => [...prevVideos].sort(compareDates2));
        }
    }
    const filteredVideos = selectedTag === "" ? videos : videos.filter(video => video.tag === selectedTag);
    const pageCount = Math.ceil(filteredVideos.length / videosPerPage);
    const pageNumbers = [...Array(pageCount).keys()].map(i => i + 1);

    // Função para obter os vídeos da página atual
    function getCurrentPageVideos() {
        const startIndex = (page - 1) * videosPerPage;
        return filteredVideos.slice(startIndex, startIndex + videosPerPage);

        // return sortedVideos = sortedVideos.sort(compareDates);
    }

    function handleTagClick(tag: string) {
        setSelectedTag(currentTag => currentTag === tag ? "" : tag);
        setButtonClicked(currentState => !currentState);
    }


    // Renderização do componente
    return (
        <>
            <TagContainer>
                {tags.map(tag => (
                    <TagButton
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        active={selectedTag === tag}
                    >
                        {tag}
                    </TagButton>
                ))}

                <SelectContainer>
                    <ParagraphSelect> Ordenar por </ParagraphSelect>
                    <Select onChange={handleSortChange}>
                        <option value="Data de Publicação">Data de Publicação  ▼</option>
                        <option value="Data de Publicação2">Data de Publicação  ▲</option>
                    </Select>
                </SelectContainer>
            </TagContainer>

            <SectionVideos>
                {getCurrentPageVideos().map(video => (
                    <VideoContainer key={video.id} onClick={() => setSelectedVideo(video)}>
                        <VideoOverlay>
                            <Overlay></Overlay>
                            <Play />
                            <ImageThumb src={video.thumb} alt={video.title} loading='lazy'  width={336} height={188}/>
                        </VideoOverlay>
                        <VideoHeading>{video.title}</VideoHeading>
                    </VideoContainer>
                ))}
                <PaginationContainer>
                    {pageNumbers.map(number => (
                        <PaginationNumber
                            key={number}
                            onClick={() => setPage(number)}
                            active={page === number}
                        >
                            {number}
                        </PaginationNumber>
                    ))}
                </PaginationContainer>

                {selectedVideo && (
                    <Modal>
                        <ModalContent>
                            <Close onClick={() => setSelectedVideo(null)}>&times;</Close>
                            <ModalHeading><ModalSpan>Webinar:</ModalSpan>{selectedVideo.title}</ModalHeading>
                            <iframe
                                width="100%"
                                height="340"
                                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                                title={selectedVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading='lazy'
                            ></iframe>
                            <ContainerDD>
                                <ModalDD>Descrição</ModalDD>
                                <Paragraph>{selectedVideo.description}</Paragraph>
                            </ContainerDD>

                            <ContainerDD>
                                <ModalDD>Downloads</ModalDD>

                                <ContainerAllButtons>

                                    <ContainerButtonDownload>
                                        <ContainerDownloadSpread> <Download /> </ContainerDownloadSpread>
                                        <SpreadsheetButton href="#" download>Spreadsheet.xls</SpreadsheetButton>
                                    </ContainerButtonDownload>

                                    <ContainerButtonDownload>
                                        <ContainerDownloadDocx> <Download /> </ContainerDownloadDocx>
                                        <DocxButton href="#" download>Document.doc</DocxButton>
                                    </ContainerButtonDownload>

                                    <ContainerButtonDownload>
                                        <ContainerDownloadPpt> <Download /> </ContainerDownloadPpt>
                                        <PptButton href="#" download>Presentation.ppt</PptButton>
                                    </ContainerButtonDownload>

                                </ContainerAllButtons>


                            </ContainerDD>
                        </ModalContent>
                        <ContainerAllButtons2>

                            <ContainerButtonDownload>
                                <ContainerDownloadSpread> <Download /> </ContainerDownloadSpread>
                                <SpreadsheetButton href="#" download>Spreadsheet.xls</SpreadsheetButton>
                            </ContainerButtonDownload>

                            <ContainerButtonDownload>
                                <ContainerDownloadDocx> <Download /> </ContainerDownloadDocx>
                                <DocxButton href="#" download>Document.doc</DocxButton>
                            </ContainerButtonDownload>

                            <ContainerButtonDownload>
                                <ContainerDownloadPpt> <Download /> </ContainerDownloadPpt>
                                <PptButton href="#" download>Presentation.ppt</PptButton>
                            </ContainerButtonDownload>

                            <ContainerButtonDownload>
                                <ContainerDownloadZip> <Download /> </ContainerDownloadZip>
                                <ZipButton href="#" download>Folder.zip</ZipButton>
                            </ContainerButtonDownload>

                        </ContainerAllButtons2>
                    </Modal>
                )}
            </SectionVideos>
        </>
    );

};

export default VideoList;


const SectionVideos = styled.section`
    border-bottom: 1px solid #c8d4dd;
    border-top: 1px solid #c8d4dd;
    position: relative;
    display: flex;

    margin: 0 auto;
    flex-direction: column;
    padding: 5%;
    margin-bottom: 8rem;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    @media (min-width:768px){
         flex-direction: row;
        max-width: 70%;
        padding: 6rem 2rem 2rem 2rem;
    }
`
const TagContainer = styled.div`
    display: flex;
    margin: 3% 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
    align-items: center;
`
const TagButton = styled.button<ButtonProps>`
    outline: none;
    background: none;
    border: ${(props) => (props.active ? 'none' : '1px solid #000')};
    background-color: ${(props) => (props.active ? '#007dff' : 'transparent')};
    border-radius: 30px;
    font-family: inherit;
    color: ${(props) => (props.active ? '#fff' : '#000')};
    padding: 5px 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        border-color: #007dff;
        color: ${(props) => (props.active ? '#fff' : '#007dff')}
    }
`

const VideoHeading = styled.h3`
    font-weight: 700;
    font-size: 1rem;
    text-align: left;
    padding: .9rem 1.4rem;
    transition: color .3s ease;
`
const ImageThumb = styled.img`
    max-width: 100%;
    max-height: 100%;
`
const Paragraph = styled.p`
    font-weight: 500;
    font-size: 1rem;
    text-align: left;
    padding: .9rem 0rem;
    transition: color .3s ease;
`
const Overlay = styled.div`
    background-color: #44b9fe;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease;
`
const VideoOverlay = styled.div`
    width: auto;
    height: auto;
    position: relative;
    
    &:hover > ${Overlay} {
        opacity: 0.5;
    }
    &:hover > svg{
        opacity: 1;
    }
`
const VideoContainer = styled.div`
    position: relative;
    margin-bottom: 15px;
    box-shadow: 0 10px 30px 0 rgba(12, 0, 46, .1);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    
    @media (min-width:768px){
        flex-basis: calc(33.33% - 10px);
        max-width: 26%;
    }
    &:hover > ${VideoHeading} {
        color: #007dff;
    }
    & > img {
        width: 100%;
    }

`
const ModalContent = styled.div`
    position: relative;
    margin: 3% auto;
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid #888;
    max-width: 35%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
`
const Modal = styled.div`
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`
const Close = styled.button`
    background: none;
    position: absolute;
    right: 3%;
    top: 3%;
    z-index: 10;
    cursor: pointer;
    outline: none;
    color: #2c3e50;
    border: none;
    font-size: 2rem;
`
const ModalHeading = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    text-align: left;
    padding: 2rem 5rem; 
`
const ModalSpan = styled.span`
    color: #007dff;
    margin-right: .4ch;
`
const ModalDD = styled.h4`
    font-size: 1.1rem;
    padding: .8rem 0 .4rem 0;
    border-bottom: 1px solid #c8d4dd;
`
const ContainerDD = styled.div`
    margin: 0 auto;
    width: 95%;
`
const PaginationNumber = styled.button<PaginationNumberProps>`
    background: none;
    outline: none;
    color: ${(props) => (props.active ? '#007dff' : '#2c3e50')};
    border: none;
    font-size: 1.3rem;
    padding: 5px;
    cursor: pointer;
    transition: color .3s ease;

    &:hover,
    &:focus{
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
    bottom: -8%;
    left: 50%;
    transform: translateX(-50%);
`
const Button = styled.a`
    display: inline-block;
    padding: 10px 10px;
    color: white;
    text-decoration: none;
    margin: 10px 0 10px -4px;
    border-radius: 0px 5px 5px 0;
    transition: all .5s ease;

    &:hover {
        filter: contrast(90%);
    }
`;
const ContainerButtonDownload = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2px;
`
const ContainerDownloadSpread = styled.div`
    padding: 12px 10px;
    border-radius: 5px 0 0 5px;
    display: grid;
    place-items: center;
    background-color: #9fefdf;
    & > svg {
        fill: #00ae7f;
    }
`
const SpreadsheetButton = styled(Button)`
    background-color: #c2f4ea;
    color: #00ae7f;
`;

const ContainerDownloadDocx = styled.div`
    padding: 12px 10px;
    border-radius: 5px 0 0 5px;
    display: grid;
    place-items: center;
    background-color: #a1d9ff;
    & > svg {
        fill: #279bf1;
    }
`
const DocxButton = styled(Button)`
    background-color: #c2e6ff;
    color: #279bf1;

`;

const ContainerDownloadPpt = styled.div`
    padding: 12px 10px;
    border-radius: 5px 0 0 5px;
    display: grid;
    place-items: center;
    background-color: #fff1a0;
    & > svg {
        fill: #b09c53;
    }
`

const PptButton = styled(Button)`
    background-color: #fff8d0;
    color: #b09c53;

`;

const ContainerDownloadZip = styled.div`
    padding: 12px 10px;
    border-radius: 5px 0 0 5px;
    display: grid;
    place-items: center;
    background-color: #d0dee7;
    & > svg {
        fill: #8f979f;
    }
`
const ZipButton = styled(Button)`
    background-color: #e8eef3;
    color: #8f979f;

`;

const ContainerAllButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
`
const ContainerAllButtons2 = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #fff;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: .1rem;
    padding: 1rem;
`
const Select = styled.select`
  width: min-content;
  height: 40px;
  margin: 20px;
  background: white;
  color: black;
  padding: 5px 20px;
  font-size: .8rem;
  font-family: inherit;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 10px;
  -webkit-appearance: none !important;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
  }
`
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width:768px){
    margin-left: 4rem;
  }
`
const ParagraphSelect = styled.p`
    font-weight: 600;
    font-size: 1rem;
    text-align: left;
    padding: .9rem 0rem;
    transition: color .3s ease;
`