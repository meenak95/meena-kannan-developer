import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Globe, Users, ShoppingCart, MessageSquare, TrendingUp, Package } from "lucide-react";

const projectVisuals: Record<string, any> = {
  "E-Commerce Microservices Platform": {
    type: "architecture",
    elements: [
      { icon: Globe, label: "Web App", position: { x: 20, y: 20 }, color: "text-cyan-400" },
      { icon: Server, label: "API Gateway", position: { x: 50, y: 30 }, color: "text-purple-400" },
      { icon: ShoppingCart, label: "Order Service", position: { x: 20, y: 60 }, color: "text-green-400" },
      { icon: Users, label: "User Service", position: { x: 80, y: 60 }, color: "text-orange-400" },
      { icon: Database, label: "PostgreSQL", position: { x: 50, y: 80 }, color: "text-blue-400" },
    ]
  },
  "Real-time Chat Application": {
    type: "chat-demo",
    messages: [
      { user: "John", message: "Hey there! 👋", time: "2:30 PM" },
      { user: "Sarah", message: "Hello! How's the project going?", time: "2:31 PM" },
      { user: "John", message: "Great! The WebSocket integration is working perfectly", time: "2:32 PM" },
    ]
  },
  "Financial Analytics Dashboard": {
    type: "dashboard",
    data: [
      { label: "Revenue", value: 85, color: "bg-green-500" },
      { label: "Expenses", value: 65, color: "bg-red-500" },
      { label: "Profit", value: 75, color: "bg-blue-500" },
    ]
  },
  "Task Management API": {
    type: "api-demo",
    endpoints: [
      { method: "GET", path: "/api/tasks", status: 200 },
      { method: "POST", path: "/api/tasks", status: 201 },
      { method: "PUT", path: "/api/tasks/:id", status: 200 },
      { method: "DELETE", path: "/api/tasks/:id", status: 204 },
    ]
  },
  "Inventory Management System": {
    type: "inventory",
    items: [
      { name: "Laptops", stock: 45, trend: "up" },
      { name: "Phones", stock: 23, trend: "down" },
      { name: "Tablets", stock: 67, trend: "up" },
    ]
  }
};

export default function ProjectVisual({ projectTitle, className = "" }: { projectTitle: string; className?: string }) {
  const visual = projectVisuals[projectTitle];
  
  if (!visual) {
    return <DefaultVisual className={className} />;
  }

  switch (visual.type) {
    case "architecture":
      return <ArchitectureVisual visual={visual} className={className} />;
    case "chat-demo":
      return <ChatDemoVisual visual={visual} className={className} />;
    case "dashboard":
      return <DashboardVisual visual={visual} className={className} />;
    case "api-demo":
      return <APIDemoVisual visual={visual} className={className} />;
    case "inventory":
      return <InventoryVisual visual={visual} className={className} />;
    default:
      return <DefaultVisual className={className} />;
  }
}

function ArchitectureVisual({ visual, className }: { visual: any; className: string }) {
  return (
    <div className={`relative bg-slate-900/50 rounded-2xl p-6 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {visual.elements.map((element: any, index: number) =>
          visual.elements.slice(index + 1).map((target: any, targetIndex: number) => (
            <motion.line
              key={`${index}-${targetIndex}`}
              x1={`${element.position.x}%`}
              y1={`${element.position.y}%`}
              x2={`${target.position.x}%`}
              y2={`${target.position.y}%`}
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))
        )}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Service Nodes */}
      {visual.elements.map((element: any, index: number) => (
        <motion.div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${element.position.x}%`, top: `${element.position.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300">
            <element.icon className={`w-6 h-6 ${element.color} mb-2`} />
            <div className="text-xs text-gray-300 font-medium whitespace-nowrap">
              {element.label}
            </div>
          </div>
          
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-purple-400/30"
            animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function ChatDemoVisual({ visual, className }: { visual: any; className: string }) {
  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % visual.messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [visual.messages.length]);

  return (
    <div className={`bg-slate-900/50 rounded-2xl p-6 ${className}`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-medium">Team Chat</div>
            <div className="flex items-center space-x-1 text-xs text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 h-40 overflow-hidden">
        {visual.messages.map((message: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: index <= currentMessageIndex ? 1 : 0.3,
              y: index <= currentMessageIndex ? 0 : 20,
              scale: index === currentMessageIndex ? 1 : 0.95
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-xs px-3 py-2 rounded-2xl ${
              index % 2 === 0 
                ? 'bg-slate-800/80 text-white' 
                : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
            }`}>
              <div className="text-xs opacity-70 mb-1">{message.user}</div>
              <div className="text-sm">{message.message}</div>
              <div className="text-xs opacity-50 mt-1">{message.time}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Typing Indicator */}
      <motion.div
        className="flex items-center space-x-2 mt-4 text-gray-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
        <span className="text-xs">Someone is typing...</span>
      </motion.div>
    </div>
  );
}

