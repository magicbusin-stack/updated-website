// src/pages/Gallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import {
  Play,
  Image as ImageIcon,
  Calendar,
  Eye,
  Download,
  ExternalLink,
  PlayCircle,
  Camera,
  Video,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";

/**
 * Gallery Page - Combined Image and Video Gallery
 * Features:
 * - Tabbed interface for Images and Videos
 * - Modern grid layout
 * - Filter by category/year
 * - Lightbox functionality
 * - Clean, modern design
 */

/* ---------------- Gallery Data ---------------- */
const IMAGES_DATA = [
  {
    id: 1,
    title: "Advancing Excellence 2023",
    category: "Awards",
    year: "2023",
    imageUrl: "/ngo-images/1.JPG",
    description: "Recognition ceremony celebrating our achievements in youth development",
    date: "2023-12-15",
    featured: true
  },
  {
    id: 2,
    title: "Empowering Young Minds",
    category: "Programs",
    year: "2023",
    imageUrl: "/ngo-images/2.JPG",
    description: "Students participating in our skill development workshop",
    date: "2023-11-20",
    featured: true
  },
  {
    id: 3,
    title: "Community Engagement Session",
    category: "Community",
    year: "2023",
    imageUrl: "/ngo-images/3.JPG",
    description: "Interactive session with community members and beneficiaries",
    date: "2023-10-25",
    featured: false
  },
  {
    id: 4,
    title: "Leadership Training Program",
    category: "Training",
    year: "2023",
    imageUrl: "/ngo-images/4.JPG",
    description: "Young leaders participating in our capacity building program",
    date: "2023-09-30",
    featured: false
  },
  {
    id: 5,
    title: "Digital Skills Workshop",
    category: "Programs",
    year: "2023",
    imageUrl: "/ngo-images/5.JPG",
    description: "Participants learning digital literacy and computer skills",
    date: "2023-08-15",
    featured: false
  },
  {
    id: 6,
    title: "Annual Conference 2023",
    category: "Events",
    year: "2023",
    imageUrl: "/ngo-images/6.JPG",
    description: "Annual stakeholder conference showcasing our impact",
    date: "2023-07-10",
    featured: false
  },
  {
    id: 7,
    title: "Rural Outreach Program",
    category: "Outreach",
    year: "2022",
    imageUrl: "/ngo-images/1.JPG",
    description: "Extending our programs to rural communities",
    date: "2022-12-05",
    featured: false
  },
  {
    id: 8,
    title: "Women Empowerment Initiative",
    category: "Programs",
    year: "2022",
    imageUrl: "/ngo-images/2.JPG",
    description: "Supporting women entrepreneurs in their journey",
    date: "2022-11-18",
    featured: false
  }
];

const VIDEOS_DATA = [
  {
    id: 1,
    title: "Emerging From Shadows - Viral",
    category: "Impact Stories",
    year: "2023",
    thumbnailUrl: "/ngo-images/3.JPG",
    videoUrl: "#",
    duration: "3:45",
    description: "Inspiring story of transformation through our programs",
    date: "2023-12-01",
    featured: true,
    views: "125K"
  },
  {
    id: 2,
    title: "Emerging From Shadows - Mumbai",
    category: "Impact Stories",
    year: "2023",
    thumbnailUrl: "/ngo-images/4.JPG",
    videoUrl: "#",
    duration: "4:20",
    description: "Stories from our Mumbai intervention programs",
    date: "2023-11-15",
    featured: true,
    views: "89K"
  },
  {
    id: 3,
    title: "Emerging From Shadows - Pune",
    category: "Impact Stories",
    year: "2023",
    thumbnailUrl: "/ngo-images/5.JPG",
    videoUrl: "#",
    duration: "3:55",
    description: "Impact stories from our Pune operations",
    date: "2023-10-30",
    featured: false,
    views: "67K"
  },
  {
    id: 4,
    title: "Creating Magic in the Lives with Abhishek Bachchan",
    category: "Celebrity Support",
    year: "2023",
    thumbnailUrl: "/ngo-images/6.JPG",
    videoUrl: "#",
    duration: "5:12",
    description: "Celebrity ambassador supporting our cause",
    date: "2023-09-20",
    featured: false,
    views: "234K"
  },
  {
    id: 5,
    title: "Magic Bus - Creating Impact All Hours",
    category: "Programs",
    year: "2023",
    thumbnailUrl: "/ngo-images/1.JPG",
    videoUrl: "#",
    duration: "2:30",
    description: "24/7 commitment to creating lasting impact",
    date: "2023-08-25",
    featured: false,
    views: "45K"
  },
  {
    id: 6,
    title: "International Youth Day 2023",
    category: "Events",
    year: "2023",
    thumbnailUrl: "/ngo-images/2.JPG",
    videoUrl: "#",
    duration: "6:15",
    description: "Celebrating International Youth Day with our beneficiaries",
    date: "2023-08-12",
    featured: false,
    views: "78K"
  }
];

