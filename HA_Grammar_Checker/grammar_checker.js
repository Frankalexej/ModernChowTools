let currentEvenPage = null;

const entryRanges = [
    [0, 1, 3],
    [2, 4, 5],
    [4, 6, 14],
    [6, 15, 25],
    [8, 26, 33],
    [10, 34, 38],
    [12, 39, 49],
    [14, 50, 59],
    [16, 60, 72],
    [18, 73, 75],
    [20, 76, 83],
    [22, 85, 91],
    [24, 92, 97],
    [26, 98, 107],
    [28, 108, 118],
    [30, 119, 125],
    [32, 126, 134],
    [34, 135, 142],
    [36, 143, 152],
    [38, 158, 153],
    [40, 159, 167],
    [42, 168, 175],
    [44, 176, 183],
    [46, 184, 190],
    [48, 191, 199],
    [50, 200, 206],
    [52, 207, 216],
    [54, 216, 219],
    [56, 220, 225],
    [58, 226, 230],
    [60, 231, 239],
    [62, 240, 243],
    [64, 244, 248],
    [66, 249, 254],
    [68, 255, 260],
    [70, 261, 266],
    [72, 267, 272],
    [74, 273, 279],
    [76, 280, 283],
    [78, 284, 288],
    [80, 289, 297],
    [82, 298, 308],
    [84, 309, 313],
    [86, 314, 316],
    [88, 317, 319],
    [90, 320, 322],
    [92, 323, 324],
    [94, 325, 327],
    [96, 328, 327],
    [98, 329, 330],
    [100, 331, 332],
    [102, 333, 336],
    [104, 337, 340],
    [106, 341, 344],
    [108, 345, 348],
    [110, 349, 352],
    [112, 353, 359],
    [114, 360, 367],
    [116, 368, 375],
    [118, 376, 383],
    [120, 384, 391],
    [122, 392, 401],
    [124, 402, 409],
    [126, 410, 419],
    [128, 420, 429],
    [130, 430, 439],
    [132, 440, 450],
    [134, 451, 460],
    [136, 461, 467],
    [138, 468, 476],
    [140, 476, 477],
    [142, 478, 482],
    [144, 483, 489],
    [146, 489, 489],
    [148, 490, 492],
    [150, 493, 497],
    [152, 498, 503],
    [154, 503, 505],
    [156, 505, 506],
    [158, 507, 508],
    [160, 508, 509],
    [162, 509, 510],
    [164, 511, 511],
    [166, 512, 513],
    [168, 514, 514],
    [170, 515, 517],
    [172, 518, 519],
    [174, 520, 521],
    [176, 522, 524],
    [178, 525, 528],
    [180, 528, 530],
    [182, 531, 533],
    [184, 534, 536],
    [186, 537, 539],
    [188, 540, 548],
    [190, 549, 556],
    [192, 557, 562],
    [194, 563, 571],
    [196, 572, 578],
    [198, 579, 587],
    [200, 588, 594],
    [202, 595, 604],
    [204, 605, 618],
    [206, 614, 621],
    [208, 622, 626],
    [210, 627, 636],
    [212, 637, 648],
    [214, 649, 654],
    [216, 655, 664],
    [218, 665, 673],
    [220, 674, 683],
    [222, 684, 692],
    [224, 695, 702],
    [226, 703, 712],
    [228, 713, 718],
    [230, 719, 724],
    [232, 725, 729],
    [234, 730, 735],
    [236, 736, 742],
    [238, 743, 748],
    [240, 749, 754],
    [242, 755, 761],
    [244, 762, 768],
    [246, 769, 774],
    [248, 775, 781],
    [250, 782, 788],
    [252, 789, 795],
    [254, 796, 799],
    [256, 800, 803],
    [258, 804, 808],
    [260, 809, 816],
    [262, 817, 820],
    [264, 821, 826],
    [266, 827, 838],
    [268, 839, 849],
    [270, 850, 854],
    [272, 855, 860],
    [274, 861, 870],
    [276, 871, 876],
    [278, 877, 885],
    [280, 886, 891],
    [282, 892, 895],
    [284, 896, 900],
    [286, 901, 909],
    [288, 910, 918],
    [290, 919, 926],
    [292, 927, 933],
    [294, 934, 940],
    [296, 941, 948],
    [298, 949, 956],
    [300, 957, 964],
    [302, 965, 969],
    [304, 970, 976],
    [306, 977, 982],
    [308, 983, 990],
    [310, 991, 997],
    [312, 998, 1004],
    [314, 1005, 1011],
    [316, 1012, 1017],
    [318, 1018, 1024],
    [320, 1025, 1034],
    [322, 1035, 1037],
    [324, 1038, 1043],
    [326, 1044, 1048],
    [328, 1049, 1053],
    [330, 1054, 1055],
    [332, 1056, 1063],
    [334, 1064, 1068],
    [336, 1069, 1076],
    [338, 1077, 1085],
    [340, 1086, 1091],
    [342, 1092, 1099],
    [344, 1100, 1105],
    [346, 1106, 1111],
    [348, 1112, 1117],
    [350, 1118, 1122],
    [352, 1123, 1127],
  ];

  const shift = 19;  // Adjust this if the image numbering starts at a different number
  const startPage = 0 - shift;       // first even page of the book
  const endPage = 460 - shift;       // last even page of the book

  function findPage() {
    const entry = parseInt(document.getElementById("entryInput").value, 10);
    const result = document.getElementById("result");
    const images = document.getElementById("images");
  
    images.innerHTML = "";
    result.textContent = "";
  
    if (isNaN(entry) || entry <= 0) {
      result.textContent = "Please enter a valid entry number.";
      return;
    }
  
    for (const [evenPage, start, end] of entryRanges) {
      if (entry >= start && entry <= end) {
        currentEvenPage = evenPage;
        displayPages(evenPage, entry);
        return;
      }
    }
  
    result.textContent = `Entry ${entry} not found in the recorded ranges.`;
  }


  function displayPages(evenPage, entry = null) {
    const images = document.getElementById("images");
    const result = document.getElementById("result");
    images.innerHTML = "";
    result.textContent = "";
  
    const page1 = evenPage;
    const page2 = evenPage + 1;
    const src1 = `pages/${page1 + shift}.jp2`;
    const src2 = `pages/${page2 + shift}.jp2`;
  
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
  
    let imagesLoaded = 0;
    let imagesDisplayed = 0;
  
    img1.src = src1;
    img1.alt = `Page ${page1}`;
    img1.onload = () => {
      images.appendChild(img1);
      imagesDisplayed++;
      checkComplete();
    };
    img1.onerror = () => checkComplete();
  
    img2.src = src2;
    img2.alt = `Page ${page2}`;
    img2.onload = () => {
      images.appendChild(img2);
      imagesDisplayed++;
      checkComplete();
    };
    img2.onerror = () => checkComplete();
  
    function checkComplete() {
      imagesLoaded++;
      if (imagesLoaded === 2 && imagesDisplayed < 2) {
        result.textContent = entry
          ? `Entry ${entry} is on pages ${page1}–${page2}.`
          : `Pages ${page1}–${page2}.`;
      }
    }
  }

  function prevPage() {
    if (currentEvenPage === null) return;
    const prev = currentEvenPage - 2;
    if (prev >= startPage) {
      currentEvenPage = prev;
      displayPages(currentEvenPage);
    }
  }
  
  function nextPage() {
    if (currentEvenPage === null) return;
    const next = currentEvenPage + 2;
    if (next <= endPage) {
      currentEvenPage = next;
      displayPages(currentEvenPage);
    }
  }
  
  function goToPage() {
    let pageInput = parseInt(document.getElementById("pageInput").value, 10);
    if (!isNaN(pageInput) && pageInput >= startPage && pageInput <= endPage) {
      if (pageInput % 2 !== 0) {
        pageInput -= 1;  // force to even page
      }
      currentEvenPage = pageInput;
      displayPages(currentEvenPage);
    } else {
      alert(`Please enter a page number between ${startPage} and ${endPage}.`);
    }
  }
  
  

  // function findPage() {
  //   const entry = parseInt(document.getElementById("entryInput").value, 10);
  //   const result = document.getElementById("result");
  //   const images = document.getElementById("images");
  //   const shift = 19;  // Adjust this if the image numbering starts at a different number
  
  //   images.innerHTML = "";  // Clear old images
  
  //   if (isNaN(entry) || entry <= 0) {
  //     result.textContent = "Please enter a valid entry number.";
  //     return;
  //   }
  
  //   for (const [evenPage, start, end] of entryRanges) {
  //     if (entry >= start && entry <= end) {
  //       const oddPage = evenPage + 1;
  //       result.textContent = `Entry ${entry} is on pages ${evenPage}–${oddPage}.`;
  
  //       const img1 = document.createElement("img");
  //       img1.src = `pages/${String(evenPage + shift)}.png`;
  //       img1.alt = `Page ${evenPage}`;
  //       // img1.style.width = "45%";
  //       // img1.style.marginRight = "2%";
  
  //       const img2 = document.createElement("img");
  //       img2.src = `pages/${String(oddPage + shift)}.png`;
  //       img2.alt = `Page ${oddPage}`;
  //       // img2.style.width = "45%";
  
  //       images.appendChild(img1);
  //       images.appendChild(img2);
  //       return;
  //     }
  //   }
  
  //   result.textContent = `Entry ${entry} not found in the recorded ranges.`;
  // }
  