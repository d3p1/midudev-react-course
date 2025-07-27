/**
 * @description Results
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useUsers} from '../../../../hook/useUsers.ts'

export const Results = () => {
  const {users} = useUsers()

  return <h3 className="italic text-xs"> Results: {users?.length} </h3>
}
