import React, { Component } from "react"
import { Link } from "gatsby"
import $ from "jquery"

export default class Menu extends Component {
    jQuerycode = () => {
        $(function() {
            $('#menuButton').on('click', function(e) {
            $('#menu').show();
            $('#menu').animate({opacity: '100%'}, 100)
            });
        });
        
        $(function() {     
            $('#menuIcon').on('click', function(e) {
            $('#menu').animate({opacity: '0%'}, 200, function() {
                $(this).hide();
            });
            });
        });
        
        $('html').click(function(e) {
            if ($(e.target).closest('#menu, #menuButton').length === 0) {
            $('#menu').animate({opacity: '0%'}, 200, function() {
                $(this).hide();
            });
            };
        });
    }
    componentDidMount(){
        this.jQuerycode()
    }
    render() {
        return (
            <>
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
                <script src="menufunc.js"></script>
            </>
        )
    }
}
