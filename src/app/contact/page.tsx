// // "use client"

// // import { useEffect, useState } from "react"
// // import AOS from "aos"
// // import "aos/dist/aos.css"
// // import { motion } from "framer-motion"
// // import { Mail, Phone, MapPin, Send } from "lucide-react"

// // export default function ContactPage() {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000,
// //       offset: 120,
// //       once: true,
// //       easing: "ease-in-out",
// //     });
// //   }, []);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (isSubmitting) return;
// //     setIsSubmitting(true);

// //     try {
// //       await fetch(
// //         "https://script.google.com/macros/s/AKfycbwWaRP0PorUE-yIsxWjB4S1A20htXft0RI34glbIJ0LBFjeaCQ5nbFeqlU4xBiQHPLTqQ/exec",
// //         {
// //           method: "POST",
// //           mode: "no-cors",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData),
// //         }
// //       );
// //       setFormData({ name: "", email: "", company: "", message: "" });
// //       setIsSubmitting(false);
// //       alert("Message sent successfully!");
// //     } catch (error) {
// //       console.error("Error:", error);
// //       setIsSubmitting(false);
// //       alert("Network error. Try again later.");
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen pt-32 pb-20">
// //       <div className="fixed inset-0 -z-10 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100" />

// //       <div className="container mx-auto px-4 max-w-7xl">
// //         {/* Hero Text */}
// //         <div data-aos="fade-up" className="text-center mb-16">
// //           <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance">
// //             Get in
// //             <span className="block text-blue-500">Touch</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
// //             Ready to transform your retail operations? Let's talk about your needs.
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-2 gap-8">
// //           {/* Contact Form */}
// //           <div data-aos="fade-right">
// //             <div className="glass rounded-3xl p-10 shadow-xl mb-8">
// //               <h2 className="text-3xl font-light mb-8">Send us a message</h2>

// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 {["name", "email", "company"].map((field, index) => (
// //                   <div data-aos="fade-up" data-aos-delay={index * 100} key={field}>
// //                     <label htmlFor={field} className="block text-sm font-medium mb-2 capitalize">
// //                       {field === "email" ? "Email Address" : field === "company" ? "Company Name" : "Full Name"}
// //                     </label>
// //                     <input
// //                       type={field === "email" ? "email" : "text"}
// //                       id={field}
// //                       value={(formData as any)[field]}
// //                       onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
// //                       className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
// //                       placeholder={field === "email" ? "john@example.com" : field === "company" ? "Your Company" : "John Doe"}
// //                       required={field !== "company"}
// //                     />
// //                   </div>
// //                 ))}

// //                 {/* Message */}
// //                 <div data-aos="fade-up" data-aos-delay="300">
// //                   <label htmlFor="message" className="block text-sm font-medium mb-2">
// //                     Message
// //                   </label>
// //                   <textarea
// //                     id="message"
// //                     value={formData.message}
// //                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //                     rows={5}
// //                     className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
// //                     placeholder="Tell us about your project..."
// //                     required
// //                   />
// //                 </div>

// //                 {/* Button */}
// //                 <motion.button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   whileHover={!isSubmitting ? { scale: 1.02 } : {}}
// //                   whileTap={!isSubmitting ? { scale: 0.98 } : {}}
// //                   className={`w-full px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors glow-blue-sm ${isSubmitting
// //                       ? "bg-blue-400 text-white cursor-not-allowed"
// //                       : "bg-blue-500 hover:bg-blue-600 text-white"
// //                     }`}
// //                 >
// //                   {isSubmitting ? (
// //                     <>
// //                       <svg
// //                         className="animate-spin h-5 w-5 text-white"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="none"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <circle
// //                           className="opacity-25"
// //                           cx="12"
// //                           cy="12"
// //                           r="10"
// //                           stroke="currentColor"
// //                           strokeWidth="4"
// //                         ></circle>
// //                         <path
// //                           className="opacity-75"
// //                           fill="currentColor"
// //                           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
// //                         ></path>
// //                       </svg>
// //                       Sending...
// //                     </>
// //                   ) : (
// //                     <>
// //                       <Send className="w-5 h-5" />
// //                       Send Message
// //                     </>
// //                   )}
// //                 </motion.button>
// //               </form>
// //             </div>
// //           </div>

