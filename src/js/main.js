// var mixer = mixitup('.container');
// var mixer = mixitup(containerEl);
// var mixer = mixitup(containerEl, {
//     selectors: {
//         target: '.item'
//     },
//     animation: {
//         duration: 300
//     }
// });
mixitup('#mix-wrapper', {
    load: {
        sort: 'order:asc' /* default:asc */
    },
    animation: {
        effects: 'fade rotateZ(-180deg)',
        /* fade scale */
        duration: 700 /* 600 */
    },

    selectors: {
        target: '.item' /* .mix */
    }
});