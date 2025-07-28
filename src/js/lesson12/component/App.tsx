/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {CommentList} from './app/CommentList.tsx'
import {Form} from './app/Form.tsx'

const queryClient = new QueryClient()

export default function App() {
  return (
    <div className="flex flex-col gap-12 w-1/2 h-full">
      <QueryClientProvider client={queryClient}>
        <Form />
        <CommentList />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  )
}
