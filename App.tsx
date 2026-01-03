import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, CheckCircle, MapPin, Mail, ChevronRight, ChevronLeft, Factory, Package, Droplets, Facebook, Linkedin, Instagram, Play, Target, Eye, ShieldCheck, Zap, Users, Trophy, History, Building2, Calculator, Info, Send } from 'lucide-react';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Dịch vụ & Sản phẩm', href: '#services' },
    { name: 'Dự án', href: '#projects' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="w-10 h-10 bg-dnp-primary text-white flex items-center justify-center font-heading font-bold text-xl rounded">
                DNP
             </div>
             <div className="flex flex-col">
                <span className="font-heading font-bold text-dnp-primary leading-tight">DNP Production</span>
                <span className="font-sans text-xs text-gray-500 tracking-wider">& Trading</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-dnp-accent font-medium transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 text-dnp-accent font-bold font-heading mr-4">
               <Phone size={18} />
               <span>0903 669 005</span>
            </div>
            <a 
              href="#quick-quote" 
              className="bg-dnp-primary text-white px-6 py-2.5 rounded hover:bg-dnp-accent transition-colors font-medium shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Báo giá nhanh
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 font-medium py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <div className="flex items-center gap-2 text-dnp-accent font-bold py-2">
               <Phone size={18} />
               <span>0903 669 005</span>
            </div>
            <a 
              href="#quick-quote" 
              className="bg-dnp-accent text-white text-center py-3 rounded font-bold"
              onClick={() => setIsOpen(false)}
            >
              Báo giá nhanh
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://dnpcorp.vn/media/about.png?v=2" 
          alt="Nhà máy hiện đại" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dnp-primary/90 to-dnp-primary/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-dnp-accent/90 rounded text-sm font-bold tracking-widest mb-4 uppercase">
            DNP Production & Trading
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Luôn làm <br/> <span className="text-dnp-accent">tốt hơn</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Chúng tôi cam kết mang đến giải pháp sản xuất và thương mại toàn diện, chất lượng cao và bền vững cho đối tác.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-dnp-accent text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-dnp-accent transition-all duration-300"
            >
              Nhận tư vấn ngay <ArrowRight size={20} />
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-dnp-primary transition-all duration-300"
            >
              Xem sản phẩm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-dnp-primary py-0">
      <div className="w-full h-[500px] md:h-[600px] relative group overflow-hidden">
        {!isPlaying ? (
          <>
            {/* Thumbnail - Using YouTube maxresdefault for authenticity */}
            <img 
              src="https://img.youtube.com/vi/2xFdQ9t_IKo/maxresdefault.jpg" 
              alt="DNP Factory Tour" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dnp-primary via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
               <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 md:w-24 md:h-24 bg-white/20 hover:bg-dnp-accent backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 mb-6 group-hover:scale-110 border-2 border-white/50"
               >
                  <Play size={40} className="fill-white text-white ml-2" />
               </button>
               <h2 className="font-heading font-bold text-3xl md:text-5xl mb-2 text-center tracking-tight">
                 DNP - Hành trình 50 năm xây dựng và phát triển
               </h2>
               <p className="text-gray-300 text-lg font-light tracking-wider uppercase">DNP Factory Tour</p>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center relative">
            <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-8 right-8 text-white hover:text-dnp-accent z-20 bg-black/50 p-2 rounded-full"
            >
                <X size={32} />
            </button>
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/2xFdQ9t_IKo?autoplay=1" 
                title="DNP Production Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

const BrandStory = () => {
  const coreValues = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Chất lượng là danh dự",
      desc: "Cam kết sản phẩm đầu ra đạt chuẩn quốc tế, kiểm định nghiêm ngặt."
    },
    {
      icon: <Users size={32} />,
      title: "Khách hàng là trọng tâm",
      desc: "Lắng nghe và giải quyết mọi nhu cầu của đối tác bằng sự tận tâm."
    },
    {
      icon: <Zap size={32} />,
      title: "Đổi mới để dẫn đầu",
      desc: "Liên tục cập nhật công nghệ sản xuất hiện đại nhất thế giới."
    },
    {
      icon: <Trophy size={32} />,
      title: "Hợp tác cùng phát triển",
      desc: "Xây dựng mối quan hệ bền vững, đôi bên cùng có lợi."
    }
  ];

  // Timeline Data (Reverse Chronological)
  const historyData = [
    {
      year: "2025",
      title: "Vươn tầm quốc tế & Mở rộng quy mô",
      desc: "Đạt chứng nhận EPD và Sao Vàng Đất Việt 2024. Đầu tư dây chuyền ống HDPE 1.600mm. Xây dựng nhà máy mới 120.000m² tại KCN Đất Đỏ (TP.HCM). Triển khai dự án chống biến đổi khí hậu."
    },
    {
      year: "2024",
      title: "Khẳng định vị thế & Green Mark",
      desc: "Đạt chứng nhận Green Mark (Singapore) cho sản phẩm thân thiện môi trường. Top 1 Ống nhựa hạ tầng & Vật tư ngành nước Việt Nam. Top 5 Doanh nghiệp sản xuất bao bì."
    },
    {
      year: "2023",
      title: "Mở rộng hệ sinh thái",
      desc: "Inochi ra mắt hệ sinh thái Aoi (Mẹ & Bé). Khởi công nhà máy nước Sơn Thạnh. DNP Holding lọt Top 500 Doanh nghiệp lợi nhuận tốt nhất Việt Nam."
    },
    {
      year: "2022",
      title: "Thương hiệu Quốc gia & DNP Holding",
      desc: "3 sản phẩm đạt Thương hiệu Quốc gia. Samsung Engineering đầu tư chiến lược vào DNP Water. Nhựa Đồng Nai chính thức đổi tên thành DNP Holding."
    },
    {
      year: "2021",
      title: "Cổ đông lớn CMC & Tân Phú",
      desc: "Sở hữu 51,14% CMC. Nhựa Tân Phú đổi tên thành Tân Phú Việt Nam. Nâng vốn điều lệ lên 1.189 tỷ đồng, trở thành nhà cung cấp vật liệu hoàn thiện số 1 Việt Nam."
    },
    {
      year: "2020",
      title: "Tăng trưởng vốn & Inochi",
      desc: "Tăng vốn DNP (thêm 91 tỷ) và DNP Water (thêm 200 tỷ). Inochi phủ sóng toàn bộ siêu thị lớn. Nhà máy bao bì số 5 đi vào hoạt động."
    },
    {
      year: "2019",
      title: "Huy động vốn quốc tế",
      desc: "Huy động 20 triệu USD từ Olympus Capital Asia. Ra mắt DNP Hawaco - Thương mại vật tư thiết bị ngành nước."
    },
    {
      year: "2018",
      title: "Ra mắt Inochi & Mở rộng nước",
      desc: "Xây dựng NM nước DNP Bắc Giang. Tăng vốn mạnh mẽ. Chính thức ra mắt thương hiệu gia dụng cao cấp INOCHI."
    },
    {
      year: "2017",
      title: "Thành lập DNP Water",
      desc: "Thành lập DNP Water (vốn 1100 tỷ). Nhận đầu tư 25 triệu USD từ IFC - doanh nghiệp tư nhân ngành nước đầu tiên tại VN nhận đầu tư này."
    },
    {
      year: "2016",
      title: "Mở rộng M&A",
      desc: "Tăng vốn lên 300 tỷ. Sở hữu nhà máy Nhựa Tân Phú và nhà máy nước Đồng Tâm (90.000 m³/ngày đêm)."
    },
    {
      year: "2015",
      title: "Chiến lược ngành nước",
      desc: "Đầu tư sở hữu nhà máy nước Bình Hiệp. Tăng vốn điều lệ lên 135 tỷ đồng."
    },
    {
      year: "2014",
      title: "Số 1 Hạ tầng",
      desc: "Chính thức trở thành nhà sản xuất và cung cấp ống nhựa hạ tầng số 1 Việt Nam."
    },
    {
      year: "2012",
      title: "Tái cấu trúc toàn diện",
      desc: "Chuyển đổi theo mô hình DNP Investment Holding. Thay đổi toàn diện Hội đồng quản trị và Ban điều hành."
    },
    {
      year: "2010",
      title: "Nâng công suất",
      desc: "Nâng công suất nhà máy ống nhựa lên 3.000 tấn/tháng."
    },
    {
      year: "2008",
      title: "Tiên phong công nghệ",
      desc: "Nhà sản xuất đầu tiên tại Việt Nam đầu tư sản xuất ống HDPE 1.000 mm."
    },
    {
      year: "2006",
      title: "Niêm yết HNX",
      desc: "Niêm yết trên HNX (mã DNP). Xây dựng nhà máy nhựa thứ hai tại Quảng Nam."
    },
    {
      year: "2005",
      title: "Xuất khẩu bao bì",
      desc: "Đầu tư nhà máy sản xuất bao bì mềm xuất khẩu."
    },
    {
      year: "2004",
      title: "Cổ phần hóa",
      desc: "Chính thức cổ phần hóa doanh nghiệp."
    },
    {
      year: "1998",
      title: "Sản xuất HDPE",
      desc: "Bắt đầu sản xuất ống nhựa HDPE."
    },
    {
      year: "1996",
      title: "Sản xuất uPVC",
      desc: "Bắt đầu sản xuất ống nhựa uPVC."
    },
    {
      year: "1976",
      title: "Thành lập",
      desc: "Thành lập với mô hình công ty nhà nước."
    }
  ];

  // Pagination Logic
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(historyData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const currentItems = historyData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-dnp-accent font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <History size={16}/> Câu chuyện thương hiệu
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-dnp-primary mt-3 mb-6">
                Kiến tạo giá trị bền vững
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                Trải qua 5 thập kỷ hình thành và phát triển, DNP Production & Trading đã vươn mình trở thành một trong những đơn vị hàng đầu trong lĩnh vực sản xuất công nghiệp và thương mại tại Việt Nam. Chúng tôi không chỉ bán sản phẩm, chúng tôi cung cấp giải pháp.
            </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-dnp-primary text-white p-10 md:p-12 rounded-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target size={120} />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-dnp-accent rounded-lg flex items-center justify-center mb-6 shadow-lg">
                        <Target size={28} className="text-white"/>
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4">Sứ mệnh</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Cung cấp các sản phẩm ống nhựa, bao bì chất lượng cao, an toàn và thân thiện với môi trường, góp phần nâng cao chất lượng cuộc sống và hiệu quả sản xuất cho cộng đồng doanh nghiệp Việt Nam.
                    </p>
                 </div>
            </div>
            <div className="bg-gray-50 text-dnp-primary p-10 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
                 <div className="absolute top-0 right-0 p-8 text-gray-200 group-hover:text-gray-300 transition-colors">
                    <Eye size={120} />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-md text-dnp-primary">
                        <Eye size={28} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4">Tầm nhìn 2030</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Trở thành biểu tượng niềm tin hàng đầu Việt Nam trong lĩnh vực sản xuất công nghiệp phụ trợ, mở rộng thị trường xuất khẩu sang Đông Nam Á và Châu Âu.
                    </p>
                 </div>
            </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
            <h3 className="text-center font-heading font-bold text-3xl text-dnp-primary mb-12">Giá trị cốt lõi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((val, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:border-dnp-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                        <div className="text-dnp-accent mb-4">{val.icon}</div>
                        <h4 className="font-heading font-bold text-lg text-dnp-primary mb-2">{val.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Timeline (Detailed & Pagination) */}
        <div className="border-t border-gray-100 pt-20">
            <div className="flex justify-between items-end mb-12">
               <div>
                 <span className="text-dnp-accent font-bold uppercase tracking-wider text-sm">Chặng đường phát triển</span>
                 <h3 className="font-heading font-bold text-3xl text-dnp-primary mt-2">Lịch sử phát triển</h3>
               </div>
               
               {/* Navigation Buttons */}
               <div className="flex gap-2">
                 <button 
                   onClick={handlePrev}
                   disabled={currentPage === 0}
                   className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${currentPage === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-dnp-primary hover:bg-dnp-primary hover:text-white hover:border-dnp-primary'}`}
                 >
                   <ChevronLeft size={20} />
                 </button>
                 <button 
                   onClick={handleNext}
                   disabled={currentPage === totalPages - 1}
                   className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${currentPage === totalPages - 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-dnp-primary hover:bg-dnp-primary hover:text-white hover:border-dnp-primary'}`}
                 >
                   <ChevronRight size={20} />
                 </button>
               </div>
            </div>

            <div className="relative">
                 {/* Horizontal Line (Desktop) */}
                 <div className="hidden lg:block absolute top-[18px] left-0 w-full h-0.5 bg-gray-100"></div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {currentItems.map((item, idx) => (
                         <div key={idx} className="relative group">
                             {/* Dot Indicator */}
                             <div className="hidden lg:block absolute top-[10px] left-0 w-4 h-4 bg-white border-4 border-dnp-accent rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>
                             
                             <div className="lg:pt-10 pl-6 lg:pl-0 border-l-2 lg:border-l-0 border-gray-100 lg:border-none relative">
                                 {/* Mobile Dot */}
                                 <div className="lg:hidden absolute top-0 left-[-5px] w-2.5 h-2.5 bg-dnp-accent rounded-full"></div>

                                 <span className="font-heading font-bold text-4xl text-dnp-primary/20 group-hover:text-dnp-primary/40 transition-colors block mb-2">
                                   {item.year}
                                 </span>
                                 <h4 className="font-bold text-dnp-primary text-lg mb-3 h-14 flex items-center">
                                   {item.title}
                                 </h4>
                                 <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all border border-transparent group-hover:border-gray-100">
                                   {item.desc}
                                 </p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

const Services = () => {
  const categories = [
    {
      icon: <Droplets size={48} />,
      title: "Ống nhựa & Phụ kiện",
      desc: "Cung cấp ống nhựa HDPE, uPVC, PPR và phụ kiện ngành nước chất lượng cao cho các công trình dân dụng và công nghiệp.",
      image: "https://dnpcorp.vn/media/hstnc.png"
    },
    {
      icon: <Package size={48} />,
      title: "Bao bì cứng & Gia dụng",
      desc: "Giải pháp bao bì cứng, phôi chai ép, chai lọ thành phẩm. Sản phẩm gia dụng: thau, chậu, bình giữ nhiệt, hộp thực phẩm.",
      image: "https://tanphuvietnam.vn/wp-content/uploads/2023/04/bao-bi-hoa-my-pham-2.png"
    },
    {
      icon: <Factory size={48} />,
      title: "Bao bì mềm (Soft Packaging)",
      desc: "Sản xuất bao bì túi quai xách, túi đựng rác, túi đựng thực phẩm với công nghệ in ấn sắc nét, chất lượng cao.",
      image: "https://tanphuvietnam.vn/wp-content/uploads/2023/04/tui-rac.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dnp-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-dnp-accent font-bold uppercase tracking-wider text-sm">Lĩnh vực hoạt động</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-dnp-primary mt-2">Sản phẩm & Dịch vụ</h2>
          <div className="w-20 h-1 bg-dnp-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-dnp-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-dnp-accent text-white p-3 rounded-full shadow-lg">
                    {cat.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-dnp-primary mb-3 group-hover:text-dnp-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <a href="#contact" className="inline-flex items-center text-dnp-primary font-bold text-sm hover:translate-x-1 transition-transform">
                  Nhận báo giá <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface QuoteFormData {
    productGroup: string;
    productName: string;
    unit: string;
    quantity: string;
    province: string;
    ward: string;
    note: string;
    techType: string;
    techValue: string;
}

interface QuoteFormErrors {
    productGroup?: string;
    productName?: string;
    unit?: string;
    quantity?: string;
    province?: string;
    ward?: string;
    techType?: string;
    techValue?: string;
}

const QuickQuote = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState<QuoteFormData>({
        productGroup: '',
        productName: '',
        unit: '',
        quantity: '',
        province: '',
        ward: '',
        note: '',
        techType: '',
        techValue: ''
    });
    const [errors, setErrors] = useState<QuoteFormErrors>({});

    const productGroups = [
        "Ống nhựa HDPE",
        "Ống nhựa uPVC",
        "Ống nhựa PPR",
        "Phụ kiện HDPE",
        "Phụ kiện uPVC",
        "Phụ kiện PPR",
        "Gia công sản xuất phôi ép nhựa – Bao bì cứng",
        "Sản phẩm hoàn thiện – Bao bì cứng",
        "Sản phẩm nhựa gia dụng Inochi",
        "Bao bì mềm"
    ];

    const provinces = [
        "An Giang (Kiên Giang + An Giang trước đây)",
        "Bắc Ninh (Bắc Giang + Bắc Ninh trước đây)",
        "Cà Mau (Bạc Liêu + Cà Mau trước đây)",
        "Cao Bằng",
        "TP. Cần Thơ (Sóc Trăng + Hậu Giang + TP. Cần Thơ trước đây)",
        "TP. Đà Nẵng (Quảng Nam + TP. Đà Nẵng trước đây)",
        "Đắk Lắk (Phú Yên + Đắk Lắk trước đây)",
        "Điện Biên",
        "Đồng Nai (Bình Phước + Đồng Nai trước đây)",
        "Đồng Tháp (Tiền Giang + Đồng Tháp trước đây)",
        "Gia Lai (Gia Lai + Bình Định trước đây)",
        "TP. Hà Nội",
        "Hà Tĩnh",
        "TP. Hải Phòng (Hải Dương + TP. Hải Phòng trước đây)",
        "TP. Hồ Chí Minh (Bình Dương + TPHCM + Bà Rịa – Vũng Tàu trước đây)",
        "TP. Huế",
        "Hưng Yên (Thái Bình + Hưng Yên trước đây)",
        "Khánh Hoà (Khánh Hòa + Ninh Thuận trước đây)",
        "Lai Châu",
        "Lạng Sơn",
        "Lào Cai (Lào Cai + Yên Bái trước đây)",
        "Lâm Đồng (Đắk Nông + Lâm Đồng + Bình Thuận trước đây)",
        "Nghệ An",
        "Ninh Bình (Hà Nam + Ninh Bình + Nam Định trước đây)",
        "Phú Thọ (Hòa Bình + Vĩnh Phúc + Phú Thọ trước đây)",
        "Quảng Ngãi (Quảng Ngãi + Kon Tum trước đây)",
        "Quảng Ninh",
        "Quảng Trị (Quảng Bình + Quảng Trị trước đây)",
        "Sơn La",
        "Tây Ninh (Long An + Tây Ninh trước đây)",
        "Thái Nguyên (Bắc Kạn + Thái Nguyên trước đây)",
        "Thanh Hóa",
        "Tuyên Quang (Hà Giang + Tuyên Quang trước đây)",
        "Vĩnh Long (Bến Tre + Vĩnh Long + Trà Vinh trước đây)"
    ];

    const pnValues = [4, 6, 8, 10, 12, 12.5, 14, 15, 16, 18, 20, 22, 25];

    // Check if extra specs are needed
    const needsSpecs = [
        "Ống nhựa HDPE", "Ống nhựa uPVC", "Ống nhựa PPR",
        "Phụ kiện HDPE", "Phụ kiện uPVC", "Phụ kiện PPR"
    ].includes(formData.productGroup);

    useEffect(() => {
        if (!needsSpecs) {
            setFormData(prev => ({ ...prev, techType: '', techValue: '' }));
        }
    }, [formData.productGroup, needsSpecs]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof QuoteFormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = () => {
        const newErrors: QuoteFormErrors = {};
        if (!formData.productGroup) newErrors.productGroup = "Vui lòng chọn nhóm sản phẩm";
        if (!formData.productName) newErrors.productName = "Vui lòng nhập quy cách sản phẩm";
        if (!formData.unit) newErrors.unit = "Vui lòng chọn đơn vị tính";
        if (!formData.quantity || Number(formData.quantity) <= 0) newErrors.quantity = "Số lượng phải là số dương";
        if (!formData.province) newErrors.province = "Vui lòng chọn tỉnh/thành";
        if (!formData.ward) newErrors.ward = "Vui lòng nhập phường/xã";

        if (needsSpecs) {
            if (!formData.techType) newErrors.techType = "Vui lòng chọn tiêu chí";
            if (!formData.techValue) newErrors.techValue = "Vui lòng nhập giá trị tiêu chí";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                // Reset form after a delay if needed
                setTimeout(() => setSuccess(false), 5000);
            }, 1500);
        }
    };

    return (
        <section id="quick-quote" className="py-20 bg-slate-50 relative">
             {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                 <div className="absolute top-10 left-10 w-64 h-64 bg-dnp-accent rounded-full blur-3xl"></div>
                 <div className="absolute bottom-10 right-10 w-96 h-96 bg-dnp-primary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-dnp-primary p-6 md:p-8 text-white flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <Calculator size={24} className="text-dnp-accent"/>
                                </div>
                                <h2 className="font-heading font-bold text-2xl md:text-3xl">Báo Giá Nhanh</h2>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base ml-1">Điền thông tin dưới đây để nhận báo giá sơ bộ nhanh chóng.</p>
                        </div>
                        
                        {/* Steps Hint */}
                        <div className="hidden md:flex flex-col gap-1 text-xs text-gray-400 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-dnp-accent flex items-center justify-center text-white text-[10px] font-bold">1</div>
                                <span>Chọn sản phẩm</span>
                            </div>
                            <div className="h-4 border-l border-gray-700 ml-2.5"></div>
                             <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-bold">2</div>
                                <span>Nhập quy cách</span>
                            </div>
                            <div className="h-4 border-l border-gray-700 ml-2.5"></div>
                             <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-bold">3</div>
                                <span>Giao hàng</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-10">
                        {success ? (
                             <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-gray-800 mb-2">Gửi yêu cầu thành công!</h3>
                                <p className="text-gray-600 max-w-md mx-auto">
                                    Cảm ơn Quý khách đã quan tâm. Đội ngũ kinh doanh của DNP sẽ tính toán và gửi báo giá sơ bộ đến Quý khách trong thời gian sớm nhất.
                                </p>
                                <button 
                                    onClick={() => {setSuccess(false); setFormData({...formData, note: '', quantity: '', productName: ''})}}
                                    className="mt-8 text-dnp-accent font-bold hover:underline"
                                >
                                    Gửi yêu cầu khác
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Group 1: Product Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nhóm sản phẩm <span className="text-red-500">*</span></label>
                                        <select 
                                            name="productGroup"
                                            value={formData.productGroup}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white outline-none transition-all ${errors.productGroup ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent'}`}
                                        >
                                            <option value="">Chọn nhóm sản phẩm...</option>
                                            {productGroups.map((group, idx) => (
                                                <option key={idx} value={group}>{group}</option>
                                            ))}
                                        </select>
                                        {errors.productGroup && <p className="text-red-500 text-xs mt-1 italic">{errors.productGroup}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Tên / Quy cách sản phẩm <span className="text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            name="productName"
                                            value={formData.productName}
                                            onChange={handleChange}
                                            placeholder="VD: Ống HDPE D110, SDR11, chiều dài 6m/cây"
                                            className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white outline-none transition-all ${errors.productName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent'}`}
                                        />
                                        <p className="text-xs text-gray-400 mt-1 ml-1">Nhập càng chi tiết càng dễ báo giá</p>
                                        {errors.productName && <p className="text-red-500 text-xs mt-1 italic">{errors.productName}</p>}
                                    </div>

                                    {/* Conditional Tech Specs */}
                                    {needsSpecs && (
                                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Tiêu chí kỹ thuật <span className="text-red-500">*</span></label>
                                                <select 
                                                    name="techType"
                                                    value={formData.techType}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setFormData(prev => ({...prev, techValue: ''})); // Reset value on type change
                                                    }}
                                                    className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition-all ${errors.techType ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent'}`}
                                                >
                                                    <option value="">Chọn tiêu chí...</option>
                                                    <option value="PN">Cấp áp lực (PN)</option>
                                                    <option value="Thickness">Độ dày (mm)</option>
                                                </select>
                                                 {errors.techType && <p className="text-red-500 text-xs mt-1 italic">{errors.techType}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Giá trị <span className="text-red-500">*</span></label>
                                                {formData.techType === 'PN' ? (
                                                     <select 
                                                        name="techValue"
                                                        value={formData.techValue}
                                                        onChange={handleChange}
                                                        className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition-all ${errors.techValue ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent'}`}
                                                    >
                                                        <option value="">Chọn PN...</option>
                                                        {pnValues.map(val => (
                                                            <option key={val} value={val}>{val}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input 
                                                        type="number" 
                                                        step="0.1"
                                                        name="techValue"
                                                        value={formData.techValue}
                                                        onChange={handleChange}
                                                        placeholder="VD: 3.2 (mm)"
                                                        disabled={!formData.techType}
                                                        className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition-all ${errors.techValue ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent'}`}
                                                    />
                                                )}
                                                 {errors.techValue && <p className="text-red-500 text-xs mt-1 italic">{errors.techValue}</p>}
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Đơn vị tính <span className="text-red-500">*</span></label>
                                        <select 
                                            name="unit"
                                            value={formData.unit}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white outline-none transition-all ${errors.unit ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent'}`}
                                        >
                                            <option value="">Chọn đơn vị...</option>
                                            <option value="met">Mét (m)</option>
                                          <option value="cay">Cây</option>
                                            <option value="kg">Kg</option>
                                            <option value="cai">Cái</option>
                                        </select>
                                        {errors.unit && <p className="text-red-500 text-xs mt-1 italic">{errors.unit}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Số lượng <span className="text-red-500">*</span></label>
                                        <input 
                                            type="number" 
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            placeholder="VD: 500"
                                            min="1"
                                            className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white outline-none transition-all ${errors.quantity ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent'}`}
                                        />
                                         {errors.quantity && <p className="text-red-500 text-xs mt-1 italic">{errors.quantity}</p>}
                                    </div>
                                </div>

                                {/* Group 2: Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-gray-100">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Tỉnh / Thành phố <span className="text-red-500">*</span></label>
                                        <select 
                                            name="province"
                                            value={formData.province}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white outline-none transition-all ${errors.province ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent'}`}
                                        >
                                            <option value="">Chọn tỉnh/thành...</option>
                                            {provinces.map((prov, idx) => (
                                                <option key={idx} value={prov}>{prov}</option>
                                            ))}
                                        </select>
                                         {errors.province && <p className="text-red-500 text-xs mt-1 italic">{errors.province}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phường / Xã <span className="text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            name="ward"
                                            value={formData.ward}
                                            onChange={handleChange}
                                            placeholder="VD: Phường Bến Nghé / Xã An Phú..."
                                            className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white outline-none transition-all ${errors.ward ? 'border-red-500' : 'border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent'}`}
                                        />
                                        {errors.ward && <p className="text-red-500 text-xs mt-1 italic">{errors.ward}</p>}
                                    </div>
                                </div>

                                {/* Group 3: Note */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Ghi chú thêm</label>
                                    <textarea 
                                        rows={3} 
                                        name="note"
                                        value={formData.note}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent outline-none transition-all" 
                                        placeholder="VD: Cần giao gấp trong 3 ngày, yêu cầu CO/CQ, giao giờ hành chính..."
                                    ></textarea>
                                </div>

                                {/* Disclaimer */}
                                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex items-start gap-3">
                                    <Info className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                        <span className="font-bold text-orange-600">Note:</span> Thông tin tính toán trên chỉ mang tính sơ bộ tham khảo. Để nhận báo giá chi tiết và chính xác, Quý khách vui lòng liên hệ qua Section “Liên hệ với chúng tôi”. Chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.
                                    </p>
                                </div>

                                {/* Submit */}
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-dnp-accent hover:bg-sky-600 hover:-translate-y-1'}`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Đang xử lý...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Nhận báo giá sơ bộ
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        { name: "Dự Án Cấp Nước Vùng 1", capacity: "Công suất 300.000 m3/ngày đêm", img: "https://images2.thanhnien.vn/528068263637045248/2025/10/24/khoi-cong-du-an-cap-nuoc-1-1761277866918288210479.jpg" },
        { name: "Dự Án Cấp Nước Trảng Bàng", capacity: "Công suất 100.000 m3/ngày đêm", img: "https://www.senco.com.vn/upload/senco/images/Trang%20Bang%20Tay%20Ninh/2.jpg" },
        { name: "Dự Án Cấp Nước Sơn Thạnh", capacity: "Công suất 100.000 m3/ngày đêm", img: "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/082023/img_3368_1_20230808172419.jpg" },
        { name: "Dự Án Cấp Nước Bình Hiệp", capacity: "Công suất 36.250 m3/ngày đêm", img: "https://dnpwater.vn/wp-content/uploads/2017/12/Nha-may-Binh-Hiep.jpg" },
        { name: "Dự Án Cấp Nước Đồng Tâm", capacity: "Công suất 90.000 m3/ngày đêm", img: "https://image.vietstock.vn/2012/06/11/63378.jpg" },
        { name: "Dự Án Cấp Nước Bắc Giang", capacity: "Công suất 60.000 m3/ngày đêm", img: "https://tng-solutions.vn/uploads/projects/bac-giang.jpg" },
        { name: "Dự Án Cấp Thoát Nước Củ Chi", capacity: "Công suất 100.000 m3/ngày đêm", img: "https://koastal-eco.com.vn/UserFile/editor/images/XLNT-KCN-An-Phat-1-1.jpg" },
        { name: "Dự Án Cấp Nước Thừa Thiên Huế", capacity: "Công suất 250.000 m3/ngày đêm", img: "https://i.ex-cdn.com/nhadautu.vn/files/content/2024/04/02/huewaco-0626.jpg" },
    ];

    // Pagination Logic
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const currentItems = projects.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                     <div>
                        <span className="text-dnp-accent font-bold uppercase tracking-wider text-sm">Dự án tiêu biểu</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dnp-primary mt-2">Khẳng định chất lượng</h2>
                     </div>
                     
                     {/* Navigation */}
                    <div className="flex gap-2">
                        <button 
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${currentPage === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-dnp-primary hover:bg-dnp-primary hover:text-white hover:border-dnp-primary'}`}
                        >
                        <ChevronLeft size={20} />
                        </button>
                        <button 
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${currentPage === totalPages - 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-dnp-primary hover:bg-dnp-primary hover:text-white hover:border-dnp-primary'}`}
                        >
                        <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentItems.map((project, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-lg cursor-pointer h-80 shadow-md hover:shadow-xl transition-all">
                            <img 
                                src={project.img} 
                                alt={project.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dnp-primary/90 via-dnp-primary/40 to-transparent opacity-100 flex flex-col justify-end p-6">
                                <h3 className="text-white font-heading font-bold text-lg mb-1 leading-tight">{project.name}</h3>
                                <p className="text-dnp-accent text-sm font-medium flex items-center gap-1">
                                    <Building2 size={14}/> {project.capacity}
                                </p>
                                <div className="h-0.5 w-10 bg-dnp-accent mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Partners = () => {
    const waterPartners = [
        "Dowaco", "Vinaconex", "Cienco", "Sawaco", "Huewaco", "Waseco", 
        "Evngenco", "Waseen", "Viwaseen", "Licogi", "Masterise Home", 
        "Capital Land", "Vinhome", "Novaland", "Keppel", "Nam Long", 
        "Khang Điền", "Đất Xanh", "Hoà Bình Construction", "Contecons", 
        "Ricons", "REE"
    ];

    const packagingPartners = [
        "Syngenta", "P&G", "Unilever", "Nestle", "TH Truemilk", 
        "Vinamilk", "CocaCola", "Pepsi", "BigC", "Winmart", 
        "Co.op", "Lotte", "Emart", "Aeon"
    ];

    return (
        <section className="py-16 bg-dnp-primary border-t border-white/10 overflow-hidden">
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-left {
                    animation: scroll-left 40s linear infinite;
                }
                .animate-marquee-right {
                    animation: scroll-left 40s linear infinite reverse;
                }
            `}</style>
            
            <div className="container mx-auto px-4 mb-10 text-center">
                 <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2">Đối tác tin cậy</h3>
                 <p className="text-gray-400">Chúng tôi tự hào đồng hành cùng các doanh nghiệp hàng đầu</p>
            </div>

            {/* Water Sector - Scroll Right (Visual effect only, actually reverse scroll left) */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-4 container mx-auto px-4">
                    <span className="bg-dnp-accent/20 text-dnp-accent px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Ngành Nước & Xây Dựng</span>
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-marquee-right">
                        {[...waterPartners, ...waterPartners].map((partner, idx) => (
                            <li key={idx} className="text-gray-300 font-heading font-bold text-lg md:text-xl whitespace-nowrap hover:text-white transition-colors select-none">
                                {partner}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Packaging Sector - Scroll Left */}
            <div>
                 <div className="flex items-center gap-4 mb-4 container mx-auto px-4">
                    <span className="bg-white/10 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Ngành Bao Bì & Bán Lẻ</span>
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee-left">
                        {[...packagingPartners, ...packagingPartners, ...packagingPartners, ...packagingPartners].map((partner, idx) => (
                            <li key={idx} className="text-gray-400 font-heading font-bold text-lg md:text-xl whitespace-nowrap hover:text-dnp-accent transition-colors select-none">
                                {partner}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    )
}

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dnp-gray relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Info Column */}
            <div className="w-full md:w-5/12 bg-dnp-primary text-white p-10 md:p-14 flex flex-col justify-between">
                <div>
                    <h3 className="font-heading font-bold text-3xl mb-6">Liên hệ với chúng tôi</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Hãy để lại thông tin, đội ngũ chuyên gia của DNP sẽ liên hệ tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-dnp-accent">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Địa chỉ</h4>
                                <p className="text-sm text-gray-300">Lô 13, đường D4, khu công nghiệp Đất Đỏ I, Xã Đất Đỏ, Thành phố Hồ Chí Minh, Việt Nam</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-dnp-accent">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Hotline</h4>
                                <p className="text-sm text-gray-300">0903 669 005</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-dnp-accent">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Email</h4>
                                <p className="text-sm text-gray-300">dnptradingvietnam@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-sm text-gray-400 mb-4">Kết nối với chúng tôi</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dnp-accent transition-colors"><Facebook size={18}/></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dnp-accent transition-colors"><Linkedin size={18}/></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dnp-accent transition-colors"><Instagram size={18}/></a>
                    </div>
                </div>
            </div>

            {/* Form Column */}
            <div className="w-full md:w-7/12 p-10 md:p-14 bg-white">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                            <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent outline-none transition-all" placeholder="Nguyễn Văn A" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                            <input type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent outline-none transition-all" placeholder="09xxxxxxx" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent outline-none transition-all" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sản phẩm quan tâm</label>
                        <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent outline-none transition-all text-gray-600">
                            <option>Ống nhựa & Phụ kiện ngành nước</option>
                            <option>Bao bì cứng (Rigid & household plastics)</option>
                            <option>Bao bì mềm (Plastic Packaging)</option>
                            <option>Khác</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Lời nhắn</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded border border-gray-300 focus:border-dnp-accent focus:ring-1 focus:ring-dnp-accent outline-none transition-all" placeholder="Nội dung yêu cầu..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-dnp-accent text-white font-bold py-4 rounded hover:bg-sky-600 transition-colors shadow-lg transform active:scale-95 duration-200">
                        Gửi yêu cầu
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                         <div className="flex items-center gap-2 mb-6 text-white">
                             <div className="w-10 h-10 bg-dnp-accent text-white flex items-center justify-center font-heading font-bold text-xl rounded">
                                DNP
                             </div>
                             <div className="flex flex-col">
                                <span className="font-heading font-bold text-lg leading-tight">DNP Production</span>
                                <span className="font-sans text-xs text-gray-500 tracking-wider">& Trading</span>
                             </div>
                          </div>
                          <p className="text-sm leading-relaxed mb-6 text-gray-400">
                              Đối tác tin cậy hàng đầu trong lĩnh vực sản xuất ống nhựa, bao bì và thương mại vật tư công nghiệp tại Việt Nam.
                          </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-lg mb-6">Liên kết nhanh</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="hover:text-dnp-accent transition-colors">Về chúng tôi</a></li>
                            <li><a href="#services" className="hover:text-dnp-accent transition-colors">Dịch vụ & Sản phẩm</a></li>
                            <li><a href="#projects" className="hover:text-dnp-accent transition-colors">Dự án tiêu biểu</a></li>
                            <li><a href="#contact" className="hover:text-dnp-accent transition-colors">Liên hệ báo giá</a></li>
                        </ul>
                    </div>

                     {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-lg mb-6">Thông tin liên hệ</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-dnp-accent mt-0.5" />
                                <span>Lô 13, đường D4, khu công nghiệp Đất Đỏ I, Xã Đất Đỏ, Thành phố Hồ Chí Minh, Việt Nam</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <Phone size={18} className="text-dnp-accent" />
                                <span>0903 669 005</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <Mail size={18} className="text-dnp-accent" />
                                <span>dnptradingvietnam@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Placeholder */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-lg mb-6">Bản đồ</h4>
                        <div className="w-full h-48 rounded overflow-hidden shadow-lg border border-gray-700">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4532.312764357641!2d107.29013717937195!3d10.509929696206392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zTMO0IDEzLCDEkcaw4budbmcgRDQsIGtodSBjw7RuZyBuZ2hp4buHcCDEkOG6pXQgxJDhu48gSSwgWMOjIMSQ4bqldCDEkOG7jywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1767438240039!5m2!1svi!2s" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} DNP Production & Trading. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
                        <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-dnp-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <VideoIntro />
        <BrandStory />
        <Services />
        <Projects />
        <Partners />
        <QuickQuote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;