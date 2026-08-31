'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Zap, 
  Droplet, 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  MapPin,
  Flame,
  Wrench
} from 'lucide-react';
import { siteConfig, navigationConfig } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    if (!siteConfig.isPhoneConfigured() && !siteConfig.isWhatsAppConfigured()) {
      e.preventDefault();
      openContactModal();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification & Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>خدمة طوارئ 24/7 بجميع أحياء الرياض</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>شمال، شرق، غرب، جنوب ووسط الرياض</span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <span className="hidden md:inline-block text-slate-400">
              فنيون معتمدون ومعدات حديثة
            </span>
            <button
              onClick={() => openContactModal()}
              className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>طلب معاينة فورية</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        isScrolled ? 'shadow-md border-b border-slate-200/80 py-3' : 'border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo / Brand Name */}
          <Link 
            href="/" 
            id="header-brand-logo"
            className="flex items-center gap-3 group shrink-0"
            aria-label="الرئيسية - فني كهرباء وسباكة الرياض"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-sky-700 flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform duration-200">
              <div className="relative flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400 fill-amber-400 absolute -translate-x-1.5 -translate-y-1 drop-shadow" />
                <Droplet className="w-5 h-5 text-sky-300 fill-sky-300 translate-x-1.5 translate-y-1 drop-shadow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                صيانة وتأسيس منازل وفلل بالرياض
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationConfig.mainNav.map((item) => {
              if (item.isDropdown && item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative group py-2"
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        pathname.startsWith(item.href)
                          ? 'text-blue-700 bg-blue-50/80'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                      aria-expanded={openDropdown === item.title}
                    >
                      {item.title.includes('كهرباء') ? (
                        <Zap className="w-4 h-4 text-amber-500" />
                      ) : (
                        <Droplet className="w-4 h-4 text-sky-500" />
                      )}
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full right-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      <div className="px-3 py-2 border-b border-slate-100 text-xs font-bold text-slate-400">
                        {item.title} بالرياض
                      </div>
                      <div className="mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="font-bold text-sm text-slate-800 group-hover/item:text-blue-600">
                              {child.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {child.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {siteConfig.isWhatsAppConfigured() ? (
              <a
                id="header-cta-whatsapp"
                href={siteConfig.getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-sm rounded-xl transition border border-emerald-200/80"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>واتساب</span>
              </a>
            ) : null}

            <button
              id="header-cta-call"
              onClick={() => openContactModal()}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-700/20 hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>اطلب فني الآن</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-call-btn"
              onClick={() => openContactModal()}
              className="p-2.5 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition"
              aria-label="طلب فني"
            >
              <Phone className="w-5 h-5" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-slate-950/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-5 text-right flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-slate-900">القائمة الرئيسية</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                  الرياض 24/7
                </span>
              </div>

              {/* Navigation Items in Mobile */}
              <div className="space-y-1">
                {navigationConfig.mainNav.map((item) => {
                  if (item.isDropdown && item.children) {
                    const isExpanded = openDropdown === item.title;
                    return (
                      <div key={item.href} className="rounded-xl border border-slate-100 overflow-hidden">
                        <button
                          onClick={() => setOpenDropdown(isExpanded ? null : item.title)}
                          className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                        >
                          <div className="flex items-center gap-2">
                            {item.title.includes('كهرباء') ? (
                              <Zap className="w-4 h-4 text-amber-500" />
                            ) : (
                              <Droplet className="w-4 h-4 text-sky-500" />
                            )}
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isExpanded && (
                          <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block p-3 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block p-3.5 rounded-xl text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openContactModal();
                }}
                className="w-full py-3.5 bg-blue-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-blue-800 transition"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب فني الآن (معاينة فورية)</span>
              </button>

              <p className="text-center text-[11px] text-slate-400">
                فني كهرباء وسباكة متخصص في منازل وفلل الرياض
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
