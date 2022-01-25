import { render, screen } from '@testing-library/react'
import App from './App'

test('should render the header', async () => {
  render(<App />)
  const banner = await screen.findByRole('banner')
  expect(banner).toHaveStyle('background: var(--grey)')

  const img = await screen.findByAltText(/alchemy logo/i)
  expect(img).toBeInTheDocument()

  const name = await screen.findByText(/vonta/i)
  expect(name).toBeInTheDocument()
})
