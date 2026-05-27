import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import FreeReview from "@/pages/FreeReview";
import WebDesign from "@/pages/services/WebDesign";
import Packages from "@/pages/Packages";
import Locations from "@/pages/locations/Locations";
import Sunderland from "@/pages/locations/Sunderland";
import InsightsArchive from "@/pages/insights/InsightsArchive";
import InsightPost from "@/pages/insights/InsightPost";
import CircularBranding from "@/pages/projects/CircularBranding";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/free-review" component={FreeReview} />
      <Route path="/packages" component={Packages} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/locations" component={Locations} />
      <Route path="/locations/sunderland" component={Sunderland} />
      <Route path="/insights" component={InsightsArchive} />
      <Route path="/insights/:slug" component={InsightPost} />
      <Route path="/projects/circular-branding" component={CircularBranding} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
