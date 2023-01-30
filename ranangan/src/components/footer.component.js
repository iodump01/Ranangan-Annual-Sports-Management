import React from "react"

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <footer class="footer-widget">
                    <div class="container">
                        <h2 class="heading">
                            Live Scores
                        </h2>
                    </div>
                </footer>

                <footer class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="address">
                                    <h2 class="contact-heading">
                                        Mailing address
                                    </h2>
                                    <p class="contact-para-line">
                                        ZCOER, Narhe
                                    </p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mail">
                                    <h2 class="contact-heading">
                                        Email address
                                    </h2>
                                    <p class="contact-para-line">
                                        iodump01@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="number">
                                    <h2 class="contact-heading">
                                        Phone number
                                    </h2>
                                    <p class="contact-para-line">
                                        (+91) XXXXXXXXXX
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}