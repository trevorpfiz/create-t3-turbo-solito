import { SafeArea } from "./safe-area";
import { TRPCProvider } from "./trpc";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <TRPCProvider>{children}</TRPCProvider>
    </SafeArea>
  );
}
