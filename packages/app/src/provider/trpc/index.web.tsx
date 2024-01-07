/* provider for nextjs, tRPC */
import { cache } from "react";
import { headers } from "next/headers";

import { TRPCReactProvider as Provider } from "../../utils/api.web";

const getHeaders = cache(async () => headers());

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  return <Provider headersPromise={getHeaders()}>{children}</Provider>;
}
