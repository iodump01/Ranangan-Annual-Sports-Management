import React from "react"

export default class Banner extends React.Component {
    render() {
        return (
            <section class="offer">
                <div class="container">
                    <h2 class="heading">Sports Scores</h2>
                    <p class="sub-heading white">
                        Below are few games for which you could see the scores.
                    </p>

                    <div class="row">
                        <div class="col">
                            <div class="offer-card offer-tour">
                                <h2 class="offer-name">
                                    Cricket
                                </h2>
                            </div>
                        </div>
                        <div class="col">
                            <div class="offer-card offer-classes">
                                <h2 class="offer-name">
                                    Football
                                </h2>
                            </div>
                        </div>
                        <div class="col">
                            <div class="offer-card offer-training">
                                <h2 class="offer-name">
                                    Table Tenis
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}