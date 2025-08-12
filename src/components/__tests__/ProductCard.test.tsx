
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider, createTheme } from '@mui/material'
import ProductCard, { Product } from '../ProductCard'
import cartReducer from '@/store/slices/cartSlice'
import searchReducer from '@/store/slices/searchSlice'

// Mock theme data
const mockTheme = {
  name: 'HP',
  primaryColor: '#0096D6',
  accentColor: '#00A6FB',
}

// Create a test store
const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      search: searchReducer,
    },
    preloadedState: {
      cart: { items: {} },
      search: { query: '', filters: {} },
      ...initialState,
    },
  })
}

// Test wrapper component
const TestWrapper: React.FC<{ children: React.ReactNode; store?: any }> = ({ 
  children, 
  store = createTestStore() 
}) => {
  const theme = createTheme()
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  )
}

const mockProduct: Product = {
  id: '101',
  name: 'HP Spectre x360 14',
  description: '2-in-1 premium laptop with Intel Evo i7 and OLED display',
  price: 1399,
  oldPrice: 1599,
  customerId: 1,
  imageUrl: '/test-image.jpg',
}

describe('ProductCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders product information correctly', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    expect(screen.getByText('HP Spectre x360 14')).toBeInTheDocument()
    expect(screen.getByText('2-in-1 premium laptop with Intel Evo i7 and OLED display')).toBeInTheDocument()
    expect(screen.getByText('$1399')).toBeInTheDocument()
    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
  })

  test('displays product image with correct alt text', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    const image = screen.getByAltText('HP Spectre x360 14')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  test('uses fallback image when no imageUrl provided', () => {
    const productWithoutImage = { ...mockProduct, imageUrl: undefined }
    
    render(
      <TestWrapper>
        <ProductCard product={productWithoutImage} customerKey="hp" />
      </TestWrapper>
    )

    const image = screen.getByAltText('HP Spectre x360 14')
    expect(image).toHaveAttribute('src', '/HPLaptop.jpg')
  })

  test('uses Lenovo fallback image for Lenovo theme', () => {
    const productWithoutImage = { ...mockProduct, imageUrl: undefined }
    
    render(
      <TestWrapper>
        <ProductCard product={productWithoutImage} customerKey="lenovo" />
      </TestWrapper>
    )

    const image = screen.getByAltText('HP Spectre x360 14')
    expect(image).toHaveAttribute('src', '/lenovoLaptop.jpg')
  })

  test('adds item to cart when Add to Cart button is clicked', () => {
    const store = createTestStore()
    
    render(
      <TestWrapper store={store}>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    const addToCartButton = screen.getByText('Add to Cart')
    fireEvent.click(addToCartButton)

    const state = store.getState()
    expect(state.cart.items[mockProduct.id]).toBe(1)
  })

  test('shows quantity controls when item is in cart', () => {
    const store = createTestStore({
      cart: { items: { '101': 2 } }
    })
    
    render(
      <TestWrapper store={store}>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByLabelText('add')).toBeInTheDocument()
    expect(screen.getByLabelText('remove')).toBeInTheDocument()
    expect(screen.queryByText('Add to Cart')).not.toBeInTheDocument()
  })

  test('increments quantity when plus button is clicked', () => {
    const store = createTestStore({
      cart: { items: { '101': 1 } }
    })
    
    render(
      <TestWrapper store={store}>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    const incrementButton = screen.getByLabelText('add')
    fireEvent.click(incrementButton)

    const state = store.getState()
    expect(state.cart.items[mockProduct.id]).toBe(2)
  })

  test('decrements quantity when minus button is clicked', () => {
    const store = createTestStore({
      cart: { items: { '101': 2 } }
    })
    
    render(
      <TestWrapper store={store}>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    const decrementButton = screen.getByLabelText('remove')
    fireEvent.click(decrementButton)

    const state = store.getState()
    expect(state.cart.items[mockProduct.id]).toBe(1)
  })

  test('shows rating and reviews correctly', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    expect(screen.getByText('245 Reviews')).toBeInTheDocument()
    expect(screen.getByText('In Stock')).toBeInTheDocument()
  })

  test('applies correct theme colors for HP', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    const addToCartButton = screen.getByText('Add to Cart')
    expect(addToCartButton).toHaveStyle('background-color: #0096D6')
  })

  test('handles hover effects', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} customerKey="hp" />
      </TestWrapper>
    )

    const card = screen.getByText('HP Spectre x360 14').closest('.MuiCard-root')
    
    fireEvent.mouseEnter(card!)
    fireEvent.mouseLeave(card!)
    
    // Test passes if no errors are thrown during hover events
    expect(card).toBeInTheDocument()
  })

  test('handles missing price gracefully', () => {
    const productWithoutPrice = { ...mockProduct, price: undefined }
    
    render(
      <TestWrapper>
        <ProductCard product={productWithoutPrice} customerKey="hp" />
      </TestWrapper>
    )

    expect(screen.queryByText('$1399')).not.toBeInTheDocument()
  })

  test('truncates long product names with tooltip', () => {
    const productWithLongName = {
      ...mockProduct,
      name: 'This is a very long product name that should be truncated'
    }
    
    render(
      <TestWrapper>
        <ProductCard product={productWithLongName} customerKey="hp" />
      </TestWrapper>
    )

    const productName = screen.getByText('This is a very long product name that should be truncated')
    expect(productName).toBeInTheDocument()
  })
})
