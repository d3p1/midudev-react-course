/**
 * @description Translator test
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
// @vitest-environment happy-dom

import {describe, it, expect, beforeEach, vi, afterEach} from 'vitest'
import {cleanup, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Translator} from '../component/app/Translator.tsx'
import {TranslationManager} from '../utils/translation-manager.ts'

vi.mock('../utils/translation-manager.ts')

describe('Lesson 09', () => {
  beforeEach(() => {
    userEvent.setup()
  })

  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('Should translate text when from text is filled', async () => {
    TranslationManager.translate = vi
      .fn()
      .mockReturnValueOnce(new Promise((resolve) => resolve('Hola')))

    const app = render(<Translator />)
    const fromTextElement = await app.findByPlaceholderText('Enter text...')

    await userEvent.type(fromTextElement, 'Hello')

    const toText = await app.findByText('Hola', {}, {timeout: 2000})

    expect(toText).toBeTruthy()
  })
})
