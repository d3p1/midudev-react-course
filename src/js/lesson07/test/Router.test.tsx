/**
 * @description Test
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
// @vitest-environment happy-dom

import {beforeEach, describe, expect, it, vi} from 'vitest'
import {cleanup, render, screen, fireEvent} from '@testing-library/react'
import {Router} from '../component/app/core/Router.tsx'
import {Link} from '../component/app/core/Link.tsx'
import NavigationManager from '../utils/navigation-manager.ts'

const navigationManagerMock = vi.mockObject(NavigationManager)
navigationManagerMock.getCurrentPathName = vi.fn()

describe('Lesson 07', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render correctly when routes are empty', () => {
    render(
      <Router
        routes={[]}
        defaultPageComponent={() => {
          return <h1>404</h1>
        }}
      />,
    )
    expect(true).toBeTruthy()
  })

  it('should render default component when routes are empty', () => {
    render(
      <Router
        routes={[]}
        defaultPageComponent={() => {
          return <h1>404</h1>
        }}
      />,
    )
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render defined component when path is used', () => {
    navigationManagerMock.getCurrentPathName.mockReturnValueOnce('/')
    render(
      <Router
        routes={[
          {
            pathname: '/',
            component: () => {
              return <h1>Home</h1>
            },
          },
        ]}
        defaultPageComponent={() => {
          return <h1>404</h1>
        }}
      />,
    )
    expect(screen.getByText('Home')).toBeTruthy()
  })

  it('should render linked component when link is clicked', () => {
    navigationManagerMock.getCurrentPathName.mockReturnValueOnce('/')

    render(
      <Router
        routes={[
          {
            pathname: '/',
            component: () => {
              return (
                <>
                  <h1>Home</h1>
                  <Link pathname="/about">Go to home</Link>
                </>
              )
            },
          },
          {
            pathname: '/about',
            component: () => {
              return <h1>About</h1>
            },
          },
        ]}
        defaultPageComponent={() => {
          return <h1>404</h1>
        }}
      />,
    )

    const button = screen.getByText('Go to home')
    fireEvent.click(button)

    expect(screen.getByText('About')).toBeTruthy()
  })
})
