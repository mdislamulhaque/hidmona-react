import React, { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import enFlag from "/flags/uk.png";
import frFlag from "/flags/france.png";

export default function LanguageToggle() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // ভাষা পরিবর্তনের ফাংশন
  const changeLanguage = (language) => {
    console.log("Changing language to:", language);

    setLang(language);
    localStorage.setItem("preferred-language", language);
    setOpen(false);

    // Google Translate কে ভাষা পরিবর্তন করতে বলুন
    translatePage(language);
  };

  // Google Translate দিয়ে পৃষ্ঠা অনুবাদ করার ফাংশন
  const translatePage = (language) => {
    // Method 1: Select element ব্যবহার করে
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = language;
      const event = new Event("change", { bubbles: true });
      select.dispatchEvent(event);
      console.log("Language changed via select element");
      return;
    }

    // Method 2: Google Translate API সরাসরি ব্যবহার করে
    if (window.google && window.google.translate) {
      try {
        const translateInstance =
          window.google.translate.TranslateElement.getInstance();
        if (translateInstance) {
          translateInstance.translatePage(language);
          console.log("Language changed via API instance");
          return;
        }
      } catch (error) {
        console.log("API instance error:", error);
      }
    }

    // Method 3: Fallback - iframe খুঁজে পরিবর্তন করুন
    setTimeout(() => {
      const iframe = document.querySelector(".goog-te-menu-frame");
      if (iframe) {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        const iframeSelect = iframeDoc.querySelector("select");
        if (iframeSelect && iframeSelect.value !== language) {
          iframeSelect.value = language;
          const iframeEvent = new Event("change", { bubbles: true });
          iframeSelect.dispatchEvent(iframeEvent);
          console.log("Language changed via iframe");
        }
      }
    }, 100);

    // Method 4: Cookie ব্যবহার করে (Google Translate cookie format)
    document.cookie = `googtrans=/auto/${language}; path=/; max-age=31536000`; // 1 year
    console.log("Language cookie set");
  };

  // Google Translate লোড হয়েছে কিনা চেক করার ফাংশন
  const checkGoogleTranslateLoaded = () => {
    return document.querySelector(".goog-te-combo") !== null;
  };

  // ভাষা ইনিশিয়ালাইজেশন
  const initializeLanguage = () => {
    const savedLang = localStorage.getItem("preferred-language") || "en";
    console.log("Initializing with language:", savedLang);

    setLang(savedLang);
    setIsInitialized(true);

    // Google Translate লোড হওয়ার অপেক্ষা করুন
    const initInterval = setInterval(() => {
      if (checkGoogleTranslateLoaded()) {
        clearInterval(initInterval);
        console.log("Google Translate loaded, setting language:", savedLang);

        // ভাষা সেট করুন
        translatePage(savedLang);

        // নিশ্চিত করুন ভাষা সেট হয়েছে
        setTimeout(() => {
          const select = document.querySelector(".goog-te-combo");
          if (select && select.value !== savedLang) {
            console.log("Language not set correctly, retrying...");
            translatePage(savedLang);
          }
        }, 500);
      }
    }, 100);

    // 5 সেকেন্ড পর timeout
    setTimeout(() => {
      clearInterval(initInterval);
      console.log("Google Translate loading timeout");
    }, 5000);
  };

  // কম্পোনেন্ট মাউন্ট হওয়ার পর ইনিশিয়ালাইজেশন
  useEffect(() => {
    initializeLanguage();

    // পৃষ্ঠা লোড হওয়ার পরও চেক করুন
    window.addEventListener("load", initializeLanguage);

    return () => {
      window.removeEventListener("load", initializeLanguage);
    };
  }, []);

  // Google Translate এর ভাষা পরিবর্তন শনাক্ত করুন
  useEffect(() => {
    if (!isInitialized) return;

    const handleLanguageChange = () => {
      const select = document.querySelector(".goog-te-combo");
      if (
        select &&
        select.value &&
        (select.value === "en" || select.value === "fr")
      ) {
        if (select.value !== lang) {
          console.log(
            "Detected language change from Google Translate:",
            select.value
          );
          setLang(select.value);
          localStorage.setItem("preferred-language", select.value);
        }
      }
    };

    // প্রতি 2 সেকেন্ডে চেক করুন
    const interval = setInterval(handleLanguageChange, 2000);

    // DOM changes পর্যবেক্ষণ করুন
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          handleLanguageChange();
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [lang, isInitialized]);

  // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ করুন
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Google Translate widget লুকান
  useEffect(() => {
    const hideWidget = () => {
      const style = document.createElement("style");
      style.textContent = `
        .goog-te-banner-frame, 
        .goog-te-menu-value, 
        .goog-te-gadget, 
        .skiptranslate, 
        .goog-te-banner, 
        .goog-te-ftab {
          display: none !important;
        }
        body { top: 0px !important; }
        .goog-te-combo { 
          opacity: 0;
          position: absolute;
          pointer-events: none;
          width: 1px;
          height: 1px;
        }
      `;
      document.head.appendChild(style);
      return style;
    };

    const styleElement = hideWidget();

    // Periodically reapply styles (Google Translate might readd elements)
    const styleInterval = setInterval(hideWidget, 1000);

    return () => {
      clearInterval(styleInterval);
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  const currentFlag = lang === "en" ? enFlag : frFlag;
  const currentText = lang === "en" ? "English" : "French";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2  px-3 py-2 rounded-2xl dark:border-gray-600 hover:text-primary-600 cursor-pointer"
      >
        <img src={currentFlag} alt="flag" className="w-5 h-5" />
        <span className="text-sm font-medium">{currentText}</span>
        <Globe size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-36 bg-white border rounded shadow-lg z-50 text-gray-900">
          <button
            onClick={() => changeLanguage("en")}
            className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-100 ${
              lang === "en" ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            <img src={enFlag} alt="English" className="w-5 h-5" />
            English
          </button>
          {/* <button
            onClick={() => changeLanguage("fr")}
            className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-100 ${
              lang === "fr" ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            <img src={frFlag} alt="French" className="w-5 h-5" />
            French
          </button> */}
        </div>
      )}
    </div>
  );
}
