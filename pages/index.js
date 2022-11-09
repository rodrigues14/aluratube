import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";



function HomePage() {
  const estilosDaHomePage = { 
    //backgroundColor: "red" 
  };

const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  /* console.log(config.playlists); */

  return (
    <>
      
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        {/* <Banner /> */}
        {/* Drop Drilling */}
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <TimeLine 
          searchValue={valorDoFiltro}
          playlists={config.playlists}>Conteúdo
        </TimeLine>
      </div>
    
    </>
  );
}

export default HomePage;

/* function Menu() {
  return <div>Menu</div>;
} */

const StyledHeader = styled.div`
    margin-top: 56px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color: black;
  background-image: url(${({banner}) => banner});
  height: 340px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner banner={config.banner}/>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({searchValue, ...props}) {
  /* console.log("Dentro do componente", props.playlists); */
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        //console.log(playlistName);
        //console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();

                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
