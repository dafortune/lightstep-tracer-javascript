/* global PLATFORM_BROWSER */
/* global TRANSPORT_PROTO */

// Hide the differences in how the Thrift compiler generates code for the
// different platforms as well as expose a Platform class to abstract a few
// general differences in the platforms.
if ((typeof PLATFORM_BROWSER !== 'undefined') && PLATFORM_BROWSER && TRANSPORT_PROTO) {
    module.exports = {
        Platform       : require('./imp/platform/browser/platform_browser.js'),
        ProtoTransport : require('./imp/platform/browser/transport_httpproto.js'),
        proto          : require('./imp/generated_proto/collector_pb.js'),
    };
} else if ((typeof PLATFORM_BROWSER !== 'undefined') && PLATFORM_BROWSER) {
    module.exports = {
        Platform        : require('./imp/platform/browser/platform_browser.js'),
        ThriftTransport : require('./imp/platform/browser/transport_httpthrift.js'),
        thrift          : require('./imp/platform/browser/thrift.js'),
        crouton_thrift  : require('./imp/platform/browser/crouton_thrift.js'),
    };
} else {
    module.exports = {
        Platform        : require('./imp/platform/node/platform_node.js'),
        ThriftTransport : require('./imp/platform/node/transport_httpthrift.js'),
        ProtoTransport  : require('./imp/platform/node/transport_httpproto.js'),
        thrift          : require('thrift'),
        crouton_thrift  : require('./imp/platform/node/crouton_thrift.js'),
        proto           : require('./imp/generated_proto/collector_pb.js'),
    };
}
