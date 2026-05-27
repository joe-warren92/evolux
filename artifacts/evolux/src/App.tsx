import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import FreeReview from "@/pages/FreeReview";
import Contact from "@/pages/Contact";
import WebDesign from "@/pages/services/WebDesign";
import ServicesArchive from "@/pages/services/ServicesArchive";
import Maintenance from "@/pages/services/Maintenance";
import CRO from "@/pages/services/CRO";
import Branding from "@/pages/services/Branding";
import GraphicDesign from "@/pages/services/GraphicDesign";
import Packages from "@/pages/Packages";
import Locations from "@/pages/locations/Locations";
import Sunderland from "@/pages/locations/Sunderland";
import InsightsArchive from "@/pages/insights/InsightsArchive";
import InsightPost from "@/pages/insights/InsightPost";
import Projects from "@/pages/projects/Projects";
import CircularBranding from "@/pages/projects/CircularBranding";
import MarleyDoulas from "@/pages/projects/MarleyDoulas";
import OckerbyAcademy from "@/pages/projects/OckerbyAcademy";
import MantonExecutives from "@/pages/projects/MantonExecutives";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/free-review" component={FreeReview} />
      <Route path="/packages" component={Packages} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={ServicesArchive} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/website-maintenance" component={Maintenance} />
      <Route path="/services/conversion-optimisation" component={CRO} />
      <Route path="/services/branding" component={Branding} />
      <Route path="/services/graphic-design" component={GraphicDesign} />
      <Route path="/locations" component={Locations} />
      <Route path="/locations/sunderland" component={Sunderland} />
      <Route path="/insights" component={InsightsArchive} />
      <Route path="/insights/:slug" component={InsightPost} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/circular-branding" component={CircularBranding} />
      <Route path="/projects/marley-doulas" component={MarleyDoulas} />
      <Route path="/projects/ockerby-academy" component={OckerbyAcademy} />
      <Route path="/projects/manton-executives" component={MantonExecutives} />
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
