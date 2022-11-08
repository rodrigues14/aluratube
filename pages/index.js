import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


const StyledBanner = styled.header`
  margin-top: 56px;
  text-align: center;
  background-color: #000;
  height: 230px;
  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
`;

function Banner() {
  return (
    <StyledBanner>
      <img src={config.banner} alt="Banner principal" />
    </StyledBanner>
  )
}

function HomePage() {
  const estilosDaHomePage = { 
    //backgroundColor: "red" 
  };

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
        <Banner />
        <Menu />
        <Header />
        <TimeLine 
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

function Header() {
  return (
    <StyledHeader>
      {/* <img src="" /> */}
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

function TimeLine(props) {
  /* console.log("Dentro do componente", props.playlists); */
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        //console.log(playlistName);
        //console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
