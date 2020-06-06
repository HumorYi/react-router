import { useContext } from 'react'
import { RouterContext } from './RouterContext'

// 读取 RouterContext 对应的数据

export function useRouteMatch() {
  return useContext(RouterContext).match
}

export function useHistory() {
  return useContext(RouterContext).history
}

export function useLocation() {
  return useContext(RouterContext).location
}

export function useParams() {
  const match = useContext(RouterContext).match
  return match ? match.params : {}
}
