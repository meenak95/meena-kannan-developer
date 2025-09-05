import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Coffee } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "meenakannan92@gmail.com",
      href: "mailto:meenakannan92@gmail.com",
      color: "text-purple-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+65 87373057",
      href: "tel:+6587373057",
      color: "text-cyan-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Singapore",
      href: "#",
      color: "text-green-400"
    },
    {
      icon: Coffee,
      title: "Coffee Chat",
      value: "Schedule a meeting",
      href: "#",
      color: "text-orange-400"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/meenak95", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/meena-kannan-mk/", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hover:text-cyan-400" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new opportunities 
            and innovative projects. Let's connect and create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Send className="w-6 h-6 mr-3 text-purple-400" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-900/50 border-slate-600 text-white focus:border-purple-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-900/50 border-slate-600 text-white focus:border-purple-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-slate-600 text-white focus:border-purple-500"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-slate-900/50 border-slate-600 text-white focus:border-purple-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 ${item.color} bg-current/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className={`w-12 h-12 bg-slate-900/30 hover:bg-slate-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-400 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Connect with me on social media to stay updated on my latest projects and insights.
                </p>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl p-6 border border-green-500/30"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for New Projects</span>
              </div>
              <p className="text-gray-300 text-sm">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
