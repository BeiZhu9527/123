// pages/catalogue/catalogue.js
Page({
  data: {

  },
  navigate: function (event) {
    let dest = "../../"+event.currentTarget.dataset.dest;
    console.log(dest);
    wx.navigateTo({
      url: dest,
    })
  }
})