import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "@/shared/layout/AppShell";
import { HomePage } from "@/pages/HomePage/HomePage";
import { ArticlesPage } from "@/pages/ArticlesPage/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage/ArticleDetailsPage";
import { ExercisesPage } from "@/pages/ExercisesPage/ExercisesPage";
import { ExerciseDetailsPage } from "@/pages/ExerciseDetailsPage/ExerciseDetailsPage";
import { AboutPage } from "@/pages/AboutPage/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/articles", element: <ArticlesPage /> },
      { path: "/articles/:slug", element: <ArticleDetailsPage /> },
      { path: "/exercises", element: <ExercisesPage /> },
      { path: "/exercises/:slug", element: <ExerciseDetailsPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);