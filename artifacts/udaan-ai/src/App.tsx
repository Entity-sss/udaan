import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import Signup from "@/pages/Signup";
import Assessment from "@/pages/Assessment";
import AssessmentConfirm from "@/pages/AssessmentConfirm";
import AppLayout from "@/pages/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Roadmap from "@/pages/Roadmap";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Progress from "@/pages/Progress";
import Certificates from "@/pages/Certificates";
import Library from "@/pages/Library";
import MockTest from "@/pages/MockTest";
import MockInterview from "@/pages/MockInterview";
import ResumeBuilder from "@/pages/ResumeBuilder";
import Skills from "@/pages/Skills";
import SkillLevels from "@/pages/SkillLevels";
import SkillPhases from "@/pages/SkillPhases";
import PhaseContent from "@/pages/PhaseContent";
import PhaseQuizPage from "@/pages/PhaseQuizPage";
import LevelQuizPage from "@/pages/LevelQuizPage";
import FinalSkillQuizPage from "@/pages/FinalSkillQuizPage";
import SkillProject from "@/pages/SkillProject";
import { getStoredStudent } from "@/lib/auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      retry: 1,
    },
  },
});

function AuthGuard({ children }: { children: React.ReactNode }) {
  const student = getStoredStudent();
  if (!student) return <Redirect to="/signup" />;
  return <>{children}</>;
}

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <AppLayout>{children}</AppLayout>
    </AuthGuard>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/signup" component={Signup} />

      <Route path="/assessment/confirm">
        <AuthGuard>
          <AssessmentConfirm />
        </AuthGuard>
      </Route>
      <Route path="/assessment">
        <AuthGuard>
          <Assessment />
        </AuthGuard>
      </Route>

      <Route path="/skills/:skillId/skill-final">
        <AuthLayout>
          <FinalSkillQuizPage />
        </AuthLayout>
      </Route>
      <Route path="/skills/:skillId/project">
        <AuthLayout>
          <SkillProject />
        </AuthLayout>
      </Route>
      <Route path="/skills/:skillId/:levelId/level-test">
        <AuthLayout>
          <LevelQuizPage />
        </AuthLayout>
      </Route>
      <Route path="/skills/:skillId/:levelId/:phaseId/test">
        <AuthLayout>
          <PhaseQuizPage />
        </AuthLayout>
      </Route>
      <Route path="/skills/:skillId/:levelId/:phaseId">
        <AuthLayout>
          <PhaseContent />
        </AuthLayout>
      </Route>
      <Route path="/skills/:skillId/:levelId">
        <AuthLayout>
          <SkillPhases />
        </AuthLayout>
      </Route>
      <Route path="/skills/:skillId">
        <AuthLayout>
          <SkillLevels />
        </AuthLayout>
      </Route>
      <Route path="/skills">
        <AuthLayout>
          <Skills />
        </AuthLayout>
      </Route>

      <Route path="/courses/:courseId">
        <AuthLayout>
          <CourseDetail />
        </AuthLayout>
      </Route>
      <Route path="/courses">
        <AuthLayout>
          <Courses />
        </AuthLayout>
      </Route>

      <Route path="/dashboard">
        <AuthLayout>
          <Dashboard />
        </AuthLayout>
      </Route>
      <Route path="/roadmap">
        <AuthLayout>
          <Roadmap />
        </AuthLayout>
      </Route>
      <Route path="/progress">
        <AuthLayout>
          <Progress />
        </AuthLayout>
      </Route>
      <Route path="/certificates">
        <AuthLayout>
          <Certificates />
        </AuthLayout>
      </Route>
      <Route path="/library">
        <AuthLayout>
          <Library />
        </AuthLayout>
      </Route>
      <Route path="/mock-test">
        <AuthLayout>
          <MockTest />
        </AuthLayout>
      </Route>
      <Route path="/mock-interview">
        <AuthLayout>
          <MockInterview />
        </AuthLayout>
      </Route>
      <Route path="/resume-builder">
        <AuthLayout>
          <ResumeBuilder />
        </AuthLayout>
      </Route>
      <Route path="/resume">
        <AuthLayout>
          <ResumeBuilder />
        </AuthLayout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
