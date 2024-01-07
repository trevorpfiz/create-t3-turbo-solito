/* provider for expo, tRPC */
import { TRPCProvider as Provider } from '../../utils/api'

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>
}
