//c3 chart  
import * as d3 from 'd3';
import * as c3 from 'c3';

class ChartType {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render(){

        var padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 60,
        };
    
        var chartType = c3.generate({
            bindto: "#chartType",
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    ['x', "Light","Circle","Triangle","Unknown","Sphere","Other","Fireball","Disk","Oval","Formation","Cigar","Flash","Rectangle","Changing","Chevron","Diamond","Teardrop","Egg","Cylinder","Cross","Cone","Pyramid"],
                    ['value', 337,193,178,159,108,105,101,88,74,69,42,37,34,30,29,18,14,13,12,5,2,1]
                ],
                type: 'bar',
                labels: {
                    format: {
                        'value': d3.format(',')
                    }
                }
            },
            legend: {
                show: false
            },
            color: {
                pattern: ['#7F98AA']
            },
            axis: {
                rotated: true,
                y: {
                    max: 400,
                    min: 0,
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 8,
                        values: [0, 50, 100, 150, 200, 250, 300, 350, 400],
                        format: d3.format(',')
                    }
                },
                x: {
                    type: 'category'
                }
            }
        });
    }
}

export {
    ChartType as
    default
}