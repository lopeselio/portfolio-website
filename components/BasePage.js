import { Container } from 'reactstrap'

const BasePage = (props) => {
  return (
    <div className='base-page'>
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

export default BasePage
