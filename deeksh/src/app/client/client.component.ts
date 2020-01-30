import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  highcharts = Highcharts;

  // chart1

  cart11 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Technology Wise Billable Engineers',
        x:+20
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
       
        colorByPoint: true,
        height:'200px',
        width:'300px',
        innerSize: '20%',
        data: [{
          name: 'Java FullStack',
          y: 25,
          events: {
            click: function () {
                window.location.href = "/table"
  
            }
        }
        }, {
          name: 'MEAN Stack',
          y: 15,
          events: {
            click: function () {
                window.location.href = "/table"
  
            }
        }
        }, {
          name: 'Dot Net',
          y: 20,
          events: {
            click: function () {
                window.location.href = "/table"
  
            }
        }
        }, {
          name: 'Data Science',
          y: 30,
          events: {
            click: function () {
                window.location.href = "/table"
  
            }
        }
        }]
      }]
};


//chart2
cart3 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Experience Wise  Billable Engineers',
    x:+15
  },
  tooltip: {
        pointFormat: '{series.data.year} {point.year}: {series.name}: <b>{point.y:.0f}</b>'
      },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.year}</b> ({point.y:,.0f}) ',
        style: {
          fontWeight: 'bold',
          color: 'black'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '150%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Number of Employees',
    innerSize: '50%',
    data: [
      
      {
        year:'0 Years', y : 20,
        events : { click:function(){
          window.location.href = "/table"
        }
      }
      },
      {
        year:'0-1 Years', y : 20,
        events : { click:function(){
          window.location.href = "/table"
        }
      }
      },
      {
        year:'1-2 Years', y : 20,
        events : { click:function(){
          window.location.href = "/table"
        }
      }
      },
      {
        year:'2-3 Years', y : 20,
        events : { click:function(){
          window.location.href = "/table"
        }
      }
      },
      {
        year:'>3 Years', y : 20,
        events : { click:function(){
          window.location.href = "/table"
        }
      }
      }      
    ]
  }]
  };
  ngOnInit() {
	 	// $(".input").focus(function() {
	 	// 	$(this).parent().addClass("focus");
	 	}

  }