// //           {/* Contact Info */}
// //           <div data-aos="fade-left" data-aos-delay="200" className="space-y-6">
// //             <div className="glass rounded-3xl p-10 shadow-xl" data-aos="zoom-in" data-aos-delay="300">
// //               <h2 className="text-3xl font-light mb-8">Contact Information</h2>

//   // <div className="space-y-6">
//   //               {[
//   //                 {
//   //                   icon: Mail,
//   //                   title: "Email",
//   //                   content: (
//   //                     <a
//   //                       href="mailto:info@onetag.uz"
//   //                       className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//   //                     >
//   //                       info@onetag.uz
//   //                     </a>
//   //                   ),
//   //                 },
//   //                 {
//   //                   icon: Phone,
//   //                   title: "Phone",
//   //                   content: (
//   //                     <a
//   //                       href="tel:+998999178111"
//   //                       className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//   //                     >
//   //                       +998 99 917 8111
//   //                     </a>
//   //                   ),
//                   // },
// //               <div className="space-y-6">
// //                 {[{
// //                   icon: Mail,
// //                   title: "Email",
// //                   content: (
// //                     <a
// //                       href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="text-muted-foreground hover:text-blue-500 transition-colors"
// //                     >
// //                       info@onetag.uz
// //                     </a>
// //                   )
// //                 },
// //                 {
// //                   icon: Phone,
// //                   title: "Phone",
// //                   content: (
// //                     <a href="tel:+998999178111" className="text-muted-foreground hover:text-blue-500 transition-colors">
// //                       +998999178111
// //                     </a>
// //                   )
// //                 },
// //                 {
// //                   icon: MapPin,
// //                   title: "Office",
// //                   content: (
// //                     <p className="text-muted-foreground">
// //                       Republic of Uzbekistan, Tashkent region, Chirchik city, Sharof Rashidov Street 4<br />
// //                       Amir Temur Street, 100<br />
// //                       Uzbekistan
// //                     </p>
// //                   )
// //                 }].map((item, i) => (
// //                   <div key={i} data-aos="fade-up" data-aos-delay={400 + i * 150} className="flex items-start gap-4">
// //                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
// //                       <item.icon className="w-6 h-6 text-blue-500" />
// //                     </div>
// //                     <div>
// //                       <h3 className="font-medium mb-1">{item.title}</h3>
// //                       {item.content}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Business Hours */}
// //             <div className="glass rounded-3xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="700">
// //               <h3 className="text-2xl font-light mb-4">Business Hours</h3>
// //               <div className="space-y-2 text-muted-foreground">
// //                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
// //                 <p>Saturday: 10:00 AM - 4:00 PM</p>
// //                 <p>Sunday: Closed</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import { useEffect, useState } from "react"
// import AOS from "aos"
// import "aos/dist/aos.css"
// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send } from "lucide-react"

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })

//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100, once: true, easing: "ease-out" })
//   }, [])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSubmitting) return;
//     setIsSubmitting(true);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbwWaRP0PorUE-yIsxWjB4S1A20htXft0RI34glbIJ0LBFjeaCQ5nbFeqlU4xBiQHPLTqQ/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       setFormData({ name: "", email: "", company: "", message: "" });
//       setIsSubmitting(false);
//       alert("Message sent successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       setIsSubmitting(false);
//       alert("Network error. Try again later.");
//     }
//   };

