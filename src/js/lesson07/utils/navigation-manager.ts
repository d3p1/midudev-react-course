/**
 * @description Navigation manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
const NAVIGATION_FORWARD_EVENT = 'pushstate'
const NAVIGATION_BACKWARD_EVENT = 'popstate'

export default class NavigationManager {
  /**
   * @type {() => void}
   */
  readonly #navigationCallback: () => void

  /**
   * Constructor
   *
   * @param {() => void} navigationCallback
   */
  constructor(navigationCallback: () => void) {
    this.#navigationCallback = navigationCallback

    this.#addNavigationListener()
  }

  /**
   * Get the current path name
   *
   * @returns {string}
   */
  static getCurrentPathName(): string {
    return window.location.pathname
  }

  /**
   * Navigate
   *
   * @param   {string} to
   * @returns {void}
   */
  static navigate(to: string): void {
    history.pushState(null, '', to)

    const navigationForwardEvent = new Event(NAVIGATION_FORWARD_EVENT)
    dispatchEvent(navigationForwardEvent)
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose(): void {
    window.removeEventListener(
      NAVIGATION_FORWARD_EVENT,
      this.#navigationCallback,
    )
    window.removeEventListener(
      NAVIGATION_BACKWARD_EVENT,
      this.#navigationCallback,
    )
  }

  /**
   * Add navigation listener
   *
   * @returns {void}
   */
  #addNavigationListener(): void {
    window.addEventListener(NAVIGATION_FORWARD_EVENT, this.#navigationCallback)
    window.addEventListener(NAVIGATION_BACKWARD_EVENT, this.#navigationCallback)
  }
}