/* ---------------- Hero Section ---------------- */
function GalleryHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/ngo-images/1.JPG"
        alt="Magic Bus Gallery"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
            Visual Stories
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Capturing the Magical Moments
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Explore our collection of images and videos that showcase the transformative 
            journey of young lives and the impact we create in communities across India.
          </p>

          <div className="mt-6">
            <motion.a
              href="#gallery"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Gallery
                <Camera className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Tab Navigation ---------------- */
function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'images', label: 'Images', icon: <ImageIcon className="w-5 h-5" />, count: IMAGES_DATA.length },
    { id: 'videos', label: 'Videos', icon: <Video className="w-5 h-5" />, count: VIDEOS_DATA.length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-sm">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-red text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id 
                    ? "bg-white/20 text-white" 
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Filter Section ---------------- */
function FilterSection({ activeFilter, setActiveFilter, activeYear, setActiveYear, type }) {
  const imageCategories = ["All", "Programs", "Awards", "Events", "Community", "Training"];
  const videoCategories = ["All", "Impact Stories", "Programs", "Events", "Celebrity Support"];
  const years = ["All Years", "2023", "2022", "2021"];
  
  const categories = type === 'images' ? imageCategories : videoCategories;

  return (
    <div className="max-w-7xl mx-auto px-6 mb-8">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Category Filter */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-600 mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeFilter === category
                      ? "bg-brand-red text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-8 bg-slate-200"></div>

          {/* Year Filter */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-600 mr-2">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeYear === year
                      ? "bg-brand-red text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Image Card Component ---------------- */
function ImageCard({ image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Overlay Icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          {image.featured && (
            <span className="bg-brand-red text-white px-2 py-1 rounded-md text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="bg-white/90 text-slate-700 p-2 rounded-lg hover:bg-white transition-colors">
              <Eye className="w-5 h-5" />
            </button>
            <button className="bg-white/90 text-slate-700 p-2 rounded-lg hover:bg-white transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
            {image.category}
          </span>
          <span className="text-xs text-slate-500">{image.year}</span>
        </div>
        
        <h3 className="font-bold text-ink mb-2 line-clamp-1 group-hover:text-brand-red transition-colors">
          {image.title}
        </h3>
        
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
          {image.description}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(image.date).toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            })}
          </span>
          <button className="text-brand-red hover:text-brand-red/80 font-medium">
            View Full Size
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Video Card Component ---------------- */
function VideoCard({ video, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
          }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 text-brand-red p-4 rounded-full group-hover:bg-white group-hover:scale-110 transition-all duration-300">
            <Play className="w-8 h-8 fill-current" />
          </div>
        </div>

        {/* Duration & Featured Badge */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium">
            {video.duration}
          </span>
          {video.featured && (
            <span className="bg-brand-red text-white px-2 py-1 rounded-md text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Views */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            {video.views} views
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
            {video.category}
          </span>
          <span className="text-xs text-slate-500">{video.year}</span>
        </div>
        
        <h3 className="font-bold text-ink mb-2 line-clamp-1 group-hover:text-brand-red transition-colors">
          {video.title}
        </h3>
        
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
          {video.description}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(video.date).toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            })}
          </span>
          <button className="text-brand-red hover:text-brand-red/80 font-medium flex items-center gap-1">
            <PlayCircle className="w-4 h-4" />
            Watch Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Main Gallery Component ---------------- */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState('images');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeYear, setActiveYear] = useState('All Years');

  // Filter data based on active filters
  const filteredImages = IMAGES_DATA.filter(image => {
    const matchesCategory = activeFilter === 'All' || image.category === activeFilter;
    const matchesYear = activeYear === 'All Years' || image.year === activeYear;
    return matchesCategory && matchesYear;
  });

  const filteredVideos = VIDEOS_DATA.filter(video => {
    const matchesCategory = activeFilter === 'All' || video.category === activeFilter;
    const matchesYear = activeYear === 'All Years' || video.year === activeYear;
    return matchesCategory && matchesYear;
  });

  return (
    <Layout>
      <main className="bg-slate-50 text-ink min-h-screen">
        <GalleryHero />
        
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <FilterSection 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
          type={activeTab}
        />

        {/* Gallery Content */}
        <section id="gallery" className="pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatePresence mode="wait">
              {activeTab === 'images' ? (
                <motion.div
                  key="images"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-ink mb-2">
                      Image Gallery
                    </h2>
                    <p className="text-slate-600">
                      {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} found
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                      <ImageCard key={image.id} image={image} index={index} />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="videos"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-ink mb-2">
                      Video Gallery
                    </h2>
                    <p className="text-slate-600">
                      {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'} found
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map((video, index) => (
                      <VideoCard key={video.id} video={video} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </Layout>
  );
}