import Col from 'react-bootstrap/Col';

const Content = ( { theme, playing, mobile, setTheme }) => {
    const opacity = playing ? 0.3 : 1
  return (
    <div style={{ fontSize: '16px', height: '100%', zIndex: '1', position: 'absolute'}}>
        <div className="container" style={{ padding: '30px' }}>
            <Col xs={7} md={3} lg={2} style={{ padding: 0}}>
                <img style={{ opacity: opacity, width: `${mobile ? '100%' : '100%'}` }} src={`/${theme ? 'black' : 'white'}-logo.svg`}></img>
            </Col>
            {/* Content */}
            <Col xs={12} md={6} lg={4} style={{ padding: 0, opacity: opacity }}>
                <p>We are a software development and services company for the oracle space. It connects API providers to blockchain applications through its software and service.</p>
                <p><a>GitHub</a></p>
                <p><a>hello@relayer.api</a></p>
            </Col>
            {mobile ? <a style={{ zIndex: 1, position: 'absolute', right: '20px', bottom: '20px'}} onClick={() => { setTheme(!theme)}}>{theme ? 'Light' : 'Dark'} mode</a>
                : <></> // if its not mobile it will be rendered in the game
            }
        </div>
    </div>
  )
}

export default Content
