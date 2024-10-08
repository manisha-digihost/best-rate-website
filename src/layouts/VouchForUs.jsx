import React, { useRef, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import VideoBtn from '../assets/images/video/video-btn.svg';

// Sample video data
const videos = [
  { id: 1, title: 'Video 1', url: '/src/assets/images/video/video-1.mp4', adminName: 'Carol Glover', adminDesignation: 'CEO' },
  { id: 2, title: 'Video 2', url: '/src/assets/images/video/video-2.mp4', adminName: 'John Doe', adminDesignation: 'CTO' },
  { id: 3, title: 'Video 3', url: '/src/assets/images/video/video-3.mp4', adminName: 'Jane Smith', adminDesignation: 'CMO' },
  { id: 4, title: 'Video 4', url: '/src/assets/images/video/video-1.mp4', adminName: 'Mike Johnson', adminDesignation: 'CFO' },
  { id: 5, title: 'Video 5', url: '/src/assets/images/video/video-2.mp4', adminName: 'Emily Davis', adminDesignation: 'COO' },
  { id: 6, title: 'Video 6', url: '/src/assets/images/video/video-3.mp4', adminName: 'Chris Lee', adminDesignation: 'CMO' },
  { id: 7, title: 'Video 7', url: '/src/assets/images/video/video-1.mp4', adminName: 'Pat Brown', adminDesignation: 'CTO' },
  { id: 8, title: 'Video 8', url: '/src/assets/images/video/video-2.mp4', adminName: 'Olivia Wilson', adminDesignation: 'CEO' },
  { id: 9, title: 'Video 9', url: '/src/assets/images/video/video-3.mp4', adminName: 'Liam Smith', adminDesignation: 'CFO' }
];

const VouchForUs = () => {
  const swiperRef = useRef(null);
  const [scale, setScale] = useState(1); // State to manage scaling
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [currentVideo, setCurrentVideo] = useState(''); // State to store the current video URL

  // Handle video playback based on the active slide
  const handleSlideChange = (swiper) => {
    const slides = swiper.slides;

    // Pause all videos first
    slides.forEach((slide) => {
      const video = slide.querySelector('video');
      if (video) {
        video.pause();
      }
    });

    // Play the video of the active slide
    const activeSlide = slides[swiper.activeIndex];
    const activeVideo = activeSlide.querySelector('video');
    if (activeVideo) {
      activeVideo.play();
    }

    // Scale the corners on slide change
    setScale(1.051);
    setTimeout(() => {
      setScale(1); // Reset scale after 300ms (or any duration you prefer)
    }, 800);
  };

  // Open modal with the current video
  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo(''); // Reset the video source
  };

  return (
    <div className="section start-sucess">
      <Container fluid className="p-lg-0">
        <h2 className="heading">
          Here's the Peeps, Who <br /> Vouch for Us
        </h2>
        <div className="Vouch_wrapper">
          <Swiper
            slidesPerView={1.8}
            spaceBetween={30}
            centeredSlides={true}
            speed={700}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="Vouch_slider"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="videoSlider_videoWrap">
                  <div className="videoSlider_info_content text-center mb-2">
                    <h5 className="admin_name mb-1">{video.adminName}</h5>
                    <p className="admin_designation mb-0">- {video.adminDesignation}</p>
                  </div>
                  <button className="video_button" onClick={() => openModal(video.url)}>
                    <video
                      src={video.url}
                      muted
                      playsInline
                      loop
                    ></video>
                    <div className="button_wrap"><img src={VideoBtn} alt="Video Btn" className='img-fluid' /></div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="videoSlider_cornerWrap">
            <div
              className="videoSlider_corners global_corners"
              style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }} // Apply scaling style
            ></div>
          </div>
        </div>
      </Container>

      {/* Fullscreen Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered className="fullscreen-modal">
        <Modal.Body>
          <button type="button" className="close-btn btn" onClick={closeModal} aria-label="Close">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#fff"/></svg>
          </button>
          <video src={currentVideo} controls autoPlay className="w-100"></video>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VouchForUs;
