/** @jsx React.DOM */
(function() {
    'use strict';

    var Quiz = React.createClass({
        render: function() {
            return <div>test</div>;
        }
    });

    React.renderComponet(<Quiz data={"foo"} />, document.body);
})();