function setup() {
    noLoop();
    createCanvas(25000,1000);
  }
  
  
  function draw() {
    translate(-1000,3000);
  pathData ={  "SurvData" :[
      {
        "div": 1,
        "Surv": 340000, 
        "lon": 24, 
        "lat": 54.9,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 340000, 
        "lon": 24.5, 
        "lat": 55,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 340000, 
        "lon": 25.5, 
        "lat": 54.5,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 320000, 
        "lon": 26, 
        "lat": 54.7,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 300000, 
        "lon": 27, 
        "lat": 54.8,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 280000, 
        "lon": 28, 
        "lat": 54.9,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 240000, 
        "lon": 28.5, 
        "lat": 55,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 210000, 
        "lon": 29, 
        "lat": 55.1,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 180000, 
        "lon": 30, 
        "lat": 55.2,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 175000, 
        "lon": 30.3, 
        "lat": 55.3,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 145000, 
        "lon": 32, 
        "lat": 54.8,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 140000, 
        "lon": 33.2, 
        "lat": 54.9,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 127100, 
        "lon": 34.4, 
        "lat": 55.5,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 100000, 
        "lon": 35.5, 
        "lat": 55.4,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 100000, 
        "lon": 36, 
        "lat": 55.5,
        "dir":"A"
      },
      {
        "div": 1,
        "Surv": 100000, 
        "lon": 37.6, 
        "lat": 55.8,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 98000, 
        "lon": 37.5, 
        "lat": 55.7,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 97000, 
        "lon": 37, 
        "lat": 55,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 96000, 
        "lon": 36.8, 
        "lat": 55,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 87000, 
        "lon": 35.4, 
        "lat": 55.3,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 55000, 
        "lon": 34.3, 
        "lat": 55.2,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 37000, 
        "lon": 33.3, 
        "lat": 54.9,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 24000, 
        "lon": 32, 
        "lat": 54.6,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 20000, 
        "lon": 30.4, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 20000, 
        "lon": 29.2, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 20000, 
        "lon": 28.5, 
        "lat": 54.3,
        "dir":"R"
      },
      {
        "div": 1,
        "Surv": 20000, 
        "lon": 28.3, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 60000, 
        "lon": 24, 
        "lat": 55.1,
        "dir":"A"
      },
      {
        "div": 2,
        "Surv": 60000, 
        "lon": 24.5, 
        "lat": 55.2,
        "dir":"A"
      },
      {
        "div": 2,
        "Surv": 60000, 
        "lon": 25.5, 
        "lat": 54.7,
        "dir":"A"
      },
      {
        "div": 2,
        "Surv": 40000, 
        "lon": 26.6, 
        "lat": 55.7,
        "dir":"A"
      },
      {
        "div": 2,
        "Surv": 33000, 
        "lon": 27.4, 
        "lat": 55.6,
        "dir":"A"
      },
      {
        "div": 2,
        "Surv": 30000, 
        "lon": 28.7, 
        "lat": 55.5,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 30000, 
        "lon": 29.2, 
        "lat": 54.3,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 30000, 
        "lon": 28.5, 
        "lat": 54.2,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 28000, 
        "lon": 28.3, 
        "lat": 54.3,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 20000, 
        "lon": 27.5, 
        "lat": 54.5,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 12000, 
        "lon": 26.8, 
        "lat": 54.3,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 14000, 
        "lon": 26.4, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 8000, 
        "lon": 24.6, 
        "lat": 54.5,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 4000, 
        "lon": 24.4, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 4000, 
        "lon": 24.2, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 2,
        "Surv": 4000, 
        "lon": 24.1, 
        "lat": 54.3,
        "dir":"R"
      },
      {
        "div": 3,
        "Surv": 22000, 
        "lon": 24, 
        "lat": 55.2,
        "dir":"A"
      },
      {
        "div": 3,
        "Surv": 22000, 
        "lon": 24.5, 
        "lat": 55.3,
        "dir":"A"
      },
      {
        "div": 3,
        "Surv": 6000, 
        "lon": 24.6, 
        "lat": 55.8,
        "dir":"R"
      },
      {
        "div": 3,
        "Surv": 6000, 
        "lon": 24.2, 
        "lat": 54.4,
        "dir":"R"
      },
      {
        "div": 3,
        "Surv": 6000, 
        "lon": 24.1, 
        "lat": 54.3,
        "dir":"R"
      }
    ],
      cities:[
      {
        "lon": 24, 
        "lat": 55,
        "name":"Kowno"
      },
      {
        "lon": 25.3, 
        "lat": 54.7,
        "name":"Wilna"
      },
      {
        "lon": 26.4, 
        "lat": 54.4,
        "name":"Smorgoni"
      },
      {
        "lon": 26.8, 
        "lat": 54.3,
        "name":"Molodexno"
      },
      {
        "lon": 27.7, 
        "lat": 55.2,
        "name":"Gloubokoe"
      },
      {
        "lon": 27.6, 
        "lat": 53.9,
        "name":"Minsk"
      },
      {
        "lon": 28.5, 
        "lat": 54.3,
        "name":"Studienska"
      },
      {
        "lon": 28.7, 
        "lat": 55.5,
        "name":"Polotzk"
      },
      {
        "lon": 29.2, 
        "lat": 54.4,
        "name":"Bobr"
      },
      {
        "lon": 30.2, 
        "lat": 55.3,
        "name":"Witebsk"
      },
      {
        "lon": 30.4, 
        "lat": 54.5,
        "name":"Orscha"
      },
      {
        "lon": 30.4, 
        "lat": 53.9,
        "name":"Mohilow"
      },
      {
        "lon": 32, 
        "lat": 54.8,
        "name":"Smolensk"
      },
      {
        "lon": 33.2, 
        "lat": 54.9,
        "name":"Dorogobouge"
      },
      {
        "lon": 34.3, 
        "lat": 55.2,
        "name":"Wixma"
      },
      {
        "lon": 34.4, 
        "lat": 55.5,
        "name":"Chjat"
      },
      {
        "lon": 36, 
        "lat": 55.5,
        "name":"Mojaisk"
      },
      {
        "lon": 37.6, 
        "lat": 55.8,
        "name":"Moscou"
      },
      {
        "lon": 36.6, 
        "lat": 55.3,
        "name":"Tarantino"
      },
      {
        "lon": 36.5, 
        "lat": 55,
        "name":"Malo-jarosewli"
      }],
      temperature:[
      {
        "temp":0,
        "lon":37.6
      },
      {
        "temp":0,
        "lon":36
      },
      {
        "temp":-9,
        "lon":33.2
      },
      {
        "temp":-21,
        "lon":32
      },
      {
        "temp":-11,
        "lon":29.2
      },
      {
        "temp":-20,
        "lon":28.5
      },
      {
        "temp":-24,
        "lon":27.2
      },
      {
        "temp":-30,
        "lon":26.7
      },
      {
        "temp":-26,
        "lon":25.3
      }
      
      ]
   }
    var factor = 8;
    var factorx = 70;
    var factory = 52;
    draw_graph();
    for(i=1;i<pathData.temperature.length;i++){
        strokeWeight(5);
        stroke('red');
        line((pathData.temperature[i-1].lon*factorx),-((2500+(factor*pathData.temperature[i-1].temp))),(pathData.temperature[i].lon*factorx),-((2500+(factor*pathData.temperature[i].temp))));
    }
    for(var i = 0; i < pathData.SurvData.length; i++){
      if(pathData.SurvData[i].dir == 'R' && pathData.SurvData[i-1].dir == 'R'){
        strokeWeight(pathData.SurvData[i].Surv/11000);
        stroke('green');
        line(pathData.SurvData[i-1].lon*factorx, -(pathData.SurvData[i-1].lat*factory), pathData.SurvData[i].lon*factorx, -(pathData.SurvData[i].lat*factory));
      }
    }
    for(var i = 1; i < pathData.SurvData.length; i++){
      if(pathData.SurvData[i].dir == 'A' && pathData.SurvData[i-1].dir == 'A'){
        strokeWeight(pathData.SurvData[i].Surv/11000);
        stroke('red');
        line(pathData.SurvData[i-1].lon*factorx, -(pathData.SurvData[i-1].lat*factory), pathData.SurvData[i].lon*factorx, -(pathData.SurvData[i].lat*factory));
      }

      if((pathData.SurvData[i-1].dir == 'A' && pathData.SurvData[i].dir == 'R')){
        strokeWeight(pathData.SurvData[i].Surv/11000);
        stroke('red');
        line(pathData.SurvData[i-1].lon*factorx, -(pathData.SurvData[i-1].lat*factory), pathData.SurvData[i].lon*factorx, -(pathData.SurvData[i].lat*factory));
      }
    }

    for(i=0;i<pathData.cities.length;i++){
      stroke(0);
      strokeWeight(5);
      point(pathData.cities[i].lon*factorx,-(pathData.cities[i].lat*factory)); //x,-y for scaling of axis
      strokeWeight(0);
      textSize(12);
      text(pathData.cities[i].name,(pathData.cities[i].lon*factorx),-((pathData.cities[i].lat*factory)));
  }
  var arr = [];
  for(var i = 0; i < pathData.SurvData.length; i++){
      arr[i] = pathData.SurvData[i].lon;
  }
  var max_val_survdata = Math.max(...arr);
  var min_val_survdata = Math.min(...arr);
  var diff = max_val_survdata - min_val_survdata;
  console.log(diff);
}  


