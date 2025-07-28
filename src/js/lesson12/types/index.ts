/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export interface Comment {
  id: string
  title: string
  message: string
  isPending?: boolean
}

export interface CommentResult {
  record: {
    comments: Comment[]
  }
}
