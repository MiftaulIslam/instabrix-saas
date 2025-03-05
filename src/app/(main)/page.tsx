import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-7xl font-semibold from-[#7214FF] to-[#32CAFD]  bg-gradient-to-br bg-clip-text text-transparent mb-6">
          INSTABRIX
        </h1>
        <p className="text-gray-400 mb-8">
          A CRM for agencies and freelancers to manage clients, projects, and
          more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-white">
            Get a demo
          </Button>
          <Button
            variant="outline"
            className="text-white border-gray-700 hover:bg-gray-800"
          >
            View pricing
          </Button>
        </div>
      </div>

      
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 max-w-4xl mx-auto overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-500">S</span>
                </div>
                <div>
                  <div className="text-white font-medium">Hello John Doe!</div>
                  <div className="text-sm text-gray-400">We hope you&apos;re having a great day.</div>
                </div>
              </div>
              <Button variant="outline" className="text-gray-400 border-gray-700 hover:text-white">
                Today
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-400 mb-1">Total Revenue</div>
                    <div className="text-2xl font-semibold text-white">$59,158</div>
                    <div className="text-xs text-green-500">+9%</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-400 mb-1">Subscribers</div>
                    <div className="text-2xl font-semibold text-white">2,984</div>
                    <div className="text-xs text-green-500">+11%</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-400 mb-1">Conversations</div>
                    <div className="text-2xl font-semibold text-white">698</div>
                    <div className="text-xs text-red-500">-6%</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-400 mb-1">Popup sales</div>
                    <div className="text-2xl font-semibold text-white">$658</div>
                    <div className="text-xs text-green-500">+18%</div>
                  </CardContent>
                </Card>
              </div>
              <div className="h-64 bg-gray-900/50 rounded-lg border border-gray-800">
                {/* Chart placeholder - in a real app, you'd use a charting library here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">Chart Area</div>
              </div>
            </div>
          </div>

    </section>
  );
}
