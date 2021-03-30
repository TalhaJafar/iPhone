import {useEffect} from 'react';
import './index.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import gsap from 'gsap'

// Images
import left from '../assets/images/left.png'
import right from '../assets/images/right.png'
import iPhone from '../assets/images/IPhone_12.png'

function Home() {

  useEffect(() => {

    gsap.from('.main img', {duration:2 , opacity:0.1});
    gsap.from('.main div', {duration:2 , y: 50 , opacity:0});
    gsap.from('.main h6', {duration:2 , y: -50 , opacity:0});

    gsap.from('.big_news', {duration:2 , x: -100 , opacity:0});
    gsap.from('.mini_news', {duration:2 , x: 100 , opacity:0});

  }, [])

  return (
    <Container fluid className="main_container">
      <Row className="sub_container align-items-center">
        <Col className="news_col m-0 p-0">
          <div className="news_container">
            <div className="big_news d-flex flex-column justify-content-end align-items-center">
                <h4>Big News.</h4>
                <br/>
                <p>iPhone 12 <br/> 6.1" screen <br/> xDR display</p>
                <img src={left} alt="" width="80%"/>
            </div>
          </div>
        </Col>

        <Col className=" main d-flex flex-column justify-content-center align-items-center col-7 ">
          <div className="d-flex flex-column justify-content-end align-items-center">
            <h4>IPhone 12</h4>
            <h2>Blast Past Fast</h2>
          </div>
          
          <br/>
          <img src={iPhone} alt="" width="90%" height="70%"/>
          <br/>
          <h6>From $29.01/mo. or $699 before trade in.</h6>
        </Col>

        <Col className="news_col m-0 p-0">
          <div className="news_container">
            <div className="mini_news d-flex flex-column justify-content-end align-items-center">
              <h4>Mini News.</h4>
              <br/>
              <p>iPhone 12 <br/> 5.7" screen <br/> xDR display</p>
              <img src={right} alt="" width="73%"/>
            </div>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Home;
