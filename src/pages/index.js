import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from "../components/menu"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <body>
    <main class="UIContainer">
        <header id="topContainer">
            <div class="button" id="menuButton"><img class="mainIcons" src="images/Frame_3.svg"></img></div>
            <nav id="menu" class="show">
                <img id="menuIcon" src="images/X.svg"></img>
                <ul>
                    <p class="menuItems">SOL SYSTEM</p>
                    <p class="menuItemsHidden">KEPLER SYSTEM<p class="comingSoon">COMING SOON</p></p>
                    <p class="menuItemsHidden">TRAPPIST SYSTEM<p class="comingSoon">COMING SOON</p></p>
                    <p class="menuItems">ABOUT</p>
                    <p class="menuItems">MAN-MADE OBJECTS</p>
                    <p class="menuItems">SIZE COMPARISON</p>
                    <p class="menuItems">DONATE</p>
                </ul>
            </nav>
            <a href="index.html" id="title"><p>SOL SYSTEM</p></a>
        </header>
        <footer id="bottomContainer">
            <div class="button" id="button1"><img class="mainIcons" src="images/chevrons-down.svg"></img></div>
            <div class="button" id="button2"><img class="mainIcons" src="images/arrow-swap.svg"></img></div>
            <a id="button3" href="https://github.com/Cybrlite/solsystem" target="blank"><div class="button"><img class="mainIcons" src="images/GitHub.svg"></img></div></a>
        </footer>
    </main>
    </body>
    <script src="menu.js"></script>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
