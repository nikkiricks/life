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
      50,
      "Hello World!",
      "I was born!",
      50,
      undefined,
      undefined
    ],
    [
      new Date(1991, 8, 30),
      70,
      "First crush",
      "Tyler Jaquish",
      50,
      undefined,
      undefined
    ],
    [
      new Date(1993, 1, 1),
      50,
      undefined,
      undefined,
      40,
      "Office Paper Shredder",
      "Lots of paper cuts"
    ],
    [
      new Date(1998, 1, 1),
      50,
      undefined,
      undefined,
      30,
      "Babysitter",
      "$100 for 40/week!"
    ],
    [
      new Date(1999, 10, 27),
      30,
      "Spent Thanksgiving in Rehab",
      "My brother was a recovering addict.",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2000, 1, 1),
      50,
      undefined,
      undefined,
      70,
      "Lifeguard",
      "Never wore enough sun screen."
    ],
    [
      new Date(2001, 2, 16),
      70,
      "Drivers License",
      "Jeep Wrangler, manual thank you.",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2001, 2, 18),
      50,
      undefined,
      undefined,
      20,
      "Dish Washer",
      "At a truck stop. Hardest job of my life."
    ],
    [
      new Date(2002, 8, 15),
      50,
      undefined,
      undefined,
      70,
      "Waitress",
      "Walking home with $80 in tips. Amazing."
    ],
    [
      new Date(2003, 5, 15),
      55,
      "Graduated High School",
      "I was made for university",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2005, 0, 15),
      75,
      "Study Abroad in New Zeland",
      "Recreational Management, incredible experience!",
      50,
      undefined,
      undefined
    ],
    [  new Date(2006, 5, 15),
      50,
      "Graduated University",
      "Now what???",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2006, 9, 30),
      50,
      "Went on a religious mission",
      "They're pretty intense",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2008, 7, 15),
      90,
      "Fell in love",
      "❤️",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2008, 9, 15),
      50,
      undefined,
      undefined,
      30,
      "RECESSION",
      "i.e. string of gig economy jobs: babysitting, dog walking, temping, cheese mongering"
    ],
    [
      new Date(2009, 0, 15),
      60,
      "Grad School",
      "Masters of Urban Planning at UIC",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2009, 7, 15),
      50,
      undefined,
      undefined,
      50,
      "Tech Accessibility Consultant",
      "Helped students with disabilities access their classroom materials"
    ],
    [
      new Date(2009, 11, 29),
      70,
      "Got married",
      "Wahoo!",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2011, 10, 1),
      50,
      undefined,
      undefined,
      60,
      "LCM Architects",
      "Project Manager for ADA site regulations"
    ],
    [
      new Date(2013, 1, 7),
      80,
      "Had my first child",
      "And I heard the universe in her first cry.",
      50,
      undefined,
      undefined
    ],
    [
      new Date(2015, 9, 15),
      20,
      undefined,
      undefined,
      70,
      "Started Feminest.co",
      "A consulting business for female entrepreneurs"
    ],
    [
      new Date(2016, 6, 15),
      75,
      "Second daughter born",
      "The first born wasn't too happy about it.",
      40,
      undefined,
      undefined
    ],
    [
      new Date(2016, 9, 25),
      0,
      "Dad died.",
      "Pancreatic cancer.",
      40,
      undefined,
      undefined
    ],
    [
      new Date(2018, 0, 1),
      50,
      "Moved to Australia",
      "Sold all of our things to venture around the world",
      40,
      undefined,
      undefined
    ],
    [
      new Date(2018, 0, 1),
      40,
      undefined,
      undefined,
      60,
      "Scale Investors",
      "Worked as a Membership"
    ],
    [
      new Date(2019, 8, 30),
      40,
      undefined,
      undefined,
      60,
      "General Assembly Bootcamp",
      "Software Engineering Immersive"
    ],
    [
      new Date(2025, 0, 1),
      50,
      undefined,
      undefined,
      50,
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