import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import { Container, Row, Col } from 'reactstrap'
import Typed from 'react-typed'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.roles = ['Developer', 'Tech Lover', 'Avid Reader', 'Designer', 'Illustrator', 'ReactJS', 'Data Science Enthusiast', 'Team Player']
  }

  render () {
    const { isAuthenticated, user } = this.props.auth
    return (
      <BaseLayout className='cover' {...this.props.auth} headerType='index'>
        <div className='main-section'>
          <div className='background-image'>
            <img src='/static/images/background-index.png' />
          </div>

          <Container>
            <Row>
              <Col md='6'>
                <div className='hero-section'>
                  <div className='flipper'>
                    <div className='back'>
                      <div className='hero-section-content'>
                        <h2> Full Stack Web Developer </h2>
                        <div className='hero-section-content-intro'>
                    Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className='image' src='/static/images/section-1.png' />
                      <div className='shadow-custom'>
                        <div className='shadow-inner'> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md='6' className='hero-welcome-wrapper'>
                <div className='hero-welcome-text'>
                  <h1>
                    Hola {isAuthenticated && <span> <b> {user.name} </b> </span>},<br />
                    Welcome to the portfolio website of <b>Elio Jordan Lopes</b>.<br /><br />
                    Get informed, collaborate and discover projects I work on!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className='self-typed'
                  cursorChar='|'
                />
                <div className='hero-welcome-bio'>
                  <h1>
              Have a look at my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>

    )
  }
}
export default Index