//   return (
//     <div className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-700">
//       {/*  Dynamic gradient background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-slate-200 dark:from-[#0a0a0a] dark:via-[#111827] dark:to-[#0f172a]" />
//         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-700/30 rounded-full blur-[180px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-400/20 dark:bg-indigo-800/30 rounded-full blur-[180px]" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl">
//         {/*  Heading Section */}
//         <div data-aos="fade-up" className="text-center mb-20">
//           <h1 className="text-5xl md:text-7xl font-light leading-tight">
//             Let's{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400">
//               Connect
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
//             We’d love to hear from you — tell us how we can help transform your retail experience.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-10 items-start">
//           {/*  Contact Form */}
//           <motion.div
//             data-aos="fade-right"
//             className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)] p-10"
//           >
//             <h2 className="text-3xl font-light mb-8 text-slate-900 dark:text-white">Send us a message</h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {["name", "email", "company"].map((field, index) => (
//                 <div data-aos="fade-up" data-aos-delay={index * 100} key={field}>
//                   <label htmlFor={field} className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
//                     {field === "email"
//                       ? "Email Address"
//                       : field === "company"
//                       ? "Company Name"
//                       : "Full Name"}
//                   </label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     id={field}
//                     value={(formData as any)[field]}
//                     onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/70 border border-slate-300/30 dark:border-slate-600/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-300"
//                     placeholder={
//                       field === "email"
//                         ? "john@example.com"
//                         : field === "company"
//                         ? "Your Company"
//                         : "John Doe"
//                     }
//                     required={field !== "company"}
//                   />
//                 </div>
//               ))}

//               {/* Message */}
//               <div data-aos="fade-up" data-aos-delay="300">
//                 <label htmlFor="message" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/70 border border-slate-300/30 dark:border-slate-600/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-300 resize-none"
//                   placeholder="Tell us about your project..."
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={!isSubmitting ? { scale: 1.03 } : {}}
//                 whileTap={!isSubmitting ? { scale: 0.97 } : {}}
//                 className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-medium transition-all duration-500 shadow-md ${
//                   isSubmitting
//                     ? "bg-blue-400 text-white cursor-not-allowed"
//                     : "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20"
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <svg
//                     className="animate-spin h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                     ></path>
//                   </svg>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" /> Send Message
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* 📞 Contact Info + Hours */}
//           <motion.div data-aos="fade-left" className="space-y-8">
//             <div className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/50 p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)]">
//               <h2 className="text-3xl font-light mb-8 text-slate-900 dark:text-white">Contact Information</h2>

//                 <div className="space-y-6">
//                 {[{
//                   icon: Mail,
//                   title: "Email",
//                   content: (
//                     <a
//                       href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-muted-foreground hover:text-blue-500 transition-colors"
//                     >
//                       info@onetag.uz
//                     </a>
//                   )
//                 },
//                 {
//                   icon: Phone,
//                   title: "Phone",
//                   content: (
//                     <a href="tel:+998999178111" className="text-muted-foreground hover:text-blue-500 transition-colors">
//                       +998999178111
//                     </a>
//                   )
//                 },
//                   {
//                     icon: MapPin,
//                     title: "Office",
//                     content: (
//                       <p className="text-slate-600 dark:text-slate-300">
//                         Republic of Uzbekistan, Tashkent region, Chirchik city, Sharof Rashidov Street 4
//                         <br />
//                         Amir Temur Street, 100, Uzbekistan
//                       </p>
//                     ),
//                   },
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center flex-shrink-0">
//                       <item.icon className="w-6 h-6 text-blue-500" />
//                     </div>
//                     <div>
//                       <h3 className="font-medium mb-1 text-slate-800 dark:text-white">{item.title}</h3>
//                       {item.content}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/50 p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)]">
//               <h3 className="text-2xl font-light mb-4 text-slate-900 dark:text-white">Business Hours</h3>
//               <div className="space-y-2 text-slate-600 dark:text-slate-300">
//                 <p>Monday - Friday: 9:00 AM – 6:00 PM</p>
//                 <p>Saturday: 10:00 AM – 4:00 PM</p>
//                 <p>Sunday: Closed</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import { useState } from "react"

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     setIsSubmitting(true);

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwWaRP0PorUE-yIsxWjB4S1A20htXft0RI34glbIJ0LBFjeaCQ5nbFeqlU4xBiQHPLTqQ/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       setFormData({ name: "", email: "", company: "", message: "" });
//       setIsSubmitting(false);
//       alert("Message sent successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       setIsSubmitting(false);
//       alert("Network error. Try again later.");
//     }
//   };

//   return (
//     <div className="relative min-h-screen pt-32 pb-20">
//       <div className="fixed inset-0 -z-10 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100" />

