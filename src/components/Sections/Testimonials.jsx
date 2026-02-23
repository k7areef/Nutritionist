import { faAngleLeft, faAngleRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./common/SectionHeader";
import data from "@data/testimonials.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "@components/UI/Button";
import avatar1 from "@assets/images/testimonials-avatars/1.png";
import avatar2 from "@assets/images/testimonials-avatars/2.png";
import avatar3 from "@assets/images/testimonials-avatars/3.png";

const avatarsMaper = {
    1: avatar1,
    2: avatar2,
    3: avatar3,
    4: avatar1,
    5: avatar2,
    6: avatar3,
    7: avatar1,
    8: avatar2,
    9: avatar3,
    10: avatar1,
    11: avatar2,
    12: avatar3,
    13: avatar1,
    14: avatar2,
    15: avatar3
}

function Testimonials() {

    const { title, description, testimonials } = data;

    return (
        <section className="testimonials-section py-5 md:py-10" id="testimonials">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="slider mb-5 md:mb-10">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination]}
                        spaceBetween={15}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        navigation={{
                            prevEl: ".testimonials-prev-btn",
                            nextEl: ".testimonials-next-btn"
                        }}
                        pagination={{
                            el: ".testimonials-slider-pagination",
                            clickable: true,
                            type: "bullets",
                            dynamicBullets: true,
                            dynamicMainBullets: 3,
                            renderBullet: (index, className) => `<span class="${className} bg-dark-green-30!"></span>`
                        }}
                    >
                        {
                            testimonials.map((testimonial, index) => (<SwiperSlide key={testimonial.id || index} className="h-auto!">
                                <div className="testimonial-card bg-green-97 border border-green-90 rounded-lg overflow-hidden h-full flex flex-col">
                                    <div className="testimoial-content p-5 bg-white h-full">
                                        <FontAwesomeIcon icon={faQuoteRight} className="text-dark-green-30 text-3xl mb-3" />
                                        <p className="font-medium text-grey-20!">{testimonial.comment}</p>
                                    </div>
                                    <div className="card-foot p-5 flex items-center gap-3 border-t border-t-green-90">
                                        <img src={avatarsMaper[testimonial.id]} alt={testimonial.name} className="rounded-md" />
                                        <h4 className="font-medium text-dark-green-15">{testimonial.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>))
                        }
                    </Swiper>
                </div>
                <div className="slider-controllers flex items-center justify-center gap-3">
                    <Button
                        variant="secondary"
                        className="testimonials-prev-btn border-green-90! text-grey-20! text-2xl p-0! w-12 h-12 flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                    <div className="testimonials-slider-pagination translate-x-1/2"></div>
                    <Button
                        variant="secondary"
                        className="testimonials-next-btn border-green-90! text-grey-20! text-2xl p-0! w-12 h-12 flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;