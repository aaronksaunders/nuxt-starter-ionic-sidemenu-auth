// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware(async (to, _from) => {

    const router = useRouter();
    const auth = useAuth();
  

    if (!auth?.value ) {
      return router.push("/login");
    } else if (to.path === "" || to.path === "/" || to.path === "/login") {
      return router.push("/home");
    }
  });
  