module.exports = {
    name: "Blancah Black",
    email: "blancahblack@gmail.com",
    phoneForTel: "555-779-4407",
    phoneFormatted: "(555) 779-4407",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Las Cruces",
        state: "NM",
        zip: "88001",
        country: "US",
        mapLink: "https://maps.app.goo.gl/BV3V4c4vEmfEWQzV8",
    },
    socials: {
        facebook: "https://www.facebook.com/BlancahBlack/",
        instagram: "https://www.instagram.com/blancahblack",
        youtube: "https://www.youtube.com/@Blancah29",
        substack: "https://substack.com/@blancahb"
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://blancahblack.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
