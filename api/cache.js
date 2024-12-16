export default class cache {
  callCache(page, action) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let cacheId = localStorage.getItem("SYNTAG_CACHE_ID");
    if (!cacheId) {
      cacheId = Math.random().toString(36).substr(2, 9);
      localStorage.setItem("SYNTAG_CACHE_ID", cacheId);
    }

    // fire and forget
    fetch(
      `https://syntagmatikon.ids-mannheim.de/api/?if=${cacheId}&cache=${page}&action=${action}`,
      requestOptions
    )
      .then((result) => {})
      .catch((error) => console.log("error", error));
  }
}
