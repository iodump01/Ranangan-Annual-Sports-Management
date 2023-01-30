import React from "react"

export default class Banner extends React.Component {
    render() {
        return (
            <section class="hero" >
                <div class="container">
                    {/* <div class="logo">IODump</div> */}

                    <div class="content">
                        <h2 class="main-heading">Ranaangan <span>2K23</span></h2>

                        <button class="btn">
                            <a href="#">Lets Play!</a>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}