function DashboardVisual({ visual, className }: { visual: any; className: string }) {
  return (
    <div className={`bg-slate-900/50 rounded-2xl p-6 ${className}`}>
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <span className="text-white font-medium">Financial Overview</span>
        </div>
        <div className="text-xs text-gray-400">Real-time data</div>
      </div>

      {/* Charts */}
      <div className="space-y-4">
        {visual.data.map((item: any, index: number) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">{item.label}</span>
              <span className="text-white font-medium">{item.value}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${item.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Chart Animation */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-end space-x-1 h-16">
          {[30, 45, 25, 60, 40, 55, 35, 50].map((height, index) => (
            <motion.div
              key={index}
              className="w-3 bg-gradient-to-t from-purple-600 to-cyan-600 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.1 + 1, duration: 0.6 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function APIDemoVisual({ visual, className }: { visual: any; className: string }) {
  const [activeEndpoint, setActiveEndpoint] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveEndpoint(prev => (prev + 1) % visual.endpoints.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [visual.endpoints.length]);

  const methodColors: Record<string, string> = {
    GET: "text-green-400 bg-green-400/20",
    POST: "text-blue-400 bg-blue-400/20",
    PUT: "text-yellow-400 bg-yellow-400/20",
    DELETE: "text-red-400 bg-red-400/20"
  };

  return (
    <div className={`bg-slate-900/50 rounded-2xl p-6 ${className}`}>
      {/* API Header */}
      <div className="flex items-center space-x-3 mb-4">
        <Code2 className="w-6 h-6 text-purple-400" />
        <span className="text-white font-medium">REST API Endpoints</span>
      </div>

      {/* Endpoint List */}
      <div className="space-y-2">
        {visual.endpoints.map((endpoint: any, index: number) => (
          <motion.div
            key={index}
            className={`p-3 rounded-lg border transition-all duration-300 ${
              index === activeEndpoint 
                ? 'border-purple-500/50 bg-purple-500/10' 
                : 'border-slate-700/50 bg-slate-800/30'
            }`}
            animate={{
              scale: index === activeEndpoint ? 1.02 : 1,
              opacity: index === activeEndpoint ? 1 : 0.7
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className={`text-xs px-2 py-1 rounded font-mono ${methodColors[endpoint.method]}`}>
                  {endpoint.method}
                </span>
                <span className="text-gray-300 font-mono text-sm">{endpoint.path}</span>
              </div>
              <div className={`text-xs px-2 py-1 rounded ${
                endpoint.status < 300 ? 'text-green-400 bg-green-400/20' : 'text-red-400 bg-red-400/20'
              }`}>
                {endpoint.status}
              </div>
            </div>
            
            {/* Request Animation */}
            {index === activeEndpoint && (
              <motion.div
                className="mt-2 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs">API Status: Healthy</span>
      </div>
    </div>
  );
}

function InventoryVisual({ visual, className }: { visual: any; className: string }) {
  return (
    <div className={`bg-slate-900/50 rounded-2xl p-6 ${className}`}>
      {/* Inventory Header */}
      <div className="flex items-center space-x-3 mb-4">
        <Package className="w-6 h-6 text-orange-400" />
        <span className="text-white font-medium">Inventory Status</span>
      </div>

      {/* Inventory Items */}
      <div className="space-y-3">
        {visual.items.map((item: any, index: number) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">{item.name}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className={`flex items-center space-x-1 ${
                item.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <motion.div
                  animate={{ y: item.trend === 'up' ? [-2, 2] : [2, -2] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className={`w-0 h-0 ${
                    item.trend === 'up' 
                      ? 'border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-green-400'
                      : 'border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-red-400'
                  }`}
                />
              </div>
              <span className="text-white font-mono text-lg">{item.stock}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-4 p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Total Items</span>
          <span className="text-white font-bold">
            {visual.items.reduce((sum: number, item: any) => sum + item.stock, 0)}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function DefaultVisual({ className }: { className: string }) {
  return (
    <div className={`bg-slate-900/50 rounded-2xl p-6 flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
      />
      <div className="absolute">
        <Code2 className="w-8 h-8 text-purple-400" />
      </div>
    </div>
  );
}
