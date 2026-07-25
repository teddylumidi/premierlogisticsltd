import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useAuth } from "@workspace/replit-auth-web";
import { useEffect } from 'react';

import { Layout } from './components/layout';
import Dashboard from './pages/dashboard';
import Shipments from './pages/shipments';
import NewShipment from './pages/new-shipment';
import ShipmentDetail from './pages/shipment-detail';
import Track from './pages/track';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Faqs from './pages/faqs';
import Pricing from './pages/pricing';
import Industries from './pages/industries';
import Coverage from './pages/coverage';
import Testimonials from './pages/testimonials';
import Blog from './pages/blog';
import Careers from './pages/careers';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Quote from './pages/quote';
import Portal from './pages/portal';
import Admin from './pages/admin';
import Driver from './pages/driver';

const queryClient = new QueryClient();

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, isLoading } = useAuth();
  const [, setLocation] = useLocation();
  useEffect(() => { if (!isLoading && !isAuthenticated) setLocation('/login'); }, [isLoading, isAuthenticated, setLocation]);
  if (isLoading || !isAuthenticated) return null;
  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/track" component={Track} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/faqs" component={Faqs} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/industries" component={Industries} />
      <Route path="/coverage" component={Coverage} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/careers" component={Careers} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/quote" component={Quote} />
      <Route path="/portal" component={Portal} />
      <Route path="/driver" component={Driver} />
      <Route path="/dashboard">
        <Layout><ProtectedRoute component={Dashboard} /></Layout>
      </Route>
      <Route path="/shipments">
        <Layout><ProtectedRoute component={Shipments} /></Layout>
      </Route>
      <Route path="/shipments/new">
        <Layout><ProtectedRoute component={NewShipment} /></Layout>
      </Route>
      <Route path="/shipments/:id">
        <Layout><ProtectedRoute component={ShipmentDetail} /></Layout>
      </Route>
      <Route path="/admin">
        <ProtectedRoute component={Admin} />
      </Route>
      <Route>
        <Layout><NotFound /></Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/+$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
