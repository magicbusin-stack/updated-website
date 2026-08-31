import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import NavbarNew from "./NavbarNew";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <NavbarNew />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
