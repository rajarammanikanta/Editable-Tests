import {Component} from 'react'

import {
  MainContainer,
  EditContainer,
  InputAndButtonContainer,
  MainHeading,
  InputElement,
  ButtonElement,
  ParaContainer,
} from './styledComponents'

import './App.css'

class App extends Component {
  state = {isSave: true, inputText: ' '}

  renderInputText = () => {
    const {inputText} = this.state
    return (
      <div>
        <InputElement type="text" value={inputText} onChange={this.getText} />
      </div>
    )
  }

  renderParagraph = () => {
    const {inputText} = this.state
    return (
      <ParaContainer>
        <p value={inputText}>{inputText}</p>
      </ParaContainer>
    )
  }

  clickToSave = () => {
    this.setState(preState => ({isSave: !preState.isSave}))
  }

  getText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isSave} = this.state
    const ButtonText = isSave ? 'Save' : 'Edit'
    return (
      <MainContainer>
        <EditContainer>
          <MainHeading>Editable Text Input</MainHeading>
          <InputAndButtonContainer>
            {isSave ? this.renderInputText() : this.renderParagraph()}
            <ButtonElement type="button" onClick={this.clickToSave}>
              {ButtonText}
            </ButtonElement>
          </InputAndButtonContainer>
        </EditContainer>
      </MainContainer>
    )
  }
}

export default App
