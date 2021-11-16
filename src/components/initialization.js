import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const initStyle = {
  textAlign: "left",
  align: "left",
};

const clientIdStyle = {
  backgroundColor: "yellow",
};

const codeText = `<script>
//Initialize Axis once per page
window.$AXIS=window.$AXIS||function(){($AXIS.q=$AXIS.q||[]).push(arguments)};$AXIS.l=+new Date;
$AXIS('init', {
	'clientId':'YourClientIdHere',
	'environment':'dev',//”dev” or “prod”
	'pageType':'pdp',
	'clientEnvironment':'example'
});
 
//Load Axis
var s = document.createElement('script');
s.async = true;
s.src = 'https://z.vertebrae-axis.com/scripts/axis.js';
document.head.appendChild(s);
</script>`;

function Initialization() {
  return (
    <div>
      <h1>Initialization</h1>
      <div style={initStyle}>
        <p>
          In order for any 3D, AR or Virtual Try On experience to load, $AXIS
          must be initialized in a script tag, using the following snippet of
          code on every page of your website.
        </p>
        <li>
          Your <span style={clientIdStyle}>clientId</span> will be unique to
          you. Case sensitivity matters.
        </li>
        <h2>Initialization with A/B Testing</h2>
        <li>
          It is recommended Vertebrae manages A/B tests (due to the ability to
          combine user and session data + transaction data in one place, and the
          guarantee that users that convert to mobile via our QR codes will be
          placed in the same testing bucket). If a client manages A/B tests,
          clientEnvironment will need to reflect which A/B bucket the user is
          being placed in.
        </li>

        <div>{/* //example code */}</div>
        <CopyBlock
          language="javascript"
          text={codeText}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <div>{/* //example  properties*/}</div>
      </div>
    </div>
  );
}

export default Initialization;
