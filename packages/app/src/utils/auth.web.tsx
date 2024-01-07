import { auth, signIn, signOut } from "@acme/auth";

export const useUser = () => {
  return async () => {
    const session = await auth();
    return session?.user ?? null;
  };
};

export const useSignIn = () => {
  return async () => {
    await signIn();
  };
};

export const useSignOut = () => {
  return async () => {
    await signOut();
  };
};
