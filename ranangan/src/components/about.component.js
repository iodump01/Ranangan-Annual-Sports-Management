import React from "react"
import aboutimg from '../img/about.png'

export default class Banner extends React.Component {
    render() {
        return (
            <section class="about">
                <div class="container">
                    <div class="row">
                        <div class="col about-content">
                            <h2 class="heading">About<br />Ranaangan</h2>

                            <p class="para-line white">
                                Ranaangan lets group of sports teams or individual athletes that compete against each other and gain points in a specific sport. At its simplest, it may be a local group of amateur athletes who form teams among themselves and compete on weekends; at its most complex, it can be an international professional league making large amounts of money and involving dozens of teams and thousands of players.
                            </p>

                            <button class="btn-link">
                                <a href="#">Learn more</a>
                            </button>
                        </div>
                        <div class="col about-img">
                            <img src={aboutimg} alt="About image" class="aboutImg" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}