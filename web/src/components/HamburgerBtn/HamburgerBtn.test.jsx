import { render, screen, fireEvent, act } from '@redwoodjs/testing/web'
import '@testing-library/jest-dom/extend-expect' // For better assertions
import HamburgerBtn from './HamburgerBtn'

describe('HamburgerBtn', () => {
  const externalBookingUrl = 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/all-offer?pId=969545'

  it('renders the Hamburger Button', () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the menu when clicked', async () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')

    // Initially, menu items should not be visible
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()

    // Click to open the menu
    await act(async () => {
      fireEvent.click(button)
    })
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Treatments')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
    expect(screen.getByText('Gift Cards')).toBeInTheDocument()

    // Verify that "Book Now" is an external link with correct attributes
    const bookNowLink = screen.getByText('Book Now').closest('a')
    expect(bookNowLink).toHaveAttribute('href', externalBookingUrl)
    expect(bookNowLink).toHaveAttribute('target', '_blank')
    expect(bookNowLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Click again to close the menu
    await act(async () => {
      fireEvent.click(button)
    })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()
  })

  // Test keyboard accessibility
  it('opens and closes the menu with keyboard', async () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')

    // Focus the button
    button.focus()
    expect(button).toHaveFocus()

    // Press Enter to open
    await act(async () => {
      fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })
    })
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Contact')).toBeInTheDocument()

    // Verify that "Book Now" is an external link with correct attributes
    const bookNowLink = screen.getByText('Book Now').closest('a')
    expect(bookNowLink).toHaveAttribute('href', externalBookingUrl)
    expect(bookNowLink).toHaveAttribute('target', '_blank')
    expect(bookNowLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Press Escape to close
    await act(async () => {
      fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })
    })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()
  })

  // Test clicking outside the menu to close it
  it('closes the menu when clicking outside', async () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')

    // Open the menu
    await act(async () => {
      fireEvent.click(button)
    })
    expect(screen.getByText('Contact')).toBeInTheDocument()

    // Click outside the menu (simulate by clicking the backdrop)
    const backdrop = screen.getByTestId('backdrop')
    await act(async () => {
      fireEvent.click(backdrop)
    })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()
  })

  // Test focus trapping within the menu
  it('traps focus within the menu when open', async () => {
    render(<HamburgerBtn />)
    const button = screen.getByLabelText('Menu button')

    // Open the menu
    await act(async () => {
      fireEvent.click(button)
    })
    expect(button).toHaveAttribute('aria-expanded', 'true')

    const contactLink = screen.getByText('Contact')
    const giftCardsLink = screen.getByText('Gift Cards')

    // Focus on the first link
    contactLink.focus()
    expect(contactLink).toHaveFocus()

    // Press Shift + Tab to move focus backward
    await act(async () => {
      fireEvent.keyDown(document, { key: 'Tab', code: 'Tab', shiftKey: true })
    })
    expect(giftCardsLink).toHaveFocus()

    // Press Tab to move focus forward
    await act(async () => {
      fireEvent.keyDown(document, { key: 'Tab', code: 'Tab' })
    })
    expect(contactLink).toHaveFocus()

    // Press Escape to close
    await act(async () => {
      fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })
    })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Contact')).not.toBeInTheDocument()
  })
})
