import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// images
import Banner1 from "../../assets/images/screenshot 2026-03-21 152737.png";
import Banner2 from "../../assets/images/screenshot 2026-03-21 152806.png";
import Banner3 from "../../assets/images/screenshot 2026-03-21 152831.png";

const Slider = () => {
  const navigate = useNavigate();
  const slides = [
    {
      img: Banner1,
      title: "Advanced Medical Care",
      subtitle: "Dedicated to Your Health and Well-being",
    },
    {
      img: Banner2,
      title: "Expert Specialists",
      subtitle: "World-class doctors at your service",
    },
    {
      img: Banner3,
      title: "Modern Facilities",
      subtitle: "Latest technology for better healthcare",
    },
  ];

  return (
    <div className="main-slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        style={{ height: "600px" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
              }}
            >
              <img
                src={slide.img}
                alt="banner"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                <h1
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    marginBottom: "15px",
                    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    maxWidth: "700px",
                    textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.subtitle}
                </p>
                <div style={{ marginTop: "30px" }}>
                  <button
                    className="btn btn-teal"
                    onClick={() => navigate("/doctors")}
                    style={{
                      backgroundColor: "#008080",
                      color: "white",
                      padding: "12px 30px",
                      borderRadius: "50px",
                      fontWeight: "700",
                      border: "none",
                      boxShadow: "0 10px 20px rgba(0,128,128,0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#006666")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#008080")
                    }
                  >
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
