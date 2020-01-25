import{o as e,q as t,s as n,u as o,v as s}from"./storybook-preview-d66a1359.js";import{a,f as r}from"./lit-element-9d52ca4f.js";import"./codesandbox-button-15b79192.js";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const p={};function d(n){let{components:a}=n,d=r(n,["components"]);return t("wrapper",i({},p,d,{components:a,mdxType:"MDXLayout"}),t(o,{title:"Framework Examples/Vanilla",parameters:{options:{selectedPanel:"storybookjs/docs/panel"}},mdxType:"Meta"}),t("h1",null,t("inlineCode",{parentName:"h1"},"<stripe-elements>")),t(s,{name:"stripe-elements",mdxType:"Story"},e`<codesandbox-button sandbox-id="y4h9n"> </codesandbox-button>`),t("pre",null,t("code",i({parentName:"pre"},{className:"language-html"}),'<script type="module" src="https://unpkg.com/@power-elements/stripe-elements?module"><\/script>\n<script type="module" src="https://unpkg.com/@power-elements/json-viewer?module"><\/script>\n<script type="module" src="https://unpkg.com/@material/mwc-button?module"><\/script>\n\n<stripe-elements publishable-key="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"></stripe-elements>\n\n<mwc-button disabled>Submit</mwc-button>\n\n<json-viewer></json-viewer>\n\n<script>\n  const viewer = document.querySelector("json-viewer");\n  const stripe = document.querySelector("stripe-elements");\n  const submit = document.querySelector("mwc-button");\n\n  submit.addEventListener("click", onClickSubmit);\n  stripe.addEventListener("source", onSource);\n  stripe.addEventListener("change", onChange);\n\n  function onClickSubmit() {\n    stripe.createSource();\n  }\n\n  function onChange({ target }) {\n    submit.disabled = !target.validate();\n  }\n\n  function onSource({ target: { source } }) {\n    const handleAsJson = response => response.json();\n    const viewJson = object => (viewer.object = object);\n\n    const method = "POST";\n    const body = JSON.stringify(source);\n    const headers = { "Content-Type": "application/json" };\n\n    fetch("/payments", { method, body, headers })\n      .then(handleAsJson)\n      .then(viewJson)\n      .catch(viewJson);\n  }\n<\/script>\n')),t("h1",null,t("inlineCode",{parentName:"h1"},"<stripe-payment-request>")),t(s,{name:"stripe-payment-request",mdxType:"Story"},e`<codesandbox-button sandbox-id="5h7uy"> </codesandbox-button>`),t("pre",null,t("code",i({parentName:"pre"},{className:"language-html"}),'<stripe-payment-request\n    publishable-key="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"\n    generate="payment-method"\n    request-payer-name\n    request-payer-email\n    request-payer-phone\n    amount="326"\n    label="Double Double"\n    country="CA"\n    currency="cad">\n  <stripe-display-item data-amount="125" data-label="Double Double"> </stripe-display-item>\n  <stripe-display-item data-amount="199" data-label="Box of 10 Timbits"> </stripe-display-item>\n  <stripe-shipping-option data-id="pick-up" data-label="Pick Up" data-detail="Pick Up at Your Local Timmy\'s" data-amount="0"> </stripe-shipping-option>\n  <stripe-shipping-option data-id="delivery" data-label="Delivery" data-detail="Timbits to Your Door" data-amount="200"> </stripe-shipping-option>\n</stripe-payment-request>\n\n<json-viewer></json-viewer>\n\n<script>\n  const viewer = document.querySelector("json-viewer");\n  const stripe = document.querySelector("stripe-payment-request");\n\n  stripe.addEventListener("payment-method", onPaymentMethod);\n\n  function onPaymentMethod({ target: { paymentMethod } }) {\n    const handleAsJson = response => response.json();\n    const viewJson = object => (viewer.object = object);\n\n    const method = "POST";\n    const body = JSON.stringify(paymentMethod);\n    const headers = { "Content-Type": "application/json" };\n\n    fetch("/payments", { method, body, headers })\n      .then(handleAsJson)\n      .then(viewJson)\n      .catch(viewJson);\n  }\n<\/script>\n')))}d.isMDXComponent=!0;const c=()=>e`<codesandbox-button sandbox-id="y4h9n"> </codesandbox-button>`;(c.story={}).name="stripe-elements",c.story.parameters={mdxSource:'html`<codesandbox-button sandbox-id="y4h9n"> </codesandbox-button>`'};const m=()=>e`<codesandbox-button sandbox-id="5h7uy"> </codesandbox-button>`;(m.story={}).name="stripe-payment-request",m.story.parameters={mdxSource:'html`<codesandbox-button sandbox-id="5h7uy"> </codesandbox-button>`'};const l={title:"Framework Examples/Vanilla",parameters:{options:{selectedPanel:"storybookjs/docs/panel"}},includeStories:["stripeElements","stripePaymentRequest"]},u={"stripe-elements":"stripeElements","stripe-payment-request":"stripePaymentRequest"};l.parameters=l.parameters||{},l.parameters.docs=a({},l.parameters.docs||{},{page:()=>t(n,{mdxStoryNameToKey:u,mdxComponentMeta:l},t(d,null))});const b=["stripeElements","stripePaymentRequest"];export default l;export{b as __namedExportsOrder,c as stripeElements,m as stripePaymentRequest};
//# sourceMappingURL=vanilla.stories-e5f2e2f8.js.map
