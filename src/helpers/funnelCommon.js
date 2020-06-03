//Generate a TrustedForm Certificate
export const trustedForm = () => {
  const field = "xxTrustedFormCertUrl";
  const provideReferrer = false;
  let tf = document.createElement("script");
  tf.type = "text/javascript";
  tf.async = true;
  tf.src =
    "http" +
    ("https:" == document.location.protocol ? "s" : "") +
    "://api.trustedform.com/trustedform.js?provide_referrer=" +
    escape(provideReferrer) +
    "&field=" +
    escape(field) +
    "&l=" +
    new Date().getTime() +
    Math.random();
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(tf, s);
};

export const leadScript = () => {
  let s = document.createElement("script");
  s.id = "LeadiDscript_campaign";
  s.type = "text/javascript";
  s.async = true;
  s.src =
    "//create.lidstatic.com/campaign/0cfd5396-15c4-921a-bae8-2f4c79ad8761.js?snippet_version=2";
  let newScript = document.getElementsByTagName("script")[0];
  newScript.parentNode.insertBefore(s, newScript);
};
