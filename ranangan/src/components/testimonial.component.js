import React from "react"

export default class Banner extends React.Component {
    render() {
        return (
            <section class="testimonial">
                <div class="container">
                    <h2 class="heading">
                        Ranaangan Sports
                    </h2>

                    <div class="row">
                        <div class="col">
                            <div class="review-card">
                                <div class="author-pic author-pic-a"></div>
                                <div class="review-content">
                                    <p class="author-name">Cricket</p>
                                    <p class="review para-line">
                                        Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="review-card">
                                <div class="author-pic author-pic-b"></div>
                                <div class="review-content">
                                    <p class="author-name">Football</p>
                                    <p class="review para-line">
                                        Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="review-card">
                                <div class="author-pic author-pic-c"></div>
                                <div class="review-content">
                                    <p class="author-name">Table Tenis</p>
                                    <p class="review para-line">
                                        Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}