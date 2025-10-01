import { Navigate, Route, Routes } from "react-router";
import Default from "./layouts/Default";
import LoginSocial from "./pages/auth/LoginSocial";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";
import Profile from "./pages/profile/Profile";
import BlogCreate from "./pages/blog/BlogCreate";
import ProfileSetup from "./pages/auth/ProfileSetup";
import PublicOnlyRoute from "./components/routes/PublicOnlyRoute";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Default />}>
          <Route index element={<Navigate to="/blog" />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route element={<PublicOnlyRoute />}>
            <Route path="login" element={<LoginSocial />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="profile" element={<Profile />} />
            <Route path="profile-setup" element={<ProfileSetup />} />
            <Route path="blog/create" element={<BlogCreate />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
