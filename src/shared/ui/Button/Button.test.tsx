import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
    test('test for button render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('test for button render with clear theme class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
