import { render, screen, fireEvent } from '@redwoodjs/testing/web'
import '@testing-library/jest-dom/extend-expect' // For better assertions
import HamburgerBtn from './HamburgerBtn'

describe('HamburgerBtn', () => {
  it('renders the Hamburger Button', () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')
    expect(button).toBeInTheDocument()
  })

  it('toggles the menu when clicked', () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')

    // Initially, menu items should not be visible
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()

    // Click to open the menu
    fireEvent.click(button)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Treatments')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
    expect(screen.getByText('Gift Cards')).toBeInTheDocument()

    // Verify that "Book Now" is an external link
    const bookNowLink = screen.getByText('Book Now').closest('a')
    expect(bookNowLink).toHaveAttribute('href', 'https://external-booking-site.com') // Replace with actual URL
    expect(bookNowLink).toHaveAttribute('target', '_blank')
    expect(bookNowLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Click again to close the menu
    fireEvent.click(button)
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()
  })

  // Optional: Test keyboard accessibility
  it('opens and closes the menu with keyboard', () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')

    // Focus the button
    button.focus()
    expect(button).toHaveFocus()

    // Press Enter to open
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })
    expect(screen.getByText('Contact')).toBeInTheDocument()

    // Verify that "Book Now" is an external link
    const bookNowLink = screen.getByText('Book Now').closest('a')
    expect(bookNowLink).toHaveAttribute('href', 'https://external-booking-site.com') // Replace with actual URL
    expect(bookNowLink).toHaveAttribute('target', '_blank')
    expect(bookNowLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Press Space to close
    fireEvent.keyDown(button, { key: ' ', code: 'Space' })
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()
  })
})
