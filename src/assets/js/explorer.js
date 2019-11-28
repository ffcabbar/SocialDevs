/*! explorer.js | Friendkit | © Css Ninja. 2018-2019 */

/* ==========================================================================
Explorer menu js file
========================================================================== */

import $ from 'jquery';

$(document).ready(function () {

    if ($('.explorer-menu').length){

        //Open explorer menu
        $('#explorer-trigger, #mobile-explorer-trigger').on('click', function(){
            $('.explorer-menu').toggleClass('is-active');
        });
    }

})