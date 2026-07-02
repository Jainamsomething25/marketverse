"use client";

import * as React from "react";
import { AppShell } from "@/components/shared/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Input, SearchInput } from "@/components/ui/input";
import { Dropdown } from "@/components/ui/dropdown";
import { Modal } from "@/components/ui/modal";
import { Drawer } from "@/components/ui/drawer";
import { Tooltip } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Progress, LoadingSpinner } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import { StatusIndicator, GainLossIndicator } from "@/components/ui/indicator";
import { ChartContainer } from "@/components/ui/chart-container";
import { useToast } from "@/components/ui/toast";
import { Activity, Landmark, Sparkles, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [dropdownValue, setDropdownValue] = React.useState("baseline");

  const dropdownOptions = [
    { value: "baseline", label: "Scenario 0: Main Timeline", icon: <Landmark className="w-4 h-4 text-indigo-400" /> },
    { value: "tech-boom", label: "Scenario A: Tech Boom", icon: <Sparkles className="w-4 h-4 text-emerald-400" /> },
    { value: "energy-shock", label: "Scenario B: Energy Shock", icon: <Activity className="w-4 h-4 text-rose-400" /> },
  ];

  return (
    <AppShell breadcrumbs={[{ label: "System Design Library", href: "/" }]}>
      <div className="flex flex-col gap-8 max-w-6xl mx-auto pb-12">
        
        {/* Banner Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl gap-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-450 bg-clip-text text-transparent">
              MarketVerse Design System
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Reusable atomic component library and fintech application shell for Milestone 1B.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast({
                  type: "success",
                  title: "Success Action Triggered",
                  description: "This is a response notification from the toast registry.",
                });
              }}
            >
              Test Notification
            </Button>
            <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
              Test Modal Box
            </Button>
          </div>
        </div>

        {/* 1. Statistics Cards Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Statistic Display Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Portfolio Valuation"
              value="$124,450.00"
              change={14.25}
              changeLabel="from branch tick"
              icon={<Landmark className="w-4 h-4 text-indigo-400" />}
            />
            <StatCard
              title="Active Ripple Shocks"
              value="3 Active"
              change={-2.4}
              changeLabel="shock decay offset"
              icon={<Activity className="w-4 h-4 text-rose-400" />}
            />
            <StatCard
              title="Intelligence Index (FIS)"
              value="720 / 1000"
              change={4.8}
              changeLabel="from recent trade"
              icon={<Layers className="w-4 h-4 text-emerald-450" />}
            />
          </div>
        </div>

        {/* 2. Main Primitives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Form Controls & Overlays */}
          <div className="flex flex-col gap-8">
            {/* Form Inputs and Dropdowns */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Forms & Toggles</CardTitle>
                <CardDescription>Input fields, dropdown states, and status badges.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Security Ticker Symbol"
                  placeholder="e.g. AI-TECH"
                  helperText="Search by ticker symbol or sector category"
                />
                
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-slate-300">Active Scenario Selection</span>
                  <Dropdown
                    options={dropdownOptions}
                    value={dropdownValue}
                    onChange={(val) => {
                      setDropdownValue(val);
                      toast({
                        type: "info",
                        title: "Timeline Selected",
                        description: `Switched viewport context to: ${val}`,
                      });
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-semibold text-slate-300">Status Badges</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Tech Sector</Badge>
                    <Badge variant="success">Bullish</Badge>
                    <Badge variant="danger">Bearish</Badge>
                    <Badge variant="warning">Shock Pending</Badge>
                    <Badge variant="info">Active scenario</Badge>
                    <Badge variant="outline">Base stock</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-semibold text-slate-300">Status Indicators</span>
                  <div className="flex gap-4">
                    <StatusIndicator status="success" label="Active" />
                    <StatusIndicator status="danger" label="Critical Shock" />
                    <StatusIndicator status="warning" label="Pending Event" />
                    <StatusIndicator status="neutral" label="Muted" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skeleton & Loader States */}
            <Card>
              <CardHeader>
                <CardTitle>Progress & Skeleton Loaders</CardTitle>
                <CardDescription>Visual indicators representing background operations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <LoadingSpinner size="md" />
                  <span className="text-xs text-slate-400">Recalculating price variables...</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Task Completion</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} variant="primary" />
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-300">Skeleton Content Loader</span>
                  <div className="flex items-center space-x-4 p-4 border border-slate-800 rounded-app-md bg-slate-950/20">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-3 w-[200px]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Tabbed Lists, Accordions, & Empty States */}
          <div className="flex flex-col gap-8">
            <Tabs defaultValue="holdings">
              <TabsList>
                <TabsTrigger value="holdings">Active Holdings</TabsTrigger>
                <TabsTrigger value="faq">Simulation FAQs</TabsTrigger>
                <TabsTrigger value="empty">Empty Sandbox</TabsTrigger>
              </TabsList>

              <TabsContent value="holdings">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Company</TableHead>
                          <TableHead>Current Price</TableHead>
                          <TableHead className="text-right">Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold text-slate-200">
                            AeroSpace Inc (AERO)
                          </TableCell>
                          <TableCell>$154.20</TableCell>
                          <TableCell className="text-right">
                            <GainLossIndicator percentage={4.2} />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-slate-200">
                            Mega-Computing Corp (COMP)
                          </TableCell>
                          <TableCell>$89.10</TableCell>
                          <TableCell className="text-right">
                            <GainLossIndicator percentage={-1.85} />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-slate-200">
                            BioMed Tech (BIOM)
                          </TableCell>
                          <TableCell>$210.45</TableCell>
                          <TableCell className="text-right">
                            <GainLossIndicator percentage={0.0} />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq">
                <Accordion>
                  <AccordionItem value="1" trigger="What is the Ripple Engine?">
                    The Ripple Engine is an economic propagation matrix that distributes macro-economic shocks (e.g. oil supply crisis) from their origin sector to related industries using calculated correlations and delays.
                  </AccordionItem>
                  <AccordionItem value="2" trigger="How is the FIS score calculated?">
                    The Financial Intelligence Score is derived from diversification weighting indices (HHI), transaction timing logic matching active event sentiment, and overall risk management parameters.
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="empty">
                <EmptyState
                  title="No Alternate Timelines"
                  description="You have not created any alternate branched timelines. Try creating one in the Future Lab."
                  actionLabel="Create Sandbox"
                  onAction={() => setDrawerOpen(true)}
                />
              </TabsContent>
            </Tabs>

            {/* Chart Container Wrapper */}
            <ChartContainer
              title="Stock Performance Ticker"
              description="Real-time timeline evaluation chart tracking prices (Placeholder state)."
              action={
                <Button variant="ghost" size="sm" className="text-xs">
                  Reload
                </Button>
              }
            >
              <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2">
                <TrendingUp className="w-8 h-8 text-slate-700" />
                <span className="text-xs">Visual Area charts will render here in Milestone 2.</span>
              </div>
            </ChartContainer>
          </div>
        </div>

        {/* 3. Action Components (Triggers Drawer) */}
        <Card className="border-indigo-500/20 bg-indigo-500/[0.02]">
          <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Showcase Action Overlay</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Confirm transaction limits and test sliding side drawers.
                </p>
              </div>
            </div>
            <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
              Open Side Drawer
            </Button>
          </CardContent>
        </Card>

      </div>

      {/* Dynamic Overlays: Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Transaction Confirmation"
        description="Demo confirmation dialog for transaction requests."
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setModalOpen(false);
                toast({
                  type: "success",
                  title: "Action Complete",
                  description: "Order processed successfully (Simulation mode).",
                });
              }}
            >
              Confirm Buy Order
            </Button>
          </>
        }
      >
        <p className="leading-relaxed">
          You are about to execute a purchase order for 10 shares ofCOMP in Scenario 0. Please verify the active FIS parameters and transaction weights before confirming this trade.
        </p>
      </Modal>

      {/* Dynamic Overlays: Drawer */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Advanced Sandbox Options"
        description="Alternative timeline control panel drawer."
        footer={
          <Button variant="primary" className="w-full" onClick={() => setDrawerOpen(false)}>
            Apply Settings
          </Button>
        }
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Drift Coefficients
            </h4>
            <Progress value={45} variant="success" />
            <span className="text-[11px] text-slate-500">Tech sector drift modifier: +0.45</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Volatility Coefficients
            </h4>
            <Progress value={70} variant="danger" />
            <span className="text-[11px] text-slate-500">Energy sector volatility modifier: +0.70</span>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-4">
            <Input label="Scenario Rename" placeholder="Alternate energy baseline" />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setDrawerOpen(false);
                toast({
                  type: "success",
                  title: "Settings Saved",
                  description: "Sandbox timeline modifiers set.",
                });
              }}
            >
              Save Modifiers
            </Button>
          </div>
        </div>
      </Drawer>

    </AppShell>
  );
}
