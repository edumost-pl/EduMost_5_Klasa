window.EduMostAssets = {
  matematyka: {
    potegowanie: {
      "paper-folding": "",
      "power-tree": "",
      "base-exponent": ""
    },
    "kolejnosc-wykonywania-dzialan": {
      "ops-queue": "",
      "expr-pair": ""
    },
    "dzialania-pamieciowe": {
      "group-add": "",
      "split-rect": "",
      "near-multiply": "",
      "split-divide": "",
      "zeros-scale": ""
    }
  }
};

window.EduMostAssetUrl = function (path) {
  if (!path) return "";
  const parts = String(path).split(".");
  let node = window.EduMostAssets;
  for (let i = 0; i < parts.length; i++) {
    if (node == null) return "";
    node = node[parts[i]];
  }
  return typeof node === "string" ? node : "";
};
