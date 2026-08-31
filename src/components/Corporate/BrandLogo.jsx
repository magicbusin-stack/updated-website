// src/components/Corporate/BrandLogo.jsx
import React from "react";

export default function BrandLogo({ name }) {
  const lowercaseName = name.toLowerCase();

  if (lowercaseName.startsWith("government of")) {
    const stateName = name.replace(/government of/i, "").trim();
    let emblemColor = "border-slate-800 text-slate-800 bg-slate-50";
    let sealIcon = "🏛️"; 

    if (stateName.toLowerCase() === "maharashtra") {
      emblemColor = "border-amber-400 bg-amber-100 text-amber-700";
      sealIcon = "🔆";
    } else if (stateName.toLowerCase() === "madhya pradesh") {
      emblemColor = "border-red-400 bg-red-100 text-red-600";
      sealIcon = "🌳";
    } else if (stateName.toLowerCase() === "rajasthan") {
      emblemColor = "border-orange-400 bg-orange-100 text-orange-600";
      sealIcon = "🏰";
    } else if (stateName.toLowerCase() === "odisha") {
      emblemColor = "border-emerald-400 bg-emerald-100 text-emerald-600";
      sealIcon = "🐘";
    } else if (stateName.toLowerCase() === "haryana") {
      emblemColor = "border-blue-400 bg-blue-100 text-blue-600";
      sealIcon = "⚖️";
    } else if (stateName.toLowerCase() === "mizoram") {
      emblemColor = "border-cyan-400 bg-cyan-100 text-cyan-600";
      sealIcon = "🏔️";
    } else if (stateName.toLowerCase() === "andhra pradesh") {
      emblemColor = "border-violet-400 bg-violet-100 text-violet-600";
      sealIcon = "🌸";
    } else if (stateName.toLowerCase() === "assam") {
      emblemColor = "border-teal-400 bg-teal-100 text-teal-600";
      sealIcon = "🦏";
    }

    return (
      <div className="flex flex-col items-center text-center p-1 w-full">
        <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center font-bold text-base mb-2.5 shadow-sm ${emblemColor}`}>
          {sealIcon}
        </div>
        <div className="leading-tight">
          <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-[0.18em]">Government of</span>
          <span className="block text-[13px] font-black text-slate-800 tracking-tight mt-0.5">{stateName}</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "dasra") {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="w-12 h-12 rounded-full bg-[#E85C2E] flex items-center justify-center font-bold text-xs text-white font-sans tracking-wide shadow-sm hover:scale-105 transition-transform duration-300">
          dasra
        </div>
      </div>
    );
  }

  if (lowercaseName === "life skills collaborative") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#75267D] flex items-center justify-center text-white font-black text-xs shrink-0 shadow-sm">
          LS
        </div>
        <div className="text-left leading-none font-sans">
          <span className="block text-[10px] font-extrabold text-[#75267D]">Life Skills</span>
          <span className="block text-[8px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">Collaborative</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "king's trust international" || lowercaseName === "kings trust international") {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="text-[#DA291C] text-sm font-black tracking-tight uppercase font-sans">King's Trust</span>
        <span className="text-[7px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">International</span>
      </div>
    );
  }

  if (lowercaseName === "undp") {
    return (
      <div className="flex items-center justify-center bg-[#006EB6] text-white font-black text-[13px] tracking-[0.25em] pl-3 pr-2 py-1.5 rounded shadow-sm font-sans">
        UNDP
      </div>
    );
  }

  if (lowercaseName === "yuwaah!" || lowercaseName === "yuwaah") {
    return (
      <div className="flex items-center gap-1.5 font-sans">
        <div className="w-5 h-5 rounded-full border-2 border-dashed border-[#F37021] animate-[spin_10s_linear_infinite]" />
        <span className="font-extrabold text-sm text-[#0F75BC] tracking-tight">YuWaah!</span>
      </div>
    );
  }

  if (lowercaseName === "the bridgespan group" || lowercaseName === "bridgespan") {
    return (
      <div className="flex flex-col items-start leading-none font-sans pl-1">
        <span className="font-black text-[10px] text-slate-800 tracking-wider">THE BRIDGESPAN GROUP</span>
        <div className="flex gap-0.5 items-end mt-1.5 w-full">
          <div className="w-1.5 h-1.5 bg-sky-300" />
          <div className="w-1.5 h-2.5 bg-sky-400" />
          <div className="w-1.5 h-3.5 bg-sky-500" />
          <div className="w-1.5 h-4 bg-sky-600" />
        </div>
      </div>
    );
  }

  if (lowercaseName === "dalberg") {
    return (
      <span className="font-serif font-black text-xl text-[#8C1D40] tracking-tight">
        Dalberg
      </span>
    );
  }

  if (lowercaseName === "sattva") {
    return (
      <div className="flex items-center gap-2 font-sans">
        <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-[#4E9F3D]" />
        <span className="font-black text-xs text-slate-800 tracking-widest">SATTVA</span>
      </div>
    );
  }

  if (lowercaseName === "bigbasket") {
    return (
      <div className="flex items-center gap-1 font-sans">
        <span className="text-[#8CC63F] font-black text-sm">bb</span>
        <span className="text-[#333333] font-bold text-xs tracking-tight">bigbasket</span>
      </div>
    );
  }

  if (lowercaseName === "blue star foundation" || lowercaseName === "blue star") {
    return (
      <div className="flex items-center gap-1.5 font-sans">
        <span className="text-[#0A5CA8] text-lg font-bold">★</span>
        <div className="text-left leading-none">
          <span className="block text-[#0A5CA8] font-black text-xs tracking-wider">BLUE STAR</span>
          <span className="block text-[6px] text-slate-400 font-bold tracking-widest uppercase">Foundation</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "burger king") {
    return (
      <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm">
        <div className="absolute inset-0 rounded-full border-2 border-blue-600 border-r-transparent border-t-transparent transform -rotate-12" />
        <div className="flex flex-col items-center leading-none z-10">
          <span className="w-6 h-1 bg-[#F47920] rounded-full mb-0.5" />
          <span className="text-[#DA291C] font-black text-[7px] tracking-tighter uppercase font-sans">BURGER</span>
          <span className="text-[#DA291C] font-black text-[7px] tracking-tighter uppercase font-sans">KING</span>
          <span className="w-6 h-1 bg-[#F47920] rounded-full mt-0.5" />
        </div>
      </div>
    );
  }

  if (lowercaseName === "café coffee day" || lowercaseName === "cafe coffee day") {
    return (
      <div className="flex items-center gap-1.5 font-sans">
        <div className="bg-[#B91C1C] text-white px-2 py-1.5 rounded font-black text-[9px] leading-tight text-center shadow-sm">
          Café <br /> Coffee <br /> Day
        </div>
      </div>
    );
  }

  if (lowercaseName === "chola") {
    return (
      <div className="flex items-center gap-1 font-serif">
        <span className="text-[#1E3A8A] font-black text-sm tracking-tight">Chola</span>
        <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full self-end mb-1" />
      </div>
    );
  }

  if (lowercaseName === "costa coffee") {
    return (
      <div className="w-12 h-12 rounded-full bg-[#711224] flex flex-col items-center justify-center text-white font-sans shadow-sm">
        <span className="text-[6px] font-bold tracking-widest uppercase">COSTA</span>
        <div className="flex gap-0.5 my-0.5">
          <span className="text-[7px]">☕</span>
        </div>
        <span className="text-[5px] font-medium tracking-wider uppercase">COFFEE</span>
      </div>
    );
  }

  if (lowercaseName === "croma") {
    return (
      <div className="bg-[#007A87] text-white font-light text-xs py-1.5 px-4 rounded tracking-[0.25em] font-sans">
        croma
      </div>
    );
  }

  if (lowercaseName === "eureka forbes") {
    return (
      <div className="flex flex-col items-start leading-none font-sans">
        <span className="text-[#0E3570] font-black text-xs tracking-wider">EUREKA</span>
        <span className="text-[#0E3570] font-black text-xs tracking-wider mt-0.5">FORBES</span>
        <div className="w-8 h-0.5 bg-[#0086CE] mt-1" />
      </div>
    );
  }

  if (lowercaseName === "h&m" || lowercaseName === "h and m") {
    return (
      <span className="font-sans font-black text-xl text-[#E5001C] italic tracking-tighter">
        H&M
      </span>
    );
  }

  if (lowercaseName === "hamleys") {
    return (
      <div className="flex flex-col items-center leading-none">
        <span className="font-serif font-black text-sm text-[#DA291C] italic tracking-tight">Hamleys</span>
        <span className="text-[5px] text-yellow-500 font-bold uppercase tracking-widest mt-0.5">EST. LONDON 1760</span>
      </div>
    );
  }

  if (lowercaseName === "hdb financial services" || lowercaseName === "hdb") {
    return (
      <div className="flex items-center gap-1.5 font-sans">
        <div className="bg-[#004A8F] text-white font-black text-[9px] w-6 h-6 flex items-center justify-center rounded">
          HDB
        </div>
        <div className="text-left leading-none">
          <span className="block text-[#004A8F] font-bold text-[8px]">HDB FINANCIAL</span>
          <span className="block text-[6px] text-slate-400 font-semibold tracking-wider mt-0.5">SERVICES</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "hypercity") {
    return (
      <div className="flex flex-col items-start leading-none font-sans">
        <span className="text-[#E21836] font-black text-xs tracking-tight">HYPERCITY</span>
        <div className="flex gap-0.5 mt-1.5">
          <div className="w-1.5 h-1 bg-[#EEBC1D]" />
          <div className="w-1.5 h-1 bg-[#6CBE45]" />
          <div className="w-1.5 h-1 bg-[#0091FF]" />
        </div>
      </div>
    );
  }

  if (lowercaseName === "icici lombard") {
    return (
      <div className="bg-[#A41D24] text-white py-1 px-2.5 rounded font-black text-[10px] tracking-wide font-sans shadow-sm">
        ICICI Lombard
      </div>
    );
  }

  if (lowercaseName === "intelenet") {
    return (
      <div className="relative font-sans text-center leading-none">
        <div className="absolute -top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        <span className="text-[#09357A] font-extrabold text-[11px] tracking-wider uppercase">intelenet</span>
      </div>
    );
  }

  if (lowercaseName === "kidzania") {
    return (
      <span className="font-sans font-black text-sm text-[#E31B23] tracking-tighter uppercase">
        Kid<span className="text-[#FDB813]">Z</span>ania
      </span>
    );
  }

  if (lowercaseName === "lemon tree hotels" || lowercaseName === "lemon tree") {
    return (
      <div className="flex items-center gap-1.5 font-sans">
        <div className="w-6 h-6 rounded-full bg-[#8DC63F] flex items-center justify-center font-bold text-white text-[10px]">
          🌳
        </div>
        <div className="text-left leading-none">
          <span className="block text-[#666666] font-black text-[10px]">lemon tree</span>
          <span className="block text-[6px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">HOTELS</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "marks & spencer" || lowercaseName === "marks and spencer") {
    return (
      <div className="text-center font-sans tracking-[0.15em] leading-none">
        <span className="text-slate-900 font-black text-[10px]">MARKS & SPENCER</span>
        <span className="block text-[5px] text-slate-400 font-bold mt-0.5 tracking-[0.25em]">LONDON</span>
      </div>
    );
  }

  if (lowercaseName === "mcdonald's" || lowercaseName === "mcdonalds" || lowercaseName === "mcdonald") {
    return (
      <div className="w-10 h-10 bg-[#DA291C] rounded-lg flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-300">
        <span className="text-[#FFC72C] font-sans font-black text-2xl select-none leading-none mt-1">M</span>
      </div>
    );
  }

  if (lowercaseName === "oyo") {
    return (
      <span className="font-sans font-black text-2xl text-[#EE2E24] tracking-tighter">
        oyo
      </span>
    );
  }

  if (lowercaseName === "pantaloons") {
    return (
      <div className="bg-[#008A9A] text-white py-1 px-3.5 rounded-full font-bold text-xs tracking-wider font-sans shadow-sm">
        pantaloons
      </div>
    );
  }

  if (lowercaseName === "sbi" || lowercaseName === "state bank of india") {
    return (
      <div className="flex items-center gap-1.5 font-sans">
        <div className="w-6 h-6 rounded-full border-[6px] border-[#00B4D8] border-r-transparent relative flex items-center justify-center shrink-0">
          <div className="absolute right-[-6px] top-1.5 w-1.5 h-1 bg-[#00B4D8]" />
        </div>
        <span className="text-[#00529B] font-black text-sm tracking-tighter">SBI</span>
      </div>
    );
  }

  if (lowercaseName === "starbucks" || lowercaseName === "starbucks coffee") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#00704A] flex items-center justify-center text-white font-sans text-xs border border-emerald-800 shadow-sm">
        👑🧜‍♀️
      </div>
    );
  }

  if (lowercaseName === "taco bell") {
    return (
      <div className="flex flex-col items-center leading-none font-sans">
        <span className="text-[14px]">🔔</span>
        <span className="text-[#702082] font-black text-[9px] tracking-widest uppercase mt-0.5">TACO BELL</span>
      </div>
    );
  }

  if (lowercaseName === "whsmith" || lowercaseName === "wh smith") {
    return (
      <div className="bg-[#003876] text-white font-serif font-black text-xs py-1.5 px-3 rounded shadow-sm tracking-wider">
        WHSmith
      </div>
    );
  }

  if (lowercaseName === "accenture") {
    return (
      <span className="font-sans font-black text-lg tracking-tight text-slate-800">
        accenture<span className="text-brand-red font-light">&gt;</span>
      </span>
    );
  }

  if (lowercaseName === "adidas") {
    return (
      <div className="flex flex-col items-center">
        <div className="flex gap-0.5 items-end justify-center mb-1">
          <div className="w-1 h-2 bg-slate-800 transform rotate-12"></div>
          <div className="w-1 h-3.5 bg-slate-800 transform rotate-12"></div>
          <div className="w-1 h-5 bg-slate-800 transform rotate-12"></div>
        </div>
        <span className="font-sans font-bold text-xs tracking-tight text-slate-800">adidas</span>
      </div>
    );
  }

  if (lowercaseName === "aditya birla capital") {
    return (
      <div className="text-center">
        <span className="block font-sans font-black text-xs tracking-widest text-amber-700 uppercase">ADITYA BIRLA</span>
        <span className="block font-sans font-bold text-[9px] text-amber-600 tracking-wider uppercase">CAPITAL</span>
      </div>
    );
  }

  if (lowercaseName === "amdocs") {
    return (
      <span className="font-mono font-bold text-lg text-cyan-600 tracking-tighter">
        amdocs
      </span>
    );
  }

  if (lowercaseName === "ansell") {
    return (
      <span className="font-serif font-black text-lg text-blue-900 italic tracking-tight">
        Ansell
      </span>
    );
  }

  if (lowercaseName === "apollo tyres") {
    return (
      <div className="text-center leading-none">
        <span className="font-sans font-black text-sm text-slate-800 uppercase tracking-widest block">apollo</span>
        <span className="font-sans font-medium text-[8px] text-slate-400 uppercase tracking-[0.2em] block mt-0.5">TYRES</span>
      </div>
    );
  }

  if (lowercaseName === "barclays") {
    return (
      <span className="font-sans font-bold text-base text-sky-500 uppercase tracking-wider">
        BARCLAYS
      </span>
    );
  }

  if (lowercaseName === "bank of america") {
    return (
      <div className="text-center leading-tight">
        <span className="font-serif font-semibold text-xs text-blue-900 tracking-wider block">BANK OF AMERICA</span>
      </div>
    );
  }

  if (lowercaseName === "bmw") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full border-2 border-slate-800 flex items-center justify-center font-bold text-[8px] text-slate-800">
          BMW
        </div>
        <span className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wide">Group</span>
      </div>
    );
  }

  if (lowercaseName === "bosch") {
    return (
      <span className="font-sans font-black text-lg text-slate-800 tracking-wider">
        BOSCH
      </span>
    );
  }

  if (lowercaseName === "deloitte") {
    return (
      <span className="font-sans font-extrabold text-lg text-slate-800">
        Deloitte<span className="text-green-600 font-black">.</span>
      </span>
    );
  }

  if (lowercaseName === "espn") {
    return (
      <span className="font-sans font-black text-2xl text-red-600 italic tracking-tighter">
        ESPN
      </span>
    );
  }

  if (lowercaseName === "etihad airways") {
    return (
      <div className="text-center leading-tight">
        <span className="font-serif font-light text-xs tracking-[0.25em] text-amber-800 uppercase block">ETIHAD</span>
        <span className="font-sans font-medium text-[7px] tracking-[0.1em] text-amber-600 uppercase block mt-0.5">AIRWAYS</span>
      </div>
    );
  }

  if (lowercaseName === "j.p. morgan") {
    return (
      <span className="font-serif font-bold text-base text-slate-800 tracking-wide">
        J.P. Morgan
      </span>
    );
  }

  if (lowercaseName === "oracle") {
    return (
      <span className="font-sans font-black text-lg text-red-600 uppercase tracking-widest">
        ORACLE
      </span>
    );
  }

  if (lowercaseName === "vodafone") {
    return (
      <span className="font-sans font-extrabold text-lg text-red-600">
        vodafone
      </span>
    );
  }

  if (lowercaseName === "wipro") {
    return (
      <div className="flex items-center gap-1.5">
        <span className="font-sans font-extrabold text-sm text-slate-800 tracking-wide">wipro</span>
        <div className="flex gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (lowercaseName === "azim premji foundation") {
    return (
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          </div>
        </div>
        <div className="text-left leading-none">
          <span className="font-sans font-black text-xs text-blue-900 block">Azim Premji</span>
          <span className="font-sans font-medium text-[8px] text-slate-500 uppercase tracking-widest block mt-0.5">FOUNDATION</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "biourja") {
    return (
      <div className="flex items-center gap-1">
        <span className="font-sans font-bold text-slate-800 text-sm">Bio</span>
        <span className="font-sans font-black text-green-600 text-sm flex items-center">
          Urja
          <span className="inline-block w-2 h-2 rounded-full bg-green-500/80 ml-0.5 relative -top-1" />
        </span>
      </div>
    );
  }

  if (lowercaseName === "bernard lewis charitable trust") {
    return (
      <div className="text-center leading-tight uppercase font-serif tracking-widest text-[9px] text-slate-700">
        <span className="block font-black text-[10px]">BERNARD LEWIS</span>
        <span className="block font-normal mt-0.5">CHARITABLE TRUST</span>
      </div>
    );
  }

  if (lowercaseName.includes("caf") || lowercaseName.includes("charities aid foundation")) {
    return (
      <div className="flex flex-col items-center leading-none">
        <span className="font-sans font-black text-lg text-slate-900 tracking-wider">CAF</span>
        <span className="font-sans text-[7px] text-slate-400 uppercase tracking-wider mt-0.5">Charities Aid Foundation</span>
      </div>
    );
  }

  if (lowercaseName === "dhanam foundation") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border border-green-600/30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
        </div>
        <div className="text-left leading-none">
          <span className="font-sans font-bold text-xs text-green-700 uppercase tracking-wide block">DHANAM</span>
          <span className="font-sans text-[8px] text-slate-400 uppercase tracking-wider block">FOUNDATION</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "echidna giving") {
    return (
      <div className="text-center font-sans">
        <span className="font-light text-sky-950 text-xs tracking-wider block">echidna</span>
        <span className="font-bold text-teal-600 text-[10px] tracking-widest uppercase block -mt-0.5">giving</span>
      </div>
    );
  }

  if (lowercaseName === "fifa foundation") {
    return (
      <div className="flex items-center gap-1 bg-blue-50/50 px-2.5 py-1 rounded-xl border border-blue-100/50">
        <span className="font-sans font-black text-xs text-blue-900">FIFA</span>
        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
        <span className="font-sans font-light text-[9px] text-slate-600 tracking-wide uppercase">Foundation</span>
      </div>
    );
  }

  if (lowercaseName === "google.org") {
    return (
      <span className="font-sans font-extrabold text-base tracking-tight text-slate-800">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
        <span className="text-slate-500 font-bold text-xs">.org</span>
      </span>
    );
  }

  if (lowercaseName === "the hans foundation" || lowercaseName === "hans foundation") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
          <span className="text-teal-600 font-black text-[10px]">H</span>
        </div>
        <div className="text-left leading-none">
          <span className="font-serif italic text-xs text-teal-800 block">the hans</span>
          <span className="font-sans text-[7px] text-slate-400 uppercase tracking-widest block mt-0.5">foundation</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "laureus" || lowercaseName.includes("laureus")) {
    return (
      <div className="text-center leading-none">
        <span className="font-sans font-black text-xs text-blue-950 uppercase tracking-[0.2em] block">laureus</span>
        <span className="font-sans font-medium text-[6px] text-slate-400 uppercase tracking-widest block mt-1">SPORT FOR GOOD</span>
      </div>
    );
  }

  if (lowercaseName === "life skills collaborative" || lowercaseName === "lifeskills collaborative") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-xl bg-violet-600 text-white flex items-center justify-center font-black text-[10px]">
          LS
        </div>
        <div className="text-left leading-tight">
          <span className="font-sans font-bold text-[9px] text-slate-700 block">LifeSkills</span>
          <span className="font-sans font-light text-[8px] text-slate-400 block -mt-0.5">Collaborative</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "manchester city") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 font-black text-[9px]">
          MCFC
        </div>
        <div className="text-left leading-none">
          <span className="font-sans font-bold text-[10px] text-slate-800 uppercase block">Manchester</span>
          <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wider block mt-0.5">City</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "michael & susan dell foundation" || lowercaseName.includes("dell foundation")) {
    return (
      <div className="text-center leading-tight">
        <span className="font-sans font-light text-[7px] tracking-wider text-slate-500 uppercase block">Michael & Susan</span>
        <span className="font-sans font-black text-xs text-blue-850 uppercase block -mt-0.5">Dell Foundation</span>
      </div>
    );
  }

  if (lowercaseName === "the extra mile" || lowercaseName === "extra mile") {
    return (
      <div className="text-center leading-none">
        <span className="font-sans font-black text-xs text-orange-600 tracking-wider block">THE EXTRA</span>
        <span className="font-sans font-black text-[10px] text-orange-700 tracking-[0.25em] block mt-1">MILE</span>
      </div>
    );
  }

  if (lowercaseName === "wimbledon foundation" || lowercaseName.includes("wimbledon")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full border border-purple-500 bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-[10px]">
          W
        </div>
        <div className="text-left leading-none">
          <span className="font-sans font-bold text-[10px] text-emerald-700 uppercase block">Wimbledon</span>
          <span className="font-sans text-[7px] text-slate-400 uppercase tracking-wider block mt-0.5">Foundation</span>
        </div>
      </div>
    );
  }

  if (lowercaseName === "world resources institute" || lowercaseName.includes("wri") || lowercaseName.includes("world resources")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-[9px]">
          WRI
        </div>
        <div className="text-left leading-none">
          <span className="font-sans font-black text-[9px] text-slate-800 uppercase block">WORLD</span>
          <span className="font-sans text-[7px] text-slate-500 uppercase tracking-wider block mt-0.5">RESOURCES INSTITUTE</span>
        </div>
      </div>
    );
  }

  if (lowercaseName.startsWith("tata")) {
    const subName = name.replace(/tata/i, "").trim();
    return (
      <div className="flex flex-col items-center leading-tight">
        <span className="font-sans font-light text-[10px] tracking-[0.3em] text-blue-900 uppercase">TATA</span>
        <span className="font-sans font-black text-xs text-slate-700 uppercase tracking-wider">{subName}</span>
      </div>
    );
  }

  // Fallback for general cards using premium stylized badges
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  // Generate a hash-based color theme based on the company name to keep things vibrant
  const colors = [
    { bg: "bg-red-50 text-brand-red border-red-100", dot: "bg-brand-red" },
    { bg: "bg-blue-50 text-blue-600 border-blue-100", dot: "bg-blue-500" },
    { bg: "bg-emerald-50 text-emerald-600 border-emerald-100", dot: "bg-emerald-500" },
    { bg: "bg-amber-50 text-amber-700 border-amber-100", dot: "bg-brand-yellow" },
    { bg: "bg-violet-50 text-violet-600 border-violet-100", dot: "bg-violet-500" },
    { bg: "bg-pink-50 text-pink-600 border-pink-100", dot: "bg-pink-500" },
  ];
  
  const charCodeSum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorScheme = colors[charCodeSum % colors.length];

  return (
    <div className="flex items-center gap-3 w-full">
      <div className={`w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-xs shrink-0 ${colorScheme.bg}`}>
        {initials}
      </div>
      <div className="text-left min-w-0">
        <span className="block font-sans font-bold text-[13px] text-slate-800 truncate leading-snug">
          {name}
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`w-1.5 h-1.5 rounded-full ${colorScheme.dot}`} />
          <span className="text-[9px] text-slate-400 font-medium tracking-wide uppercase truncate">
            Partner
          </span>
        </div>
      </div>
    </div>
  );
}
