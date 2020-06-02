import axios from "axios";

export class Tracker {
  constructor(referrer, useragent, url) {
    this.referrer = referrer;
    this.useragent = useragent;
    this.currenturl = url;
    this.s1 = this.getParameterByName("s1") || "";
    this.s2 = this.getParameterByName("s2") || "";
    this.s3 = this.getParameterByName("s3") || "";
    this.s4 = this.getParameterByName("s4") || "";
    this.s5 = this.getParameterByName("s5") || "";
    this.timer = new Date();
    this.ts = this.timer.getTime();
    this.timezone_offset = this.timer.getTimezoneOffset();
    this.baseurl = "https://realsolar.free.beeceptor.com";
  }
  getParameterByName(name) {
    if (!this.currenturl) {
      this.currenturl = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(this.currenturl);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return "";
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  async initate_track() {
    let url = this.baseurl + "/api/visitor/track";
    let payload = {
      s1: this.s1,
      s2: this.s2,
      s3: this.s3,
      s4: this.s4,
      s5: this.s5,
      //ts: this.ts,
      //timezone_offset: this.timezone_offset,
      //useragent: this.useragent,
      //referral: this.referrer,
    };
    try {
      const response = await axios.get(
        url,
        { params: payload },
        {
          headers: {
            "Access-Control-Request-Method": "GET",
            Origin: "http://tm.local",
          },
        }
      );
      //const data = await response.json();
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
