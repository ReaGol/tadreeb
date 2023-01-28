import {CgSun} from 'react-icons/cg'
import {HiMoon} from 'react-icons/hi'
import {Page, Toggle, Container, Title} from './LandingPage.styles'

function landingPage(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark")
        } else {
            props.setTheme("light");
        }
    }
  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />; 
  return (
    <Page>
        <Container>
            <Toggle onClick={changeTheme}>
                {icon}
            </Toggle>
            <Title>Change Theme</Title>
        </Container>
    </Page>
  )
}

export default landingPage