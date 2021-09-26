import Navi from '../pages/Home/Navi'
import {render, screen, act} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'



test('have required buttons', ()=>{
    act(()=>{
        render(
            <BrowserRouter>
                <Navi/>
            </BrowserRouter>        
            )
    })
    
    const menuHome = screen.getByText('Home')
    const menuR1 = screen.getByText('Hire Me! Reason #1')
    const menuR2 = screen.getByText('Hire Me! Reason #2')
    const menuR3 = screen.getByText('Hire Me! Reason #3')
    const menuLogin = screen.getByText('Login')

    expect(menuHome).toBeInTheDocument()
    expect(menuR1).toBeInTheDocument()
    expect(menuR2).toBeInTheDocument()
    expect(menuR3).toBeInTheDocument()
    expect(menuLogin).toBeInTheDocument()
})