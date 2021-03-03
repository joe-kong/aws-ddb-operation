function buy(pay) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        if (pay >= 100) {
          console.log("100円の商品を購入しました");
          resolve(pay - 100);
        } else {
          reject(Error("error"));
        }
      }, 500);
    });
  }
  
  buy(550)
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .then(change => {
      console.log(`お釣りは${change}円です`);
      return buy(change);
    })
    .catch(() => console.log("お金が足りないよ"));