/* App.tsx */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "@/components/Loading";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

const Home = lazy(() => import("@/pages/Home"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Login = lazy(() => import("@/pages/Login"));
const SignUp = lazy(() => import("@/pages/SignUp"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const withSuspense = (Component: React.ComponentType, fallback: React.ReactNode = <Loading />) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={
            withSuspense(Home)
          } />
        </Route>

        <Route path="dashboard" element={
          withSuspense(Dashboard)
        } />

        <Route element={<AuthLayout />}>
          <Route path="login" element={
            withSuspense(Login)
          } />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="sign-up" element={
            withSuspense(SignUp)
          } />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="*" element={
            withSuspense(NotFound)
          } />
        </Route>
      </Routes>
    </>
  )
}
