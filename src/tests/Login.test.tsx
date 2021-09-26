import Login from '../pages/Home/Login'
import {screen} from '@testing-library/react'
import {shallow} from 'enzyme'
import { BrowserRouter } from 'react-router-dom'


// Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: jest.fn().mockImplementation(query => ({
//       matches: false,
//       media: query,
//       onchange: null,
//     })),
//   })

test('have required inputs', ()=>{
    shallow(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>        
        )
    
    const usernameInput = screen.getByTestId('username')
    const passwordInput = screen.getByTestId('password')

    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
})
test('have required buttons', ()=>{
    shallow(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>        
        )
    
    const submitBtn = screen.getByText('Submit')
    const cancelBtn = screen.getByText('Cancel')

    expect(submitBtn).toBeInTheDocument()
    expect(cancelBtn).toBeInTheDocument()
})