import { createRootRoute, Outlet } from "@tanstack/react-router";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </>
    );
  },
});