//       <div className="container mx-auto px-4 max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance">
//             Get in
//             <span className="block text-blue-500">Touch</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
//             Ready to transform your retail operations? Let's talk about your needs.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="glass rounded-3xl p-10 shadow-xl mb-8">
//               <h2 className="text-3xl font-light mb-8">Send us a message</h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium mb-2">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     value={formData.company}
//                     onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                     placeholder="Your Company"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
//                     placeholder="Tell us about your project..."
//                     required
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                   whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                   className={`w-full px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors glow-blue-sm ${isSubmitting
//                       ? "bg-blue-400 text-white cursor-not-allowed"
//                       : "bg-blue-500 hover:bg-blue-600 text-white"
//                     }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg
//                         className="animate-spin h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                         ></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </>
//                   )}
//                 </motion.button>

//               </form>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="space-y-6"
//           >
//             <div className="glass rounded-3xl p-10 shadow-xl">
//               <h2 className="text-3xl font-light mb-8">Contact Information</h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-6 h-6 text-blue-500" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Email</h3>
//                     <a
//                       href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag&body=Hi%20Team,"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-muted-foreground hover:text-blue-500 transition-colors"
//                     >
//                       info@onetag.uz
//                     </a>

//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-6 h-6 text-blue-500" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Phone</h3>
//                     <a
//                       href="tel:+998999178111"
//                       className="text-muted-foreground hover:text-blue-500 transition-colors"
//                     >
//                       +998999178111
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-blue-500" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Office</h3>
//                     <p className="text-muted-foreground">
//                       Republic of Uzbekistan, Tashkent region, Chirchik city, Sharof Rashidov Street  house 4
//                       <br />
//                       Amir Temur Street, 100
//                       <br />
//                       Uzbekistan
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="glass rounded-3xl p-10 shadow-xl">
//               <h3 className="text-2xl font-light mb-4">Business Hours</h3>
//               <div className="space-y-2 text-muted-foreground">
//                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//                 <p>Saturday: 10:00 AM - 4:00 PM</p>
//                 <p>Sunday: Closed</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap, Sparkles } from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import FloatingParticles from "@/src/components/FloatingParticles";
import { useLanguage } from "@/src/contexts/language-context";
import AnimationText from "@/src/components/Animation-text";

const heroSection = {
  en: {
    title: " Get in Touch",
    description: `Ready to transform your retail operations? Let’s discuss how we can meet your needs.`,
  },
  ru: {
    title: "Свяжитесь с нами",
    description: `Готовы трансформировать ваши розничные процессы? Давайте обсудим ваши потребности.`,
  },
  uz: {
    title: "Biz bilan bog‘laning",
    description: ` Chakana savdo jarayonlaringizni o‘zgartirishga tayyormisiz? Keling, ehtiyojlaringiz haqida gaplashamiz.`,
  },
};

const formSection = {
  en: {
    title: "Send us a message",
    fields: ["Full Name", "Email Address", "Company Name"],
    message: "Message",
    messagePlaceholder: "Tell us about your project...",
    button: "Send Message",
  },
  ru: {
    title: "Отправьте нам сообщение",
    fields: ["Полное имя", "Адрес электронной почты", "Название компании"],
    message: "Сообщение",
    messagePlaceholder: "Расскажите нам о вашем проекте…",
    button: "Отправить сообщение",
  },
  uz: {
    title: "Bizga xabar yuboring",
    fields: ["To‘liq ism", "Elektron pochta manzili", "Kompaniya nomi"],
    message: "Xabar",
    messagePlaceholder: "Loyihangiz haqida bizga aytib bering…",
    button: "Xabar yuborish",
  },
};

const contactSection = {
  en: {
    title: "Contact Information:",
    fields1: {
      email: "Email",
      phone: "Phone",
      office: "Office",
      address: `Republic of Uzbekistan, Tashkent region, Chirchik city, Sharof Rashidov Street 4`,
      street: "Amir Temur Street, 100",
      country: "Uzbekistan",
    },
    fields: [
      {
        icon: Mail,
        title: "Email",
        gradient: "from-blue-400 to-cyan-500",
        content: (
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            info@onetag.uz
          </a>
        ),
      },
      {
        icon: Phone,
        title: "Phone",
        gradient: "from-purple-400 to-pink-500",
        content: (
          <a
            href="tel:+998999178111"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            +998999178111
          </a>
        ),
      },
      {
        icon: MapPin,
        title: "Office",
        gradient: "from-indigo-400 to-violet-500",
        content: (
          <p className="text-muted-foreground">
            Republic of Uzbekistan, Tashkent region, Chirchik city, Sharof
            Rashidov Street 4<br />
            Amir Temur Street, 100
            <br />
            Uzbekistan
          </p>
        ),
      },
    ],
  },
  ru: {
    title: "Контактная информация:",
    fields1: {
      email: "Email",
      phone: "Телефон",
      office: "Офис",
      address: `Республика Узбекистан, Ташкентская область, город Чирчик, улица Шароф Рашидов 4`,
      street: "улица Амира Темура, 100",
      country: "Узбекистан",
    },
    fields: [
      {
        icon: Mail,
        title: "Email",
        gradient: "from-blue-400 to-cyan-500",
        content: (
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            info@onetag.uz
          </a>
        ),
      },
      {
        icon: Phone,
        title: "Телефон",
        gradient: "from-purple-400 to-pink-500",
        content: (
          <a
            href="tel:+998999178111"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            +998999178111
          </a>
        ),
      },
      {
        icon: MapPin,
        title: "Офис",
        gradient: "from-indigo-400 to-violet-500",
        content: (
          <p className="text-muted-foreground">
            Республика Узбекистан, Ташкентская область, город Чирчик, улица Шароф Рашидов 4
            улица Амира Темура, 100<br />
            Amir Temur Street, 100
            <br />
            Узбекистан
          </p>
        ),
      },
    ],
  },
  uz: {
    title: "Aloqa ma’lumotlari:",
    fields1: {
      email: "Email",
      phone: "Telefon",
      office: "Ofis",
      address: `O‘zbekiston Respublikasi, Toshkent viloyati, Chirchiq shahri, Sharof Rashidov ko‘chasi 4`,
      street: "Amir Temur ko‘chasi, 100",
      country: "O‘zbekiston",
    },
    fields: [
      {
        icon: Mail,
        title: "Email",
        gradient: "from-blue-400 to-cyan-500",
        content: (
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            info@onetag.uz
          </a>
        ),
      },
      {
        icon: Phone,
        title: "Telefon",
        gradient: "from-purple-400 to-pink-500",
        content: (
          <a
            href="tel:+998999178111"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            +998999178111
          </a>
        ),
      },
      {
        icon: MapPin,
        title: "Ofis",
        gradient: "from-indigo-400 to-violet-500",
        content: (
          <p className="text-muted-foreground">
            O‘zbekiston Respublikasi, Toshkent viloyati, Chirchiq shahri, Sharof Rashidov ko‘chasi 4
            Amir Temur ko‘chasi, 100<br />
            Amir Temur Street, 100
            <br />
            O‘zbekiston
          </p>
        ),
      },
    ],
  },
};

const businessSection = {
  en: {
    title: "Business Hours:",
    weekdays: [
      { day: "Monday – Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  ru: {
    title: "Часы работы:",
    weekdays: [
      { day: "Понедельник – Пятница", time: "9:00 – 18:00" },
      { day: "Суббота", time: "10:00 – 16:00" },
      { day: "Воскресенье", time: "Закрыто" },
    ],
  },
  uz: {
    title: "Ish vaqti:",
    weekdays: [
      { day: "Dushanba – Juma", time: "9:00 – 18:00" },
      { day: "Shanba", time: "10:00 – 16:00" },
      { day: "Yakshanba", time: "Yopiq" },
    ],
  },
};

export default function ContactPage() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwWaRP0PorUE-yIsxWjB4S1A20htXft0RI34glbIJ0LBFjeaCQ5nbFeqlU4xBiQHPLTqQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      alert("Network error. Try again later.");
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(ellipse at 20% 30%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 25% 35%, rgba(76, 158, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(76, 158, 255, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 20% 30%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                ]
              : [
                  "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                  "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
                  "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 -z-10"
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <FadeAnimation
          staggerChildren={0.3}
          className="text-center mb-10 sm:mb-20"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-6 text-black dark:text-white text-balance max-w-[1400px] mx-auto">
            <AnimationText onRepeat={true}>
              {heroSection[language].title.split(" ").slice(0, 2).join(" ")}
            </AnimationText>{" "}
            {heroSection[language].title.split(" ").slice(2).join(" ")}
          </h1>
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 text-balance">
            <span className="block">
              Get in{" "}
              <span
                className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    theme === "dark"
                      ? "linear-gradient(90deg, #4c9eff, #7bb3ff, #4c9eff)"
                      : "linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Touch
              </span>
            </span>
          </h1> */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {heroSection[language].description}
          </p>
        </FadeAnimation>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateX: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0 }}
            className="relative group"
          >
            <div className="glass rounded-3xl p-4 sm:p-10 shadow-2xl border border-primary/10 relative overflow-hidden group-hover:border-primary/20 transition-all duration-300">
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
              />

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl 3md:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {formSection[language].title}
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {["name", "email", "company"].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group/input"
                  >
                    <label
                      htmlFor={field}
                      className="block text-sm font-bold mb-2 capitalize text-foreground/80"
                    >
                      {field === "email"
                        ? "Email Address"
                        : field === "company"
                        ? "Company Name"
                        : "Full Name"}
                    </label>
                    <motion.input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      value={(formData as any)[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className={`w-full px-5 py-4 rounded-xl ${
                        theme === "dark"
                          ? "bg-gray-800/50 backdrop-blur-sm border border-primary/20"
                          : "bg-white/80 backdrop-blur-sm border border-primary/20"
                      } focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all shadow-lg hover:shadow-xl group-hover/input:border-primary/30`}
                      placeholder={
                        field === "email"
                          ? "john@example.com"
                          : field === "company"
                          ? "Your Company"
                          : "John Doe"
                      }
                      required={field !== "company"}
                    />
                  </motion.div>
                ))}

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group/input"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold mb-2 text-foreground/80"
                  >
                    {formSection[language].message}
                  </label>
                  <motion.textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full px-5 py-4 rounded-xl ${
                      theme === "dark"
                        ? "bg-gray-800/50 backdrop-blur-sm border border-primary/20"
                        : "bg-white/80 backdrop-blur-sm border border-primary/20"
                    } focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all resize-none shadow-lg hover:shadow-xl group-hover/input:border-primary/30`}
                    placeholder={formSection[language].messagePlaceholder}
                    required
                  />
                </motion.div>

                {/* Enhanced Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  // whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className={`relative w-full px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 overflow-hidden hover:scale-105 hover:-translate-0.5 cursor-pointer transition-all! duration-300 group/btn ${
                    isSubmitting
                      ? "bg-primary/60 text-white cursor-not-allowed"
                      : "bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-xl hover:shadow-2xl shadow-primary/30"
                  } transition-all duration-300`}
                >
                  {/* Shimmer effect */}
                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform! duration-300" />
                        <span>{formSection[language].button}</span>
                        <Sparkles className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-4 sm:p-10 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
              />

              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl 3md:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {contactSection[language].title}
              </motion.h2>

              <div className="space-y-6 relative z-10">
                {contactSection[language].fields.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform! duration-300"
                  >
                    <motion.div
                      className={`size-12 3md:size-14 rounded-xl bg-linear-to-br ${item.gradient} opacity-40 flex items-center justify-center shrink-0 group-hover/item:opacity-60 transition-all duration-300 ring-2 ring-primary/20 group-hover/item:ring-primary/40 shadow-xl shadow-primary/20`}
                    >
                      <item.icon className="size-7 text-white drop-shadow-xl stroke-[2.5]" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass rounded-3xl p-4 sm:p-10 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
              />

              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent relative z-10"
              >
                {businessSection[language].title}
              </motion.h3>
              <div className="space-y-3 text-muted-foreground relative z-10">
                {businessSection[language].weekdays.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <span className="font-medium">{schedule.day}:</span>
                    <span className="text-primary font-semibold">
                      {schedule.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
