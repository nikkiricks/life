google.charts.load("current", { packages: ["annotationchart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("date", "Date");
  data.addColumn("number", "Personal");
  data.addColumn("string", "Personal title");
  data.addColumn("string", "Personal text");
  data.addColumn("number", "Professional");
  data.addColumn("string", "Professional title");
  data.addColumn("string", "Professional text");
  data.addRows([
    [
      new Date(1985, 2, 16),
      0,
      "Hello World!",
      "I was born!",
      0,
      undefined,
      undefined
    ],
    [
      new Date(1991, 8, 30),
      20000,
      "First crush",
      "Tyler Jaquish",
      0,
      undefined,
      undefined
    ],
    [
      new Date(1993, 1, 1),
      20000,
      undefined,
      undefined,
      20000,
      "Office Paper Shredder",
      "Lots of paper cuts"
    ],
    [
      new Date(1998, 1, 1),
      40000,
      undefined,
      undefined,
      30000,
      "Babysitter",
      "$100 for 40/week!"
    ],
    [
      new Date(2000, 1, 1),
      40000,
      undefined,
      undefined,
      40000,
      "Lifeguard",
      "Never wore enough sun screen."
    ],
    [
      new Date(2001, 2, 16),
      50000,
      "Drivers License",
      "Jeep Wrangler, manual thank you.",
      40000,
      undefined,
      undefined
    ],
    [
      new Date(2001, 2, 18),
      40000,
      undefined,
      undefined,
      20000,
      "Dish Washer",
      "At a truck stop. Hardest job of my life."
    ],
    [
      new Date(2003, 5, 15),
      50000,
      "Graduated High School",
      "I was made for university",
      50000,
      undefined,
      undefined
    ],
    [
      new Date(2007, 7, 15),
      80000,
      "Fell in love",
      "❤️",
      40000,
      undefined,
      undefined
    ],
    [
      new Date(2009, 7, 15),
      50000,
      undefined,
      undefined,
      50000,
      "Tech Accessibility Consultant",
      "Helped students with disabilities access their classroom materials"
    ],
    [
      new Date(2009, 11, 29),
      60000,
      "Got married",
      "Wahoo!",
      40000,
      undefined,
      undefined
    ],
    [
      new Date(2011, 10, 1),
      60000,
      undefined,
      undefined,
      60000,
      "LCM Architects",
      "Project Manager for ADA site regulations"
    ],
    [
      new Date(2013, 1, 7),
      80000,
      "Had my first child",
      "And I heard the universe in her first cry.",
      20000,
      undefined,
      undefined
    ],
    [
      new Date(2015, 9, 15),
      20000,
      undefined,
      undefined,
      60000,
      "Started Feminest.co",
      "A consulting business for female entrepreneurs"
    ],
    [
      new Date(2016, 6, 15),
      75000,
      "Second daughter born",
      "The first born wasn't too happy about it.",
      40000,
      undefined,
      undefined
    ],
    [
      new Date(2016, 9, 25),
      0,
      "Dad died.",
      "Pancreatic cancer.",
      40000,
      undefined,
      undefined
    ],
    [
      new Date(2018, 0, 1),
      50000,
      "Moved to Australia",
      "Sold all of our things to venture around the world",
      40000,
      undefined,
      undefined
    ],
    [
      new Date(2018, 0, 1),
      40000,
      undefined,
      undefined,
      40000,
      "Scale Investors",
      "Worked as a Membership"
    ],
    [
      new Date(2018, 0, 1),
      40000,
      undefined,
      undefined,
      40000,
      "Scale Investors",
      "Worked as a Membership"
    ],
    [
      new Date(2025, 0, 1),
      40000,
      undefined,
      undefined,
      40000,
      undefined,
      undefined
    ]
  ]);

  var chart = new google.visualization.AnnotationChart(
    document.getElementById("chart_div")
  );

  var options = {
    displayAnnotations: true
  };

  chart.draw(data, options);
}