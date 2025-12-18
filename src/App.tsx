import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent tracking-tight mb-4 font-[system-ui]">
            shea's portfolio
          </h1>
          <p className="text-lg text-purple-200/60 max-w-2xl mx-auto font-light">
            Your sandbox for experimenting with React components, shadcn/ui, and creative ideas.
          </p>
        </header>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Counter Card */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <span className="text-2xl">⚡</span> Counter
              </CardTitle>
              <CardDescription className="text-purple-200/50">
                Classic React state example
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-6xl font-bold text-center bg-gradient-to-br from-fuchsia-400 to-purple-400 bg-clip-text text-transparent py-4">
                {count}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setCount((c) => c - 1)}
                >
                  −
                </Button>
                <Button
                  className="flex-1 bg-black text-white hover:bg-black/80 border-0"
                  onClick={() => setCount((c) => c + 1)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="ghost"
                className="w-full text-purple-300/60 hover:text-purple-200 hover:bg-white/5"
                onClick={() => setCount(0)}
              >
                Reset
              </Button>
            </CardContent>
          </Card>

          {/* Input Card */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <span className="text-2xl">✏️</span> Form Elements
              </CardTitle>
              <CardDescription className="text-purple-200/50">
                shadcn/ui input components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-100">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200/30 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-100">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200/30 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
              <Button className="w-full bg-black text-white hover:bg-black/80 border-0">
                Submit
              </Button>
            </CardContent>
          </Card>

          {/* Buttons Showcase */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <span className="text-2xl">🎨</span> Button Variants
              </CardTitle>
              <CardDescription className="text-purple-200/50">
                All shadcn button styles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-white text-slate-900 hover:bg-white/90">
                Default
              </Button>
              <Button
                variant="secondary"
                className="w-full bg-purple-500/20 text-purple-200 hover:bg-purple-500/30"
              >
                Secondary
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Outline
              </Button>
              <Button
                variant="ghost"
                className="w-full text-purple-200 hover:bg-white/10 hover:text-white"
              >
                Ghost
              </Button>
              <Button
                variant="destructive"
                className="w-full"
              >
                Destructive
              </Button>
            </CardContent>
          </Card>

          {/* Empty Playground Card */}
          <Card className="bg-white/5 border-white/10 border-dashed backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-3">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Your Playground
              </h3>
              <p className="text-purple-200/50 max-w-md mb-6">
                This is where you can experiment with React Bits! Edit{" "}
                <code className="bg-white/10 px-2 py-0.5 rounded text-fuchsia-300 text-sm">
                  src/App.tsx
                </code>{" "}
                to add your own components.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  📚 shadcn/ui Docs
                </Button>
                <Button className="bg-black text-white hover:bg-black/80 border-0">
                  🚀 Start Building
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-purple-200/40 text-sm">
          <p>
            Built with React + TypeScript + Vite + Tailwind CSS + shadcn/ui
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