function draw_graph(){
    var factor = 8;
    var factorx = 70;
    fill('#b3b3b3');
    strokeWeight(0);
    textSize(70);
    text('Temperature (C)',(-600+pathData.temperature[0].lon*factorx), -((2500 + (factor*pathData.temperature[0].temp) - 70)));
    stroke('black');
    strokeWeight(3);
    line((pathData.temperature[0].lon*factorx),-((2500+(factor*pathData.temperature[0].temp))),(pathData.temperature[0].lon*factorx),-((2470+(factor*pathData.temperature[pathData.temperature.length-1].temp))));
    line((pathData.temperature[0].lon*factorx),-((2470+(factor*pathData.temperature[pathData.temperature.length-1].temp))),(pathData.temperature[pathData.temperature.length-1].lon*factorx),-((2470+(factor*pathData.temperature[pathData.temperature.length-1].temp))));
    //strokeWeight(8);
    var len = (((2500+(pathData.temperature[0].temp*factorx)))-((2470+(factor*pathData.temperature[pathData.temperature.length-1].temp)))) / 9;
    y_pt = (2500 + (pathData.temperature[0].temp*factorx));
    var j = 0;
    for(var i = 0; i < pathData.temperature.length; i++){
        stroke('black');
        strokeWeight(1);
        line((pathData.temperature[0].lon*factorx), -(y_pt),(pathData.temperature[pathData.temperature.length-1].lon*factorx),-(y_pt));
        stroke('black');
        strokeWeight(8);
        point((pathData.temperature[0].lon*factorx), -(y_pt));
        strokeWeight(0);
        fill('black')
        textSize(10);
        text(-j,(10 + pathData.temperature[0].lon*factorx), -(y_pt));
        y_pt = y_pt - len;
        j = j + 5;
    } 
}