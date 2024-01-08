import { render, screen } from '@testing-library/react'
import App from './App'
import LoginForm from './components/Topics/LoginForm'

test('renders App in the document', () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello !!!!!!!!!!!!/i)
  expect(linkElement).toBeInTheDocument()
})

test('reder login Form ',()=>{
  // const component = render(<LoginForm/>);
  // const childElement = component.getByLabelText("Email")
  const {getByLabelText} = render(<LoginForm/>);
  const childElement = getByLabelText("Email")
  expect(childElement).toBeInTheDocument();
})